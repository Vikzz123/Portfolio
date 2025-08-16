# Overview

This project is a modern portfolio website for Vikas Singh, a software developer specializing in MERN stack, Java, and Spring Boot. The website showcases his professional experience, skills, projects, and achievements through an interactive and animated user interface. Built with React and TypeScript on the frontend with a Node.js/Express backend setup, though the current implementation focuses primarily on the client-side presentation layer.

The portfolio features multiple sections including hero/home, about, skills with animated progress bars, work experience, project showcase with interactive cards, coding profile statistics, certifications, and a contact form. The design emphasizes modern aesthetics with glassmorphism effects, particle animations, smooth transitions, and both light/dark theme support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React 18 with TypeScript for type safety and modern development practices. The application uses a component-based architecture with reusable UI components from Radix UI primitives styled with Tailwind CSS. Routing is handled by Wouter for client-side navigation, though the current implementation is essentially a single-page application with smooth scrolling between sections.

The styling approach combines Tailwind CSS utility classes with custom CSS variables for theming support. Animations are implemented using pure CSS transitions and the Intersection Observer API for scroll-triggered effects. The design system supports both light and dark themes with automatic system preference detection.

## Backend Architecture
The backend follows a standard Express.js setup with TypeScript, designed to support RESTful API endpoints. The current implementation includes basic server setup with route registration capabilities and error handling middleware. The server architecture is prepared for database integration and user management, though the portfolio currently operates as a frontend-only application.

The backend structure includes separate modules for routing, storage abstraction, and development tooling integration with Vite for hot module replacement during development.

## Component Structure
The UI components are organized into a hierarchical structure with shared UI components in the `components/ui` directory following the Shadcn/UI pattern. Portfolio-specific components handle different sections like skills display, project cards, coding profiles, and contact forms. The architecture supports animated components with intersection observer integration for performance-optimized scroll animations.

Theme management is handled through React Context with localStorage persistence and system preference detection. The particle background system runs on HTML5 Canvas with requestAnimationFrame for smooth animations.

## Data Management
Static portfolio data is centralized in a JavaScript configuration file, making content updates straightforward without code changes. The application uses TanStack Query for potential future API integration, though currently all data is statically defined. Form handling uses React Hook Form with validation support.

## Build System
The project uses Vite as the build tool with React plugin for fast development and optimized production builds. TypeScript configuration supports both frontend and backend code with path aliases for clean imports. PostCSS processes Tailwind CSS with autoprefixer for browser compatibility.

# External Dependencies

## UI and Styling
- **Radix UI**: Provides headless, accessible UI primitives for components like dialogs, dropdowns, navigation menus, and form controls
- **Tailwind CSS**: Utility-first CSS framework for styling with custom theme configuration and design system
- **Lucide React**: Icon library for consistent iconography throughout the application
- **Font Awesome**: Additional icon fonts for social media links and coding platform icons
- **Google Fonts**: Inter font family for modern typography

## Development and Build Tools
- **Vite**: Fast build tool and development server with hot module replacement
- **TypeScript**: Static typing for enhanced development experience and code reliability
- **PostCSS**: CSS processor for Tailwind CSS compilation and autoprefixing
- **ESBuild**: Fast JavaScript bundler used by Vite for production builds

## Database and ORM
- **Drizzle ORM**: TypeScript ORM for database operations with PostgreSQL dialect configuration
- **Neon Database**: Serverless PostgreSQL database service (configured but not actively used)
- **Drizzle Kit**: Database migration and schema management tool

## Form Handling and Validation
- **React Hook Form**: Form state management with validation support
- **Hookform Resolvers**: Integration layer for form validation libraries
- **Zod**: Schema validation library for type-safe data validation

## Development and Monitoring
- **TanStack Query**: Server state management for future API integration
- **Wouter**: Lightweight routing library for client-side navigation
- **Replit**: Development environment integration with runtime error overlay and cartographer plugins

## Session and Storage
- **Connect PG Simple**: PostgreSQL session store for Express sessions (configured for future use)
- **Date-fns**: Date utility library for time formatting and manipulation

The application is structured to support future backend integration while currently operating as a sophisticated single-page application with rich animations and responsive design.