const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Create the Next.js app
const app = next({
  dev,
  dir: path.join(__dirname),
  hostname,
  port,
});

const handle = app.getRequestHandler();

// Prepare the Next.js app
app.prepare().then(() => {
  // Create HTTP server
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`
╔════════════════════════════════════════╗
║  ✓ Next.js Server Ready                ║
║  Environment: ${dev ? 'development' : 'production'}               ║
║  URL: http://${hostname}:${port}${' '.repeat(Math.max(0, 22 - hostname.length - String(port).length))} ║
╚════════════════════════════════════════╝
    `);
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(0);
});
