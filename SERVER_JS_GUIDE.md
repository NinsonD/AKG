# Server.js Setup Guide for cPanel Hosting

## What is server.js?

`server.js` is a custom Node.js server file that starts your Next.js application in production mode. It:
- Handles HTTP requests and routes them through Next.js
- Gracefully manages process signals (SIGTERM, SIGINT)
- Works seamlessly with cPanel Node.js hosting
- Provides better control over the application lifecycle

## Quick Start

### 1. **Locally (for testing)**

```bash
# Build the project
npm run build

# Test the server locally
npm start
```

You should see:
```
✓ Next.js Server Ready
  Environment: production
  URL: http://localhost:3000
```

### 2. **On cPanel Server (via SSH)**

```bash
# SSH into your server
ssh username@your-server.com

# Navigate to project
cd ~/public_html/agntix-nextjs

# Install dependencies (production only)
npm ci --production

# Build the application
npm run build

# Start the server
npm start
```

## cPanel Node.js Manager Setup

### Step 1: Access Node.js Manager
1. Login to cPanel
2. Go to **Hosting Settings** or **Software** section
3. Click **Node.js Manager** (also called "Application Manager" or "Node.js")

### Step 2: Create Application
Click **"Create Application"** and fill in:

| Field | Value |
|-------|-------|
| **Node.js version** | 18.x or higher |
| **Application root** | `/home/username/public_html/agntix-nextjs` |
| **Application URL** | Your domain (e.g., `yourdomain.com`) |
| **Startup file** | `server.js` |
| **Run as user** | Your cPanel username |

### Step 3: Set Environment Variables
In the Node.js Manager (or edit `.env.local`):

```
NODE_ENV=production
PORT=3000
```

### Step 4: Deploy
Click **Create** or **Deploy** — cPanel will:
- Start the Node.js application
- Configure the web server to proxy requests to `http://localhost:3000`
- Set up auto-restart

## File Structure on Server

```
~/public_html/agntix-nextjs/
├── server.js              ← Startup file
├── package.json           ← Updated with "start": "node server.js"
├── .next/                 ← Built Next.js app (created by npm run build)
├── public/                ← Static assets
├── src/                   ← Source code
├── node_modules/          ← Dependencies (installed via npm ci)
└── .env.local             ← Environment variables (create on server)
```

## Environment Variables (.env.local)

Create `.env.local` on your cPanel server (do NOT include in Git):

```bash
NODE_ENV=production
PORT=3000

# Add any API endpoints here if needed
# NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## Deployment Workflow (Recommended)

### Option A: Using Git (recommended)

```bash
# On server via SSH
cd ~/public_html
git clone https://github.com/NinsonD/AKG.git agntix-nextjs
cd agntix-nextjs

# Install and build
npm ci --production
npm run build

# Start via cPanel Node.js Manager (set startup file to server.js)
```

### Option B: Using FTP/Upload

1. Upload entire project folder (excluding `node_modules/` and `.next/`)
2. SSH into server:
```bash
cd ~/public_html/agntix-nextjs
npm ci --production
npm run build
```
3. In cPanel Node.js Manager: set startup file to `server.js` and click **Deploy**

## Monitoring & Troubleshooting

### View Application Logs
In cPanel Node.js Manager:
- Click the app
- View **"Startup Log"** and **"Error Log"**

Or via SSH:
```bash
cd ~/public_html/agntix-nextjs
tail -f logs/err.log
tail -f logs/out.log
```

### Common Issues

| Issue | Solution |
|-------|----------|
| "Cannot find module 'next'" | Run `npm ci --production` on server |
| "Port already in use" | cPanel assigns port automatically; don't hardcode |
| "Module not found" errors | Ensure `.next/` folder exists; rebuild if missing |
| App won't start | Check Node.js version (18+); view error logs |
| Static files (CSS, images) missing | Verify `public/` folder is uploaded; check permissions |

### Permissions

If you get permission errors:
```bash
cd ~/public_html/agntix-nextjs
chmod -R 755 .next public
chown -R username:username .
```

## Alternative: Using PM2 (Optional)

If your cPanel supports PM2:

```bash
# SSH into server
ssh username@your-server.com

# Install PM2 globally
npm install -g pm2

# Navigate to project
cd ~/public_html/agntix-nextjs

# Start with PM2
pm2 start server.js --name "agntix-nextjs"
pm2 save
pm2 startup
```

Then in cPanel, set:
- **Startup file**: `pm2 start server.js`
- Or use the `ecosystem.config.js` included in the repo

## Scripts Available

```bash
npm run dev          # Development mode (local only)
npm run build        # Build production bundle
npm start            # Start production server (uses server.js)
npm run start:next   # Start with default Next.js server (alternative)
npm run lint         # Run ESLint
npm run clean        # Remove node_modules and locks
```

## Performance Tips

1. **Enable gzip compression** in cPanel
2. **Set proper cache headers** in cPanel
3. **Use CDN** for static assets (images, fonts)
4. **Monitor memory usage** in cPanel
5. **Enable SSL/HTTPS** via cPanel SSL Manager

## Security Reminders

- ✅ Never commit `.env.local` to Git (already in `.gitignore`)
- ✅ Keep Node.js version updated via cPanel
- ✅ Use strong SSH keys and disable password auth if possible
- ✅ Enable HTTPS/SSL certificate (free via Let's Encrypt in cPanel)
- ✅ Regularly update dependencies: `npm update --production`

## Updating the Application

To pull latest changes from GitHub:

```bash
cd ~/public_html/agntix-nextjs
git pull origin main
npm ci --production
npm run build

# Restart via cPanel Node.js Manager or:
pm2 restart agntix-nextjs
```

## Support & Documentation

- **Next.js**: https://nextjs.org/docs
- **cPanel**: Contact your hosting provider
- **GitHub**: https://github.com/NinsonD/AKG
- **Node.js**: https://nodejs.org/docs/

---

**Ready to deploy?** Follow the "cPanel Node.js Manager Setup" section above and select `server.js` as your startup file!
