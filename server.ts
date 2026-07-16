import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import contactHandler from './api/contact';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON body requests
  app.use(express.json());

  // API endpoints mounted before static assets/Vite
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', environment: process.env.NODE_ENV || 'development' });
  });

  // Proxy the contact submission serverless function
  app.post('/api/contact', async (req, res) => {
    try {
      await contactHandler(req as any, res as any);
    } catch (err: any) {
      console.error('Express wrapper error in contact handler:', err);
      res.status(500).json({ error: 'Došlo je do neočekivane greške na serveru.' });
    }
  });

  // Vite middleware or static files serving based on environment
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('Vite development server loaded in middleware mode.');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Serving production-built static files from dist/.');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start fullstack server:', err);
});
