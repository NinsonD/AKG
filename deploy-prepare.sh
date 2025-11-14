#!/bin/bash

# Pre-deployment checklist for cPanel
# Run this script to prepare your project for upload

echo "🚀 Agntix Next.js - cPanel Deployment Preparation"
echo "=================================================="

# 1. Check Node.js version
echo ""
echo "✓ Checking Node.js version..."
node -v

# 2. Check npm version
echo ""
echo "✓ Checking npm version..."
npm -v

# 3. Clean install (optional)
echo ""
read -p "Do you want to clean install dependencies? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Cleaning node_modules..."
    rm -rf node_modules package-lock.json
    npm install
fi

# 4. Build project
echo ""
echo "✓ Building project for production..."
npm run build

# 5. Check build output
echo ""
echo "✓ Checking build output..."
if [ -d ".next" ]; then
    echo "✅ Build successful! .next folder created"
    echo "Build size: $(du -sh .next | cut -f1)"
else
    echo "❌ Build failed! .next folder not found"
    exit 1
fi

# 6. Check required files
echo ""
echo "✓ Verifying required files..."
files=("package.json" "next.config.ts" "tsconfig.json" "public" "src")
for file in "${files[@]}"; do
    if [ -e "$file" ] || [ -d "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ❌ $file - MISSING!"
    fi
done

# 7. List what will be uploaded
echo ""
echo "📦 Files/Folders to upload to cPanel:"
echo "  • .next/"
echo "  • public/"
echo "  • src/"
echo "  • node_modules/ (or run 'npm install' on server)"
echo "  • package.json"
echo "  • package-lock.json"
echo "  • next.config.ts"
echo "  • tsconfig.json"
echo "  • ecosystem.config.js"
echo "  • .env.local (create this on server)"

# 8. Generate checklist
echo ""
echo "✅ Deployment Checklist:"
echo "  ☐ Upload all files via FTP or Git"
echo "  ☐ SSH into cPanel server"
echo "  ☐ Run 'npm install' in project directory"
echo "  ☐ Create .env.local with NODE_ENV=production"
echo "  ☐ Test build: 'npm run build' (optional)"
echo "  ☐ Start app via cPanel Node.js Manager"
echo "  ☐ Verify SSL/HTTPS certificate"
echo "  ☐ Test application in browser"

echo ""
echo "🎉 Project is ready for cPanel deployment!"
echo "📖 See CPANEL_DEPLOYMENT.md for detailed instructions"
