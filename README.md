# Design System Demo

A modern Next.js web application showcasing a custom design system built with Tailwind CSS. This project demonstrates how to create a comprehensive design system with custom color tokens, components, and dark mode support.

## Features

- 🎨 **Custom Design System** - Complete color palette with CSS variables
- 🌙 **Dark Mode Support** - Automatic theme switching with system preference detection
- 📱 **Responsive Design** - Mobile-first approach with responsive components
- 🎯 **Component Library** - Reusable UI components built with the design system
- 📊 **Chart Components** - Data visualization with custom chart colors
- 🏳️ **PNG Flag Colors** - Special color tokens for PNG flag representation
- ⚡ **Performance Optimized** - Built with Next.js 14 and optimized for speed

## Design System

### Color Tokens

The design system uses OKLCH color space for better color representation and includes:

- **Primary Colors**: Main brand colors
- **Secondary Colors**: Supporting colors
- **Semantic Colors**: Success, warning, error states
- **Chart Colors**: 5 distinct colors for data visualization
- **PNG Flag Colors**: Special colors for PNG flag representation
- **Sidebar Colors**: Dedicated colors for sidebar components

### Components

- **ThemeProvider** - Manages theme state and provides context
- **ThemeToggle** - Allows switching between light, dark, and system themes
- **Sidebar** - Responsive navigation sidebar with mobile support
- **Card** - Flexible card component with header, content, and footer
- **Button** - Multiple variants and sizes
- **Chart** - Data visualization component
- **PNGFlag** - PNG flag representation component

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd design-system-demo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page showcasing components
├── components/
│   ├── button.tsx           # Button component
│   ├── card.tsx             # Card component
│   ├── chart.tsx            # Chart component
│   ├── png-flag.tsx         # PNG flag component
│   ├── sidebar.tsx          # Sidebar navigation
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Theme toggle component
└── lib/
    └── utils.ts             # Utility functions
```

## Usage

### Using the Design System

The design system is built into Tailwind CSS classes. You can use the custom color tokens directly:

```tsx
<div className="bg-primary text-primary-foreground">
  Primary colored content
</div>

<div className="bg-sidebar text-sidebar-foreground">
  Sidebar styled content
</div>
```

### Adding New Components

1. Create a new component file in `src/components/`
2. Import the utility function: `import { cn } from "@/lib/utils"`
3. Use the design system colors and classes
4. Export the component for use in other parts of the app

### Customizing Colors

To modify the design system colors, edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... other colors */
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **tw-animate-css** - Animation utilities
- **Lucide React** - Icon library
- **clsx** - Conditional class names
- **tailwind-merge** - Class name merging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
