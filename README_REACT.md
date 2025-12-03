# The Royal Group - Modern React Website

A complete React conversion of The Royal Group website featuring all three business divisions.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The app will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## Project Structure

```
construction/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Navigation bar with mobile menu
│   │   ├── Footer.jsx           # Footer with social links
│   │   └── ContactForm.jsx      # Reusable contact form
│   ├── pages/
│   │   ├── Home.jsx             # Homepage
│   │   ├── RoyalSignSystems.jsx # RSS division page
│   │   ├── RoyalConstructionGroup.jsx  # RCG division page
│   │   └── RoyalCustomMetals.jsx       # RCM division page
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React entry point
│   ├── App.css                  # App styles
│   └── index.css                # Global styles
├── index.html                   # HTML entry point
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tsconfig.json               # TypeScript config
├── .eslintrc.cjs               # ESLint config
└── README.md                   # This file
```

## Tech Stack

- **React 18.2** - UI library
- **React Router 6.20** - Client-side routing
- **Vite 5.0** - Build tool and dev server
- **CSS3** - Styling (no frameworks, pure CSS)
- **Font Awesome 6.4** - Icons (CDN)

## Features

✨ **Modern React Setup**
- Component-based architecture
- React Router for SPA routing
- Hot Module Replacement (HMR)
- Fast development server with Vite

📱 **Responsive Design**
- Mobile-first approach
- Hamburger menu on mobile
- Touch-friendly interface

🎨 **Beautiful UI**
- Professional color scheme
- Smooth animations
- Hover effects
- CSS Grid & Flexbox layouts

🚀 **Performance**
- Optimized bundle size
- Code splitting with React Router
- CSS animations (no heavy libraries)

## Available Routes

- `/` - Homepage
- `/divisions/rss` - Royal Sign Systems
- `/divisions/rcg` - Royal Construction Group
- `/divisions/rcm` - Royal Custom Metals

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
    --primary: #1e3a5f;      /* Dark blue */
    --secondary: #c41e3a;    /* Red */
    --accent: #f39c12;       /* Orange */
    /* ... other colors */
}
```

### Contact Information
Update in `src/components/ContactForm.jsx` and individual page components:
- Phone: `416-743-0505`
- Email: `info@theroyalgroup.ca`
- Address: `3650/15 Weston Road, North York, ON M9L 1W2`

### Logos & Images
Create an `src/assets` folder and add images there, then import and use them in components.

## Component Examples

### Using the ContactForm
```jsx
import ContactForm from '../components/ContactForm'

function MyPage() {
  return (
    <div>
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  )
}
```

### Adding New Routes
Edit `src/App.jsx`:
```jsx
import NewPage from './pages/NewPage'

// In the Routes component:
<Route path="/new-page" element={<NewPage />} />
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel
1. Push to GitHub
2. Import project to Vercel
3. Vercel automatically detects Vite settings

### Deploy to GitHub Pages
```bash
npm run build
# Upload contents of dist/ folder
```

## Future Enhancements

- Add TypeScript support
- Implement Redux/Context for state management
- Add image gallery/portfolio section
- Integrate backend API
- Add CMS integration
- Add blog functionality
- Add team member profiles
- Add testimonials with carousel
- Google Analytics integration
- Form submission to backend

## Performance Tips

1. **Code Splitting**: Routes automatically code-split with React Router
2. **Image Optimization**: Use optimized image formats (WebP)
3. **Lazy Loading**: Implement for below-the-fold content
4. **Tree Shaking**: Vite automatically removes unused code

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Hot reload not working?**
- Restart the dev server
- Check for syntax errors

## License

Copyright © 2025 The Royal Group. All rights reserved.

## Support

For issues or modifications, refer to individual component files. The structure is modular and easy to extend.
