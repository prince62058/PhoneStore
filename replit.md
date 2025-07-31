# Croma Phone Store - E-commerce Application

## Overview

This is a full-stack e-commerce application built for mobile phone retail, inspired by the Croma electronics store. The application features a modern React frontend with shadcn/ui components, an Express.js backend, and PostgreSQL database with Drizzle ORM. The architecture follows a clean separation between client, server, and shared code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: GSAP for scroll-triggered animations and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reload with tsx and Vite integration

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with schema-first approach
- **Migration**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless PostgreSQL driver

## Key Components

### Data Models
The application uses a well-structured schema with the following entities:
- **Users**: Authentication and user management
- **Products**: Mobile phones with detailed specifications (RAM, storage, color, price)
- **Categories**: Product categorization (iPhones, Android phones, etc.)
- **Brands**: Brand management for product organization

### Storage Layer
- **Interface-based Design**: IStorage interface with MemStorage implementation
- **In-memory Fallback**: Development storage with sample data initialization
- **Extensible**: Ready for database integration without changing business logic

### UI Components
- **Design System**: Custom color scheme with Croma brand colors (green primary)
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Component Library**: Extensive shadcn/ui component collection
- **Animations**: GSAP-powered scroll animations and hover effects

## Data Flow

### Client-Server Communication
1. **API Queries**: TanStack Query manages all server state with automatic caching
2. **REST Endpoints**: Products, categories, and brands exposed via RESTful APIs
3. **Error Handling**: Consistent error responses with proper HTTP status codes
4. **Request Logging**: Detailed API request logging with timing information

### Page Architecture
1. **Home Page**: Hero banner, product grids, category showcases
2. **Product Display**: Multiple filtering options (popular, bestsellers, category, brand)
3. **Responsive Layout**: Header with search, mobile menu, and footer

### Animation System
1. **Scroll Triggers**: Elements animate in as they enter viewport
2. **Staggered Animations**: Product cards animate with progressive delays
3. **Hover Effects**: Interactive feedback on product cards and buttons

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack Query
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Animations**: GSAP with ScrollTrigger plugin
- **Database**: Drizzle ORM, Neon Database driver
- **Development**: Vite, TypeScript, tsx for hot reload

### Production Dependencies
- **Form Handling**: React Hook Form with Hookform resolvers
- **Date Utilities**: date-fns for date manipulation
- **Validation**: Zod with Drizzle-Zod integration
- **Session Management**: Connect-pg-simple for PostgreSQL sessions

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations apply schema changes

### Environment Configuration
- **Development**: Hot reload with Vite dev server and tsx
- **Production**: Static file serving with Express for built React app
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Development Workflow
1. **Database Migrations**: `npm run db:push` applies schema changes
2. **Development Server**: `npm run dev` starts both frontend and backend
3. **Type Checking**: `npm run check` validates TypeScript across all modules
4. **Production Build**: `npm run build` creates optimized production assets

### Replit Integration
- **Development Banner**: Automatic Replit dev environment detection
- **Hot Reload**: Vite plugin for runtime error overlay
- **Cartographer**: Development dependency for Replit code mapping