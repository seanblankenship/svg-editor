# SVG Editor

A web-based SVG editor that provides a dual-interface experience with both visual editing capabilities and direct code manipulation, with real-time synchronization between the two views.

## Features

- Visual SVG editing with intuitive controls
- Real-time code synchronization
- Dark/light mode theming
- Responsive design for various screen sizes
- SVG export options

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **SVG Manipulation**: svg.js (coming soon)
- **Code Editor**: Monaco Editor (coming soon)
- **State Management**: Zustand (coming soon)

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm 8+

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
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Development

### Key Commands

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

### Project Structure

- `/src` - Source code
  - `/components` - UI components
  - `/hooks` - Custom React hooks
  - `/store` - State management
  - `/lib` - Utility functions
  - `/services` - API services

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### CI/CD Workflows

The project uses GitHub Actions for continuous integration and testing:

- `ci.yml` - Runs linting, tests, and build verification on every push and pull request
- `playwright.yml` - Runs end-to-end tests using Playwright

### Development Phases

This project is being developed in phases:

- ✅ **Phase 1**: Project Setup and Modern Infrastructure (Complete)
- 🔄 **Phase 2**: SVG Rendering and Persistence (In Progress)
- 📅 **Phase 3**: Basic Editing Features (Planned)
- 📅 **Phase 4**: Enhanced Editing and UX (Planned)
- 📅 **Phase 5**: Advanced Features and Export (Planned)
- 📅 **Phase 6**: Polish and Finalization (Planned)

For more detailed information about each phase, see the [Implementation Plan](.docs/IMPLEMENTATION_PLAN.md).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- SVG specification and standards
- Open source libraries and tools that make this project possible
- [SVG.js](https://svgjs.dev/) for SVG manipulation
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for code editing
