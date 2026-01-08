# Print Mega Store

## Overview

Print Mega Store is a modern ecommerce website for professional printing and scanning solutions. The application serves as a storefront for printers, scanners, and related products, integrating with Ecwid as the ecommerce platform for product management, cart, and checkout functionality. The site features a React frontend with Express backend, PostgreSQL database for storing newsletter subscribers and contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and interactions
- **Build Tool**: Vite

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: REST API with typed routes using Zod validation
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Development**: tsx for TypeScript execution, Vite dev server for frontend

### Data Storage
- **Database**: PostgreSQL
- **Schema**: Two tables defined in `shared/schema.ts`:
  - `subscribers`: Email newsletter subscriptions
  - `contactMessages`: Contact form submissions
- **Migrations**: Drizzle Kit for schema management (`db:push` command)

### Ecommerce Integration
- **Platform**: Ecwid (Store ID: 128774264)
- **Integration Method**: JavaScript widget injection via useEffect hooks
- **Features**: Product catalog, categories, cart, and checkout handled by Ecwid
- **Categories**: Home Printers, Office Printers, Inkjet Printers, Laser Printers, Document Scanners

### Project Structure
```
├── client/          # React frontend
│   └── src/
│       ├── components/  # UI components including shadcn/ui
│       ├── hooks/       # Custom React hooks
│       ├── lib/         # Utilities and Ecwid integration
│       └── pages/       # Route pages (Home, Shop, Contact)
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Database access layer
│   └── db.ts        # Database connection
├── shared/          # Shared code between client/server
│   ├── schema.ts    # Drizzle database schema
│   └── routes.ts    # API route type definitions
└── migrations/      # Database migrations
```

### Build System
- **Development**: `npm run dev` runs tsx with Vite middleware
- **Production Build**: Custom build script using esbuild for server and Vite for client
- **Output**: Server bundled to `dist/index.cjs`, client to `dist/public/`

## External Dependencies

### Third-Party Services
- **Ecwid**: Ecommerce platform for product management, cart, and checkout
  - Script URL: `https://my.ecwid.com/script.js?128774264`
  - Widgets dynamically loaded on Shop page

### Database
- **PostgreSQL**: Required via `DATABASE_URL` environment variable
- **Session Storage**: connect-pg-simple for Express sessions (if needed)

### Key NPM Packages
- **UI**: Radix UI primitives, Lucide React icons, class-variance-authority
- **Forms**: React Hook Form with Zod resolver
- **Data Fetching**: TanStack Query
- **Database**: drizzle-orm, drizzle-zod, pg
- **Animation**: framer-motion, embla-carousel-react