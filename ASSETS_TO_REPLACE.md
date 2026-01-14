# Assets to Replace - Jubilee Portfolio Website

This document lists all placeholder assets that need to be replaced with your actual content.

## 📄 Documents to Replace

### 1. Resume/CV File
**Location:** `/app/frontend/public/assets/Jubilee_Resume.pdf`
- **Current Status:** Placeholder (file doesn't exist yet)
- **Action Required:** 
  1. Create the folder: `/app/frontend/public/assets/`
  2. Add your resume file as `Jubilee_Resume.pdf`
  3. The download button in the header will then work correctly

---

## 🖼️ Project Images to Replace

All project images are currently using Unsplash placeholder images. Replace them in `/app/frontend/src/data/mock.js`:

### How the Gallery Works:
Each project now has **deliverables** with multiple images. When visitors click on a deliverable (like "Logo Design"), a gallery modal opens showing all related images. Visitors can:
- Navigate between images using arrow buttons
- Click thumbnails to jump to specific images
- Zoom in/out by clicking the main image
- Close with the X button or ESC key

---

### 1. Duncrest & Partners
**Main Project Image:**
```
https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop
```

**Deliverable Images to Replace:**

**Logo Design** (2 images):
- Image 1: Logo mockup
- Image 2: Logo variations

**Brand Pattern** (1 image):
- Image 1: Pattern design

**Icon Variants** (1 image):
- Image 1: Icon set

**Social Media Ads** (2 images):
- Image 1: Social media mockup
- Image 2: Social media design

**Print Materials** (1 image):
- Image 1: Business cards/stationery

---

### 2. Bistro Oma's Pot
**Main Project Image:**
```
https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop
```

**Deliverable Images to Replace:**

**Logo Design** (1 image):
- Image 1: Restaurant logo

**Menu Design** (2 images):
- Image 1: Menu mockup
- Image 2: Menu design details

**Print Media** (1 image):
- Image 1: Print materials

**Social Media Branding** (1 image):
- Image 1: Social media posts

---

### 3. Moda Vivace
**Main Project Image:**
```
https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop
```

**Deliverable Images to Replace:**

**Logo Design** (1 image):
- Image 1: Fashion brand logo

**Product Showcase** (2 images):
- Image 1: Product display
- Image 2: Cosmetics showcase

**Brand Guidelines** (1 image):
- Image 1: Brand guide pages

**Marketing Materials** (1 image):
- Image 1: Marketing collateral

---

### 4. iDoc Health Center
**Main Project Image:**
```
https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop
```

**Deliverable Images to Replace:**

**Landing Page Design** (2 images):
- Image 1: Website mockup
- Image 2: Web design details

**UI/UX Design** (1 image):
- Image 1: UI design screens

**Responsive Design** (1 image):
- Image 1: Mobile/tablet mockups

**Accessibility Features** (1 image):
- Image 1: Accessibility showcase

---

## 🔗 Social Media Links to Update

**Location:** `/app/frontend/src/data/mock.js` - `personalInfo.socialLinks`

### Current Placeholder Links:
```javascript
socialLinks: {
  linkedin: "https://linkedin.com/in/jubilee-nwachukwu",
  behance: "https://behance.net/jubileenwachukwu",
  twitter: "https://twitter.com/jubilee_design",
  instagram: "https://instagram.com/jubilee.designs"
}
```

**Action Required:** Update these URLs with your actual social media profile links.

---

## 📝 Optional Content Updates

### Profile Photo (Optional Enhancement)
If you want to add a professional headshot in the About section:
1. Add your image to `/app/frontend/public/assets/profile.jpg`
2. Update the About section in `/app/frontend/src/pages/Home.jsx` to include the image

### Additional Project Details
You can enhance project information in `/app/frontend/src/data/mock.js`:
- Add more detailed case study information
- Include client testimonials
- Add project timelines or metrics
- Include links to live projects (if applicable)

---

## 🔧 How to Replace Images

### Method 1: Use Your Own Hosted Images
1. Host your images on a service (Cloudinary, AWS S3, or your own server)
2. Update the image URLs in `/app/frontend/src/data/mock.js`

### Method 2: Use Local Images
1. Create folder: `/app/frontend/public/images/projects/`
2. Add your images (e.g., `duncrest.jpg`, `omas-pot.jpg`, etc.)
3. Update URLs in `/app/frontend/src/data/mock.js` to:
   ```javascript
   image: "/images/projects/duncrest.jpg"
   ```

---

## ✅ Checklist

- [ ] Add resume PDF to `/app/frontend/public/assets/Jubilee_Resume.pdf`
- [ ] Replace Duncrest & Partners project image
- [ ] Replace Oma's Pot project image
- [ ] Replace Moda Vivace project image
- [ ] Replace iDoc Health Center project image
- [ ] Update LinkedIn URL
- [ ] Update Behance URL
- [ ] Update Twitter URL (or remove if not needed)
- [ ] Update Instagram URL (or remove if not needed)
- [ ] (Optional) Add profile photo
- [ ] (Optional) Add more project details

---

## 📍 File Locations Reference

**Main Data File:** `/app/frontend/src/data/mock.js`
- Contains all project information, personal info, and social links
- Easy to update without touching other code

**Public Assets Folder:** `/app/frontend/public/assets/`
- For resume and other downloadable files

**Project Images Folder (recommended):** `/app/frontend/public/images/projects/`
- For locally hosted project images

---

## 🎨 Current Design Features

✅ Deep purple theme (#7C3AED, #6B21A8) matching your PDF
✅ Dark mode toggle with purple accents
✅ Smooth scroll animations
✅ Project filtering (All, Branding, Graphic Design, UI/UX, Web Design)
✅ Expandable project cards with full details
✅ Contact form (ready for backend integration)
✅ Mobile responsive design
✅ Professional typography and spacing

---

**Need Help?** All placeholder data is clearly marked in `/app/frontend/src/data/mock.js` with comments indicating what needs to be replaced.
