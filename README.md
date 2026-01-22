# Blockchain Solutions Firm - Enterprise Website

Enterprise-grade blockchain solutions website built with HTML5, Tailwind CSS, and vanilla JavaScript. Designed for real enterprise clients with a focus on trust, security, and professionalism.

## Project Structure

```
/blockchain-solutions-website
│
├── index.html                # Home (Primary)
├── home-2.html              # Home 2 – Enterprise / SaaS style
├── solutions.html            # Solutions
├── industries.html           # Industries
├── case-studies.html         # Case Studies
├── about.html                # About Us
├── contact.html              # Contact
├── login.html                # Login
├── signup.html               # Sign Up
├── 404.html                  # Not Found
│
├── /assets
│   ├── /css
│   │   └── main.css          # Tailwind output + custom variables
│   │
│   ├── /js
│   │   └── main.js           # Theme toggle + minimal interactions
│   │
│   └── /images
│       └── README.md         # Images loaded via external placeholder URLs only
│
├── /partials
│   ├── header.html           # Common navbar
│   └── footer.html           # Common footer
│
└── README.md                 # Project overview & usage notes
```

## Technology Stack

- **HTML5** - Semantic, accessible markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS
- **CSS Variables** - For theming support

## Features

### Design
- ✅ Enterprise-focused, professional design
- ✅ Responsive layout (320px to 1440px+)
- ✅ Dark/Light mode toggle with localStorage persistence
- ✅ Consistent navigation and footer across all pages
- ✅ WCAG-compliant color contrast

### Pages
- **Home** - Primary landing page with services overview
- **Home 2** - Enterprise SaaS-style variant
- **Solutions** - Detailed blockchain services
- **Industries** - Industry-specific solutions
- **Case Studies** - Real-world implementation examples
- **About** - Company mission and team
- **Contact** - Contact form and information
- **Login/Sign Up** - Authentication pages
- **404** - Error page

### Functionality
- Theme toggle (light/dark mode)
- Mobile-responsive navigation menu
- Smooth transitions
- Lazy-loaded images
- Accessible forms and navigation

## Usage

### Local Development

1. Open any HTML file directly in a browser, or
2. Use a local development server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

### Deployment

The website is static and can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

Simply upload all files maintaining the directory structure.

## Customization

### Colors

Colors are defined in `assets/css/main.css` using CSS variables. The Tailwind config in each HTML file also defines these colors for use in Tailwind classes.

### Content

All content is directly in the HTML files. Update the relevant HTML file to modify content.

### Images

Currently, all images use external placeholder URLs from [Picsum Photos](https://picsum.photos). To use local images:
1. Place images in `assets/images/`
2. Update image `src` attributes to reference `assets/images/filename.jpg`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- **No Build Process Required** - This is a pure static site
- **No Dependencies** - All dependencies are loaded via CDN
- **Partials** - The `/partials` folder contains reusable components. For static HTML, these need to be manually included or used with a build tool/server-side includes
- **Images** - All images use external URLs. No local image assets are required

## License

© 2024 BlockChain Solutions. All rights reserved.

