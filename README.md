# SVG Editor

A modern, web-based SVG editor with bidirectional code and visual synchronization. Built with React, TypeScript, and modern web technologies.

## Features

- Real-time visual and code editing of SVG files
- Bidirectional highlighting between code and visual elements
- Robust persistence with auto-save and version history
- Advanced SVG editing tools and transform operations
- Support for patterns, gradients, filters, and masks
- Export to various formats including optimized SVG
- Modern, responsive interface with light/dark mode

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/svg-editor.git
cd svg-editor
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Development

### Project Structure

```
svg-editor/
├── src/
│   ├── components/            # UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Core library code
│   ├── store/                 # State management
│   ├── services/              # Business logic
│   ├── styles/                # Global styles
│   ├── types/                 # TypeScript types
│   └── ...
├── public/                    # Static assets
├── .docs/                     # Project documentation
└── ...
```

### Tech Stack

- **React**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS
- **shadcn/ui**: UI component library
- **svg.js**: SVG manipulation
- **Monaco Editor**: Code editor
- **Zustand**: State management

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run coverage` - Run tests with coverage

## Documentation

For detailed documentation, see the `.docs` directory:

- [Project Vision](.docs/PROJECT_VISION.md)
- [Architecture](.docs/ARCHITECTURE.md)
- [Implementation Plan](.docs/IMPLEMENTATION_PLAN.md)
- [Testing Strategy](.docs/TESTING_STRATEGY.md)

### Feature Checklists

- [Project Setup](.docs/feature_checklists/01_PROJECT_SETUP.md)
- [SVG Rendering](.docs/feature_checklists/02_SVG_RENDERING.md)
- [Editing Features](.docs/feature_checklists/03_EDITING_FEATURES.md)
- [Advanced Features](.docs/feature_checklists/04_ADVANCED_FEATURES.md)
- [Polish & Finalization](.docs/feature_checklists/05_POLISH_FINALIZATION.md)

## Contributing

Contributions are welcome! Please check out our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- SVG specification and standards
- Open source libraries and tools that make this project possible
- [SVG.js](https://svgjs.dev/) for SVG manipulation
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for code editing
