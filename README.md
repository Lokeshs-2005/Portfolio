# Lokesh S - Professional Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Gradient backgrounds, smooth animations, and professional layout
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Sections**:
  - Hero section with professional introduction
  - About section with experience and certifications
  - Technical skills showcase
  - Internship projects (Goodkart, Goodgide)
  - Personal/Academic projects (4 projects)
  - Contact information with social links

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 8
- **Linting**: ESLint

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Customization Guide

### Adding Your Resume
1. Place your resume PDF in the `public` folder as `resume.pdf`
2. The download button will automatically work

### Adding Project Screenshots
1. Add images to `src/assets/` or `public/` folder
2. Update the project cards in `src/App.jsx`:
   ```jsx
   <img src="/path-to-your-image.png" alt="Project name" />
   ```

### Adding Project Links
Update the button `href` attributes in the project cards:
```jsx
<a href="https://your-live-demo-url.com" target="_blank">
  View Demo
</a>
<a href="https://github.com/yourusername/repo" target="_blank">
  GitHub
</a>
```

### Updating Personal Information
Edit the contact section in `src/App.jsx` with your details.

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Deploy to GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## 📧 Contact

- **Email**: lokeshs09052005@gmail.com
- **LinkedIn**: [Lokesh S](https://www.linkedin.com/in/lokesh-s-49a363271)
- **GitHub**: [Lokeshs-2005](https://github.com/Lokeshs-2005)
- **Location**: Bangalore, Karnataka, India

## 📄 License

This project is open source and available for personal use.

---

**Built with 💜 by Lokesh S**
