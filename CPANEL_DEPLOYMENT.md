# cPanel Deployment Guide for Agntix Next.js Project

## Prerequisites
- cPanel hosting account with Node.js support
- SSH access to your server
- Domain/subdomain pointed to your hosting

## Step-by-Step Deployment

### 1. **Prepare Your Project Locally**
```bash
# Build the project
npm run build

# This creates an optimized production build in the `.next` folder
```

### 2. **Create FTP/Upload Package**

Your project structure after build should include:
```
agntix-nextjs/
├── .next/               (Production build - ~100MB)
├── node_modules/        (Dependencies)
├── public/              (Static assets)
├── src/                 (Source code)
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── .env.local (if you have environment variables)
└── ecosystem.config.js  (PM2 config - create this)
```

### 3. **Create PM2 Ecosystem Configuration**

Create a file named `ecosystem.config.js` in your project root:

```javascript
module.exports = {
  apps: [{
    name: 'agntix-nextjs',
    script: 'npm start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
```

### 4. **Upload to cPanel via FTP**

1. Connect to your hosting via FTP (use FileZilla or any FTP client)
2. Upload the entire project folder to your public_html or a subdirectory
3. Make sure to upload:
   - `.next/` folder
   - `public/` folder
   - `src/` folder
   - `node_modules/` folder (or reinstall on server)
   - All configuration files (package.json, next.config.ts, tsconfig.json, etc.)

**Alternative: Use Git**
```bash
# SSH into your server
ssh user@your-domain.com

# Clone your repository
cd public_html
git clone https://github.com/your-username/agntix-nextjs.git
cd agntix-nextjs

# Install dependencies
npm install --production

# Build (if not already built)
npm run build
```

### 5. **Install Dependencies on Server**

SSH into your server:
```bash
ssh user@your-domain.com
cd ~/public_html/agntix-nextjs

# Install only production dependencies
npm install --production

# Or reinstall all
npm install
```

### 6. **Configure Node.js Application in cPanel**

1. **Login to cPanel**
2. Navigate to **Node.js Manager** (or **Application Manager**)
3. Click **Create Application**
4. Fill in the details:
   - **Node.js version**: 18.x or higher
   - **Application root**: `/home/username/public_html/agntix-nextjs`
   - **Application URL**: Your domain/subdomain
   - **Application startup file**: `npm start`
5. Click **Create** or **Deploy**

### 7. **Set Environment Variables (if needed)**

In cPanel Node.js Manager or via SSH:

Create `.env.local` file in your project root:
```bash
NODE_ENV=production
PORT=3000
```

### 8. **Install PM2 (Optional but Recommended)**

SSH into server and run:
```bash
npm install -g pm2

cd ~/public_html/agntix-nextjs

# Start with PM2
pm2 start ecosystem.config.js

# Make sure PM2 starts on reboot
pm2 startup
pm2 save
```

### 9. **Configure Web Server (nginx/Apache)**

Your cPanel should automatically configure the proxy, but verify:

**For Apache** (via .htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
</IfModule>
```

**For Nginx** (configure in cPanel):
- Reverse proxy to `http://localhost:3000`

### 10. **Set Proper Permissions**

```bash
chmod 755 ~/public_html/agntix-nextjs
chmod -R 755 ~/public_html/agntix-nextjs/public
chmod -R 755 ~/public_html/agntix-nextjs/.next
```

### 11. **Restart Application**

In cPanel Node.js Manager:
- Click the application
- Click **Restart**

Or via SSH:
```bash
pm2 restart agntix-nextjs
```

### 12. **Verify Deployment**

1. Visit your domain in a browser
2. Check cPanel error logs if issues occur:
   - **Error Log**: `~/public_html/error_log`
   - **PM2 logs**: `pm2 logs`
3. Monitor application:
   ```bash
   pm2 status
   pm2 logs agntix-nextjs
   ```

---

## Troubleshooting

### Application Not Starting
- Check Node.js version compatibility
- Verify all dependencies installed: `npm install`
- Check error logs in cPanel

### Port Already in Use
- Change PORT in .env.local
- Or restart the application

### Static Files Not Loading
- Verify `public/` folder is uploaded
- Check permissions on static assets

### High Memory Usage
- Increase max_memory_restart in ecosystem.config.js
- Check for memory leaks in custom hooks/components

---

## Performance Tips

1. **Use CDN** for static assets (images, CSS, fonts)
2. **Enable gzip compression** in cPanel
3. **Set proper cache headers** in next.config.ts
4. **Monitor performance** with cPanel tools
5. **Upgrade Node.js** to latest stable version

---

## SSL/HTTPS Setup

1. In cPanel, go to **SSL/TLS Manager**
2. Install a free SSL certificate (Let's Encrypt)
3. cPanel will auto-configure HTTPS

---

## Useful Commands

```bash
# SSH into server
ssh user@your-domain.com

# Navigate to project
cd ~/public_html/agntix-nextjs

# View PM2 status
pm2 status

# View logs
pm2 logs agntix-nextjs

# Restart app
pm2 restart agntix-nextjs

# Stop app
pm2 stop agntix-nextjs

# Rebuild (if needed)
npm run build

# Clear cache
rm -rf .next/cache
```

---

## Support

For issues with:
- **cPanel**: Contact your hosting provider
- **Next.js**: Visit https://nextjs.org/docs
- **PM2**: Visit https://pm2.keymetrics.io

