# Images Directory

This directory is reserved for local image assets. However, this project currently uses external placeholder images from [Picsum Photos](https://picsum.photos) to ensure all images load correctly without requiring local asset management.

## Image Usage

All images in the website are loaded via external URLs:
- Format: `https://picsum.photos/800/600?random=XX`
- Each image uses a unique random number (XX) to ensure variety
- Images are lazy-loaded for performance
- All images include proper `width` and `height` attributes

## Future Local Assets

If you need to add local images in the future:
1. Place image files in this directory
2. Update HTML files to reference `assets/images/filename.jpg`
3. Ensure images are optimized for web (compressed, appropriate formats)

## Client Logos

The "Trusted by Enterprise Leaders" section on the home page uses client logo files:
- `client-logo-1.svg` through `client-logo-6.svg`
- Replace these placeholder files with your actual client company logos
- Supported formats: SVG, PNG, JPG (SVG recommended for scalability)
- Recommended size: 200x80px or similar aspect ratio
- Logos will automatically adapt to light/dark mode

## Supported Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- SVG (.svg)

