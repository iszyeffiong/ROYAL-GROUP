# 🚀 Quick Start Guide - Royal Group React Website

## ⚡ Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd c:\Users\Admin\Documents\GitHub\construction
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

✅ Done! Your website is live!

---

## 🎯 What You'll See

### Homepage
- **Hero Section**: Video background with text overlay
- **Services**: 3 main service cards
- **About**: Company philosophy with statistics
- **Divisions**: 3 division cards with "Learn More" links
- **Values**: 6 core values grid
- **Gallery**: 6 interactive images (click for lightbox)
- **Contact**: Contact form and information
- **Footer**: Social links and quick navigation

### Division Pages
- **RSS Page** (`/divisions/rss`): Vintage neon sign hero, services, materials
- **RCG Page** (`/divisions/rcg`): Engineer hero, services, mission/vision/values
- **RCM Page** (`/divisions/rcm`): Blueprint hero, services, capabilities

---

## 📁 Project Structure

```
construction/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Gallery.jsx (NEW!)
│   │   ├── Gallery.css (NEW!)
│   │   └── media/ (original media folder)
│   ├── pages/
│   │   ├── Home.jsx (with video hero & gallery)
│   │   ├── RoyalSignSystems.jsx (with image hero)
│   │   ├── RoyalConstructionGroup.jsx (with image hero)
│   │   └── RoyalCustomMetals.jsx (with image hero)
│   ├── assets/ (NEW!)
│   │   ├── images/
│   │   │   ├── signage/
│   │   │   ├── construction/
│   │   │   └── gallery/
│   │   └── videos/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css (updated with video hero styles)
├── index.html
├── package.json
├── vite.config.js
└── Documentation/
    ├── README_REACT.md
    ├── MEDIA_GUIDE.md
    ├── MEDIA_INTEGRATION.md
    └── SETUP_COMPLETE.md
```

---

## 🎬 Media Overview

### Videos (2 files)
- `hero.mp4` - Homepage hero background (ACTIVE)
- `construction.mp4` - Available for future use

### Images (9 files organized by category)

**Signage Division**
- `vintage-neon.jpg` - RSS hero banner

**Construction**
- `engineer.jpg` - RCG hero banner
- `blueprint.jpg` - RCM hero banner + gallery
- `management.jpg` - Gallery
- `installation.jpg` - Gallery
- `preplanning.jpg` - Available

**Gallery**
- `meeting.jpg` - Gallery
- `design.jpg` - Gallery
- `project1.jpg` - Gallery

---

## 🛠️ Available Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🎨 Key Features

### ✨ Video Hero
- Auto-playing background on homepage
- Muted for browser compatibility
- Gradient overlay for text readability
- Responsive sizing

### 🖼️ Image Gallery
- 6 interactive images
- Responsive grid (3 cols → 2 cols → 1 col)
- Click to open full-screen lightbox
- Smooth hover effects
- Close with X button or click outside

### 🎯 Division Pages
- Custom hero image for each division
- Overlay gradient for text readability
- Professional appearance
- Responsive design

---

## 📱 Testing on Different Devices

### Desktop Browser
```bash
npm run dev
# Visit http://localhost:3000
```

### Mobile/Tablet Simulation
```bash
# In Chrome/Firefox DevTools:
# 1. Open DevTools (F12)
# 2. Click device toggle (Ctrl+Shift+M)
# 3. Select device or responsive mode
```

### Real Device
```bash
# Find your local IP:
# Windows: ipconfig
# Then visit: http://[YOUR_IP]:3000
```

---

## 📝 Customization Tips

### Change Video
1. Replace `hero.mp4` in `src/assets/videos/`
2. Update import in `Home.jsx`
3. Done! ✅

### Add Gallery Image
1. Add image to `src/assets/images/gallery/`
2. Open `Gallery.jsx`
3. Import image at top
4. Add to images array
5. Done! ✅

### Change Colors
1. Open `src/index.css`
2. Find `:root { ... }`
3. Update CSS variables:
   ```css
   --primary: #1e3a5f;      /* Main blue */
   --secondary: #c41e3a;    /* Red accent */
   --accent: #f39c12;       /* Orange accent */
   ```
4. Done! ✅

### Update Contact Info
1. Open `src/components/ContactForm.jsx`
2. Find email/phone in form submission
3. Update with your info
4. Done! ✅

---

## 🚀 Deployment Options

### Netlify (Recommended)
```bash
# Build first
npm run build

# Push to GitHub
git add .
git commit -m "Deploy to Netlify"
git push

# Connect on Netlify and it auto-deploys
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages
```bash
npm run build
# Upload dist/ folder contents to GitHub Pages
```

---

## ❓ Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Dependencies Won't Install
```bash
rm -r node_modules package-lock.json
npm install
```

### Hot Reload Not Working
```bash
# Restart dev server:
# 1. Stop current server (Ctrl+C)
# 2. Run npm run dev again
```

### Images Not Showing
- Check import path in component
- Verify file exists in `src/assets/images/`
- Clear browser cache (Ctrl+Shift+Delete)

### Video Not Playing
- Ensure `hero.mp4` exists in `src/assets/videos/`
- Check browser console for errors
- Try different video format

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README_REACT.md` | Complete React project guide |
| `MEDIA_GUIDE.md` | Technical media integration details |
| `MEDIA_INTEGRATION.md` | Visual overview & usage |
| `SETUP_COMPLETE.md` | Full implementation summary |

---

## ✅ Quick Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Website opens at localhost:3000
- [ ] Video appears in hero
- [ ] Gallery images clickable
- [ ] Division pages load correctly
- [ ] Mobile responsive works
- [ ] Contact form functions
- [ ] All links work
- [ ] Ready to customize!

---

## 💡 Pro Tips

1. **Use DevTools Network Tab** to check image loading
2. **Test on Real Device** before deploying
3. **Optimize Images** for faster loading if adding more
4. **Use Git** to track changes (`git init`, `git add`, `git commit`)
5. **Read Documentation** in MEDIA_GUIDE.md for advanced customization

---

## 🎉 You're All Set!

Your Royal Group website is ready with:
- ✅ React + Vite (fast development)
- ✅ React Router (multi-page navigation)
- ✅ Video hero background
- ✅ Interactive image gallery
- ✅ Professional media integration
- ✅ Fully responsive design
- ✅ Beautiful animations

**Enjoy your new website! 🚀**

