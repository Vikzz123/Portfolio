# Vikas Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light theme support
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎨 Beautiful UI components with Radix UI

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + CSS Animations
- **Build Tool**: Vite
- **Routing**: Wouter
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd VikasPortfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with TypeScript

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files ready for deployment.

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect it's a Vite project
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Set source to `/docs` or use GitHub Actions

### Static Hosting (AWS S3, etc.)
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your hosting service
3. Configure for SPA routing (redirect all routes to index.html)

## Project Structure

```
├── client/                 # Frontend source code
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   ├── hooks/         # Custom React hooks
│   │   └── data/          # Static data and content
│   └── index.html         # HTML entry point
├── attached_assets/        # Images and static assets
├── dist/                   # Production build output
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## Customization

- **Content**: Update portfolio data in `client/src/data/portfolio.ts`
- **Styling**: Modify `tailwind.config.ts` and CSS files
- **Components**: Edit components in `client/src/components/`
- **Pages**: Modify pages in `client/src/pages/`

## Performance

- **Bundle Size**: ~274KB (87KB gzipped)
- **CSS**: ~74KB (13KB gzipped)
- **Build Time**: ~15 seconds
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio!
