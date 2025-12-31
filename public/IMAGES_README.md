# Image Management Guide

This guide explains how to add and manage images for the Techmocraft Engineering website.

## Directory Structure

```
public/
├── banner.jpg                    # Homepage hero banner
├── logo.png                      # Main logo
├── logo-darkmode-bgwhite.png    # Logo for dark mode
├── logo-whitemode-bgdark.png    # Logo for light mode
├── favicon.ico                   # Browser favicon
├── apple-touch-icon.png         # Apple device icon
├── bg-pattern.png               # Background pattern
└── portfolio/                    # Portfolio project images (create this folder)
    ├── project-1.jpg
    ├── project-2.jpg
    └── ...
```

## How to Add Images

### 1. Portfolio Project Images

**Location:** `public/portfolio/`

**Steps:**
1. Create the `portfolio` folder in `public/` if it doesn't exist
2. Add your project images with descriptive names:
   - `automotive-die-manufacturing.jpg`
   - `cnc-milling-aerospace.jpg`
   - `die-repair-restoration.jpg`
   - `plastic-molding-dies.jpg`
   - `industrial-fabrication.jpg`
   - `tool-maintenance.jpg`

3. Update the portfolio page at `src/app/portfolio/page.tsx`:
   - Replace `/banner.jpg` in the projects array with your actual image paths
   - Example: `/portfolio/automotive-die-manufacturing.jpg`

**Recommended Specifications:**
- Format: JPG or PNG
- Size: 800x600px minimum
- Aspect Ratio: 4:3 or 16:9
- File Size: Under 500KB (optimize for web)
- Quality: High resolution but compressed

### 2. Testimonial Client Photos (Optional)

**Location:** `public/testimonials/`

**Steps:**
1. Create the `testimonials` folder in `public/`
2. Add client photos or company logos
3. Update `src/app/testimonials/page.tsx` to use actual image paths

### 3. Banner/Hero Images

**Location:** `public/`

**Current File:** `banner.jpg`

**To Replace:**
1. Add your new banner image to `public/`
2. Name it `banner.jpg` or update references in:
   - `src/app/page.tsx` (homepage hero)
   - `src/app/layout.tsx` (OpenGraph image)

**Recommended Specifications:**
- Size: 1920x1080px or 1600x900px
- Aspect Ratio: 16:9
- Format: JPG (compressed)
- File Size: Under 300KB

### 4. Company Logos

**Files:**
- `logo.png` - Main logo (transparent background)
- `logo-darkmode-bgwhite.png` - Logo for dark mode with white background
- `logo-whitemode-bgdark.png` - Logo for light mode with dark background

**Recommended Specifications:**
- Format: PNG with transparency
- Size: 180x70px or similar aspect ratio
- Background: Transparent or as specified in filename

## Image Optimization

Before uploading images, optimize them for web:

### Online Tools:
- **TinyPNG** - https://tinypng.com/ (PNG compression)
- **Squoosh** - https://squoosh.app/ (Google's image optimizer)
- **ImageOptim** - https://imageoptim.com/ (Mac app)

### Optimization Guidelines:
- Compress images to reduce file size
- Use appropriate format (JPG for photos, PNG for logos/graphics)
- Resize to actual display dimensions
- Use WebP format for modern browsers (Next.js handles this automatically)

## Code References for Image Updates

### Portfolio Page
File: `src/app/portfolio/page.tsx`

Find the array at the top and update the `image` property for each project.

### Testimonials Page
File: `src/app/testimonials/page.tsx`

Update the `image` property in the testimonials array.

### Homepage
File: `src/app/page.tsx`

The hero banner is set using inline styles in the motion.section component.

## Using Next.js Image Component

When adding images in code, use the Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/portfolio/your-image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="..."
/>
```

## SEO Best Practices

1. **File Names:** Use descriptive, SEO-friendly names
   - ✅ `automotive-die-manufacturing-project.jpg`
   - ❌ `IMG_1234.jpg`

2. **Alt Text:** Always provide descriptive alt text
   - Helps with SEO and accessibility
   - Describe what's in the image

3. **File Size:** Keep images under 500KB
   - Faster page load times
   - Better user experience
   - Improved SEO rankings

## Need Help?

If you need assistance with image management:
1. Check Next.js Image documentation: https://nextjs.org/docs/app/building-your-application/optimizing/images
2. Review the portfolio page code for examples
3. Ensure images are placed in the `public/` directory (they'll be accessible at the root URL)
