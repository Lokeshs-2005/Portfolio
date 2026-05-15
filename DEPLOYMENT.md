# 🚀 Deployment Guide - Lokesh S Portfolio

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Lokeshs-2005/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"
7. Done! Your site is live in 2 minutes

**Your URL**: `https://your-project-name.vercel.app`

---

## Alternative: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

**Your URL**: `https://your-site-name.netlify.app`

---

## Alternative: GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these lines to your `package.json`:
```json
{
  "homepage": "https://Lokeshs-2005.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // your repo name
})
```

### Step 4: Deploy
```bash
npm run deploy
```

**Your URL**: `https://Lokeshs-2005.github.io/portfolio`

---

## Custom Domain Setup (Optional)

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as shown
4. Wait 24-48 hours for propagation

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. SSL certificate auto-generated

---

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify resume download works
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Share LinkedIn profile link
- [ ] Share GitHub profile link
- [ ] Update resume if needed
- [ ] Add project screenshots/links later

---

## Need Help?

If you face any issues:
1. Check build logs in Vercel/Netlify dashboard
2. Ensure all dependencies are in package.json
3. Test locally with `npm run build` then `npm run preview`

**Good luck with your job search! 🎯**
