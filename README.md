# Zams Platform - Technical Documentation

## Project Architecture

Zams Platform is built using Next.js 15.2.3 with the App Router architecture. The project follows a modular component-based structure with a focus on reusability and maintainability.

## Tech Stack

- **Framework**: Next.js 15.2.3
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 4.0
- **Component Library**: shadcn/ui (based on Radix UI)
- **Icons**: Lucide React
- **Build Tool**: Turbopack (for development)

## Project Structure
```
zams-project/
├── src/
│ ├── app/ # Next.js App Router pages
│ │ ├── datasources/ # Datasources page components
│ │ ├── landing/ # Landing page components
│ │ ├── globals.css # Global Tailwind styles
│ │ ├── layout.js # Root layout component
│ │ └── page.js # Main page component
│ ├── components/ # Reusable components
│ │ ├── sidebar/ # Sidebar components
│ │ └── ui/ # UI component library
│ └── lib/ # Utility functions
├── public/ # Static assets
├── components.json # shadcn/ui configuration
├── jsconfig.json # JavaScript path aliases
├── next.config.mjs # Next.js configuration
├── package.json # Dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
```
## Component Architecture

The application uses a component-based architecture with:

- **Page Components**: Located in `src/app/*/page.js`
- **UI Components**: Reusable UI elements in `src/components/ui/`
- **Layout Components**: Shared layouts like the sidebar in `src/components/sidebar/`

## Styling Implementation

- **CSS Framework**: Tailwind CSS with custom color variables
- **Theme Support**: Dark and light mode using CSS variables
- **Utility Function**: `cn()` for merging class names conditionally
- **Component Styling**: Class Variance Authority (CVA) for component variants

## Data Flow

- **State Management**: React's built-in useState hooks
- **Props**: Data passing between components via props
- **Component Communication**: Parent-child relationships

## Build Configuration

- **Development**: Uses Turbopack for faster development builds
- **Production**: Standard Next.js build process
- **Path Aliases**: Configured in jsconfig.json for cleaner imports

## UI Component System

The UI components are built using shadcn/ui, which provides:

- Accessible components based on Radix UI primitives
- Consistent styling through Tailwind CSS
- Customizable variants using Class Variance Authority
- Reusable patterns for common UI elements

## Performance Considerations

- Component-level code splitting via Next.js
- Optimized image loading
- CSS-in-JS avoided in favor of Tailwind's utility classes
- Minimal client-side JavaScript where possible

## Development Workflow

1. Components are developed in isolation
2. Pages compose multiple components together
3. Styling is applied using Tailwind utility classes
4. State is managed at the appropriate component level

## Deployment Strategy

The application is designed to be deployed on Vercel, taking advantage of:

- Edge functions
- Automatic preview deployments
- Incremental Static Regeneration (ISR)
- Global CDN distribution

