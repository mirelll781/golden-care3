import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Simple IP-based rate limiting in memory
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limitWindow = 3600 * 1000; // 1 hour window
  const maxRequests = 3; // maximum 3 contact submissions per hour per IP

  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (now - record.lastReset > limitWindow) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

// Lazy load Resend SDK to prevent crashes on startup if key is missing
let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is required for email delivery.');
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Metod nije dozvoljen. Koristite POST.' });
  }

  try {
    const { fullName, email, phone, message, serviceInterest, website } = req.body;

    // 1. Honeypot Spam Protection
    // 'website' is a hidden field. If filled, we assume it's a bot and return a silent 200 success response.
    if (website && website.trim() !== '') {
      console.warn('Bot detected via honeypot field:', { website });
      return res.status(200).json({
        success: true,
        message: 'Zahtjev uspješno primljen.',
        note: 'Silent spam mitigation triggered'
      });
    }

    // 2. IP Rate Limiting
    const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
    if (isRateLimited(ip)) {
      return res.status(429).json({
        error: 'Previše zahtjeva. Molimo Vas pokušajte ponovo za sat vremena ili nas pozovite direktno.'
      });
    }

    // 3. Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Molimo unesite Vaše ime i prezime (minimalno 2 znaka).' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return res.status(400).json({ error: 'Molimo unesite ispravan broj telefona.' });
    }

    if (!serviceInterest || typeof serviceInterest !== 'string' || serviceInterest.trim() === '') {
      return res.status(400).json({ error: 'Molimo odaberite uslugu koja Vas zanima.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ error: 'Molimo opišite Vaše potrebe (minimalno 10 znakova).' });
    }

    // Sanitize values
    const cleanName = fullName.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email ? email.trim() : null;
    const cleanService = serviceInterest.trim();
    const cleanMessage = message.trim();
    const submissionDate = new Date().toLocaleString('bs-BA', {
      timeZone: 'Europe/Sarajevo',
      dateStyle: 'long',
      timeStyle: 'medium'
    });

    // 4. Initialize Resend
    const resend = getResendClient();

    // From email config (onboarding@resend.dev is default for unverified domains)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Golden Care <onboarding@resend.dev>';
    const adminNotificationEmail = 'goldencare.tuzla@gmail.com';

    // 5. Build Admin Email Body (HTML)
    const adminHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03); border: 1px solid #f1f5f9;">
          
          <!-- Header with Brand Accent -->
          <div style="background-color: #0f172a; padding: 32px; text-align: center; border-bottom: 4px solid #d97706;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: -0.025em;">Novi Zahtjev za Njegu</h1>
            <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 14px;">Primljen novi upit preko web stranice</p>
          </div>

          <!-- Content Area -->
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 35%; font-weight: bold; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Ime i Prezime</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 16px; color: #0f172a; font-weight: 500;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Usluga</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 16px; color: #d97706; font-weight: 600;">${cleanService}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Telefon</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 16px; color: #0f172a;"><a href="tel:${cleanPhone}" style="color: #0f172a; text-decoration: none; font-weight: 500;">${cleanPhone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Email adresa</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 16px; color: #0f172a;">${cleanEmail ? `<a href="mailto:${cleanEmail}" style="color: #3b82f6; text-decoration: none;">${cleanEmail}</a>` : '<span style="color: #94a3b8; font-style: italic;">Nije navedena</span>'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Vrijeme slanja</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #475569;">${submissionDate}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; margin-top: 16px;">
              <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Opis Potreba / Poruka:</h3>
              <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</p>
            </div>
          </div>

          <!-- Footer Area -->
          <div style="background-color: #f1f5f9; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 12px; color: #64748b;">Golden Care Tuzla &bull; Profesionalna kućna njega starijih osoba</p>
          </div>
        </div>
      </div>
    `;

    // 6. Send notification email to Admin (Golden Care team)
    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: adminNotificationEmail,
      subject: `Novi zahtjev: ${cleanName} - ${cleanService}`,
      html: adminHtml,
      replyTo: cleanEmail || undefined
    });

    if (adminEmailResult.error) {
      console.error('Error sending admin notification via Resend:', adminEmailResult.error);
      return res.status(500).json({ error: 'Slanje upita nije uspjelo preko email servisa.' });
    }

    // 7. Send confirmation email to Visitor (if email provided)
    if (cleanEmail) {
      const visitorHtml = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03); border: 1px solid #f1f5f9;">
            
            <!-- Header -->
            <div style="background-color: #0f172a; padding: 32px; text-align: center; border-bottom: 4px solid #d97706;">
              <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: bold; letter-spacing: -0.025em;">Hvala Vam na kontaktu</h2>
              <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 14px;">Golden Care - Briga sa ljubavlju i dostojanstvom</p>
            </div>

            <!-- Content Area -->
            <div style="padding: 32px; line-height: 1.6;">
              <p style="font-size: 16px; color: #0f172a; margin-top: 0; font-weight: bold;">Poštovani/a ${cleanName},</p>
              <p style="font-size: 15px; color: #334155;">Zahvaljujemo se na povjerenju koje ste nam ukazali slanjem upita za uslugu <strong>"${cleanService}"</strong>.</p>
              <p style="font-size: 15px; color: #334155;">Naš koordinator za organizaciju kućne njege u Tuzli će pregledati Vaš zahtjev i kontaktirati Vas telefonskim putem u najkraćem roku (obično unutar 2 sata) kako bismo porazgovarali o detaljima i odgovorili na sva Vaša pitanja.</p>
              
              <div style="margin: 32px 0; padding: 20px; background-color: #fffbeb; border-left: 4px solid #d97706; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; font-size: 14px; color: #b45309; font-weight: bold;">U hitnim slučajevima slobodno nas pozovite direktno:</p>
                <p style="margin: 8px 0 0 0; font-size: 18px; font-weight: bold; color: #0f172a;"><a href="tel:+38761509570" style="color: #0f172a; text-decoration: none;">+387 61 509 570</a></p>
              </div>

              <p style="font-size: 14px; color: #64748b; margin-bottom: 0;">S poštovanjem,<br/><strong>Vaš Golden Care tim Tuzla</strong></p>
            </div>

            <!-- Footer Area -->
            <div style="background-color: #f1f5f9; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">Ovaj email je automatska potvrda. Molimo Vas da ne odgovarate direktno na ovu poruku.</p>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #94a3b8;">&copy; ${new Date().getFullYear()} Golden Care Tuzla. Sva prava zadržana.</p>
            </div>
          </div>
        </div>
      `;

      try {
        await resend.emails.send({
          from: fromEmail,
          to: cleanEmail,
          subject: `Potvrda prijema zahtjeva - Golden Care`,
          html: visitorHtml
        });
      } catch (err) {
        // Log error but don't fail the primary request since the main admin notification succeeded
        console.error('Failed to send confirmation email to visitor:', err);
      }
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Zahtjev je uspješno poslan i registrovan!'
    });

  } catch (error: any) {
    console.error('Contact endpoint error:', error);
    return res.status(500).json({
      error: 'Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas pozovite direktno.'
    });
  }
}
