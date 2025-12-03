# Media Assets Implementation Guide

## 🎬 Video Integration

### Hero Video (Home Page)
- **File**: `/src/assets/videos/hero.mp4`
- **Usage**: Autoplay background video on homepage hero section
- **Features**: 
  - Muted and looping
  - Overlay gradient for text readability
  - Fallback to gradient background on unsupported browsers

### Construction Video
- **File**: `/src/assets/videos/construction.mp4`
- **Usage**: Can be used for project showcases or documentation

---

## 📸 Image Assets Organization

### Signage Division
```
/src/assets/images/signage/
├── vintage-neon.jpg      - Hero banner for Royal Sign Systems
```
**Used in**: `RoyalSignSystems.jsx` hero section

### Construction Division
```
/src/assets/images/construction/
├── engineer.jpg          - Hero banner for RCG
├── blueprint.jpg         - Technical planning imagery
├── management.jpg        - Construction management
├── installation.jpg      - Installation processes
├── preplanning.jpg       - Pre-construction planning
```
**Used in**: 
- `RoyalConstructionGroup.jsx` hero section
- `RoyalCustomMetals.jsx` hero section
- Gallery showcase on homepage

### Gallery
```
/src/assets/images/gallery/
├── meeting.jpg           - Business meetings
├── design.jpg            - Design creation
├── project1.jpg          - Project portfolio
```
**Used in**: Gallery component with lightbox feature

---

## 🎨 Component Usage

### Hero Sections with Images
All division pages now use background images with overlay gradients:
```jsx
<section className="hero" style={{
  backgroundImage: `linear-gradient(135deg, rgba(30, 58, 95, 0.6) 0%, rgba(196, 30, 58, 0.6) 100%), url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
```

### Gallery Component Features
- **Responsive Grid**: Adapts from 3 columns on desktop to 1 on mobile
- **Hover Effects**: Smooth zoom and overlay on image hover
- **Lightbox**: Click any image to view in full-screen lightbox
- **Close Functionality**: Click anywhere outside image or X button to close

### Video Hero Implementation
- Imported video as asset
- Autoplay with muted audio
- Loop functionality
- Gradient overlay for accessibility

---

## 📊 Asset Statistics

| Type | Count | Total Size |
|------|-------|-----------|
| Videos | 2 | Optimized for web |
| Images | 9 | Various dimensions |
| Formats | JPG, MP4 | Web-optimized |

---

## 🚀 Performance Optimizations

1. **Lazy Loading**: Images load on demand via Gallery component
2. **Responsive Images**: CSS ensures proper scaling
3. **Video Optimization**: MP4 format for broad browser support
4. **Muted Videos**: Autoplay allowed in all browsers when muted
5. **Overlay Gradients**: Ensures text readability over images/video

---

## 🔄 Future Enhancement Ideas

- Add image compression pipeline
- Implement Next.js Image optimization
- Add WebP format alternatives
- Create video thumbnails for faster loading
- Add lazy-loading library for below-fold images
- Implement CDN delivery for media files

---

## 📝 Integration Checklist

✅ Videos integrated in hero sections
✅ Images organized by category
✅ Gallery component with lightbox
✅ Responsive design implementation
✅ Background images with overlays
✅ Asset import paths configured
✅ Performance optimizations applied

---

## 🎯 Where Media is Used

### Homepage
- Hero: Video background
- Gallery: Image showcase with lightbox
- About section: Could include stats images

### Royal Sign Systems
- Hero: Vintage neon sign image
- Content: Could showcase more signage work

### Royal Construction Group
- Hero: Engineer/construction image
- Services: Blueprint and construction imagery

### Royal Custom Metals
- Hero: Blueprint/technical drawing
- Services: Metal work examples

---

For adding more media:
1. Place files in appropriate `/src/assets/` subfolder
2. Import at top of component
3. Reference in JSX/CSS
4. Update this documentation
