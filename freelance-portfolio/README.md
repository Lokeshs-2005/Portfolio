# Freelance Portfolio — Lokesh S

A standalone freelance web development portfolio built with React, Vite, and Tailwind CSS.
This is a completely independent application from the job portfolio at https://lokeshs-portfolio.vercel.app/.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 3
- React Router DOM 7
- EmailJS (contact form submissions)

## Local Development

```bash
# 1. Enter the project directory
cd freelance-portfolio

# 2. Install dependencies
npm install

# 3. Copy the environment variable template
copy .env.example .env.local   # Windows
# cp .env.example .env.local   # macOS / Linux

# 4. Edit .env.local and add your EmailJS credentials (see Contact Form below)

# 5. Start the development server
npm run dev
```

The app runs at http://localhost:5173 by default.

## Production Build

```bash
npm run build
npm run preview
```

The production output is in the `dist/` directory.

## Contact Form Setup

The enquiry form uses [EmailJS](https://www.emailjs.com/) — a free email service for client-side form submissions.

1. Go to https://www.emailjs.com/ and create a free account.
2. Create an Email Service (e.g., Gmail, Outlook, etc.).
3. Create an Email Template with the following template variables:
   - `{{from_name}}`, `{{from_email}}`, `{{business_name}}`
   - `{{project_type}}`, `{{project_description}}`
   - `{{budget}}`, `{{timeline}}`
4. Get your Public Key from Account → API Keys.
5. Add your credentials to `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> **Important:** Never commit `.env.local` to version control. The `.gitignore` already excludes it.
> When deploying to Vercel, add these three environment variables in the Vercel dashboard instead.

## Vercel Deployment (Separate Project)

This application is designed to be deployed as a **separate Vercel project** from the existing job portfolio.
Both projects can live in the same Git repository or different repositories.

### Option A: Same Repository (Monorepo)

If this `freelance-portfolio/` folder is inside the same Git repository as the existing job portfolio:

1. Push the repository to GitHub (if not already done).
2. Go to https://vercel.com/new and import the repository.
3. **Critical:** In the "Configure Project" step, set the **Root Directory** to `freelance-portfolio`.
4. Vercel will auto-detect Vite. The build settings should be:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Add the environment variables in Project Settings → Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click Deploy.
7. In Vercel's project settings, set a custom project name such as `lokesh-freelance-portfolio`.

> This creates a completely separate Vercel project. The existing `lokeshs-portfolio` project is unaffected.

### Option B: Separate Repository

1. Copy the `freelance-portfolio/` directory into a new repository.
2. Push to GitHub.
3. Import from https://vercel.com/new — Root Directory is the repository root, so no override needed.
4. Add the EmailJS environment variables.
5. Deploy.

### SPA Routing

The `vercel.json` at the project root rewrites all routes to `index.html`, enabling direct navigation and browser refresh on all client-side routes.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Yes (for form) | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes (for form) | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes (for form) | EmailJS public key |

All `VITE_` prefixed variables are embedded at build time by Vite. Do not store private API keys in frontend environment variables.

## Project Structure

```
freelance-portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components (Navbar, Footer, etc.)
│   ├── data/           # Static data files
│   ├── sections/       # Page sections (Hero, Services, Projects, etc.)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example        # Environment variable template
├── vercel.json         # Vercel SPA routing config
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Notes

- This application does not import from or depend on the job portfolio files.
- All links, emails, and URLs are real. No fabricated testimonials or statistics.
- The contact form requires EmailJS credentials to send submissions. Without them, form submission shows an error with a direct email fallback.
