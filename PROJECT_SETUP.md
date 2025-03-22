# SVG Editor Project Setup

## Project Overview

A web-based SVG editor that allows users to load, edit, and save SVG files. The application will serve as a learning tool for SVG manipulation, providing real-time feedback as users make changes. The editor will focus on a design-first approach while maintaining code visibility and editability.

## Technology Stack (Modern Best Practices)

-   **Framework**: React with Vite (for fast development and optimized build process)
-   **Language**: TypeScript for type safety and better developer experience
-   **Styling**: Tailwind CSS with CSS Variables for theming
-   **Component Library**: shadcn/ui (built on Radix UI primitives for accessibility)
-   **SVG Manipulation**: svg.js and native browser SVG support
-   **State Management**:
    -   Zustand for global state (simpler than Redux, powerful and performant)
    -   React Query for data fetching and caching
-   **File Handling**: Browser File API with streams support for large files
-   **Persistence**:
    -   LocalStorage with encryption for settings
    -   IndexedDB for larger files and version history
-   **Code Editing**:
    -   Monaco Editor (VS Code's editor component) with SVG language support
    -   Custom synchronization layer for bidirectional element highlighting
-   **Development Tools**:
    -   ESLint with strict configuration
    -   Prettier for consistent code formatting
    -   Husky for pre-commit hooks
    -   Vitest for unit and component testing
-   **Performance Optimization**:
    -   Code splitting with dynamic imports
    -   Virtualized rendering for large SVGs
    -   Web Workers for heavy computations
-   **Accessibility**: ARIA-compliant with keyboard navigation support

## Core Features (MVP)

1. **File Loading & Management**:

    - Upload from file system
    - Paste SVG code into textarea
    - Drag and drop SVG files
    - Recent files list with thumbnails
    - Auto-save to LocalStorage every 30 seconds
    - Version history with ability to restore previous states
    - Import from URL or public repositories

2. **User Interface**:

    - Responsive layout with resizable panels
    - Design-focused main canvas with intuitive controls
    - Side-by-side code and visual editors
    - Collapsible panels for tools and properties
    - Light/dark theme support with automatic system preference detection
    - Customizable workspace layout with drag-and-drop organization
    - Zoom and pan controls with shortcuts and touch gestures
    - Mini-map for navigation in large SVGs
    - Command palette (⌘K) for quick actions
    - Keyboard shortcut hints on hover

3. **Visualization**:

    - Real-time preview of the SVG
    - Split view with code and visual representation
    - Grid and ruler overlays with snapping
    - Multiple view modes (outline, wireframe, rendered)
    - Toggleable artboard/viewbox visualization
    - Preview at different screen sizes for responsive SVGs
    - Color blindness simulation modes
    - Touch-friendly controls for mobile devices

4. **Basic Editing**:

    - Select and modify paths/elements
    - Multi-select and group editing
    - Edit colors, strokes, and other properties
    - Responsive UI with sidebar controls
    - Smart guides and alignment tools
    - Direct manipulation handles for common properties
    - Basic shape creation tools (rectangle, circle, line, etc.)
    - Copy/paste/duplicate elements
    - Precise transformation controls
    - Eyedropper tool for color sampling

5. **Code Editing**:

    - Syntax highlighting for SVG
    - Real-time code changes reflected in visual editor
    - **Bidirectional element highlighting**:
        - Element in code highlights corresponding visual element
        - Selected visual element highlights corresponding code
        - Synchronized scrolling between code and visual view
        - Multi-selection support in both views
    - Code formatting options
    - Search and replace functionality
    - Error highlighting and validation
    - Code snippets for common SVG patterns
    - Element highlighting on cursor hover in code
    - Inline documentation for SVG attributes
    - Auto-complete with context-aware suggestions

6. **Export Options**:
    - Download edited SVG
    - Copy SVG code to clipboard
    - Export to PNG/JPEG with resolution options
    - Optimize SVG option (remove unused elements, minimize)
    - Export selected elements only
    - Copy styles as CSS
    - Export as React component

## Extended Features (Future Releases)

1. **Advanced Editing**:

    - Add new shapes and elements
    - Path editing with bezier controls
    - Group/ungroup elements
    - Boolean operations (union, intersect, subtract)
    - Path simplification and optimization
    - Convert text to paths
    - Masking and clipping path creation
    - Align and distribute tools
    - Symbol creation and reuse
    - Custom component library

2. **Image Integration**:

    - Set raster images as background
    - Use images as fill patterns for paths
    - Image tracing to convert to SVG paths
    - Image filters and adjustments
    - Drag-and-drop image placement
    - Crop and resize images within editor
    - Optimize embedded images
    - AI-assisted image vectorization

3. **Configuration**:

    - External JSON configuration file for UI options
    - Customizable toolbars and panels
    - User-defined presets for common operations
    - Keyboard shortcut customization
    - Plugin system for extensions
    - Template library with starting points
    - Cloud sync for settings

4. **Animation Support**:

    - Basic timeline for SVG animations
    - Preview of animated elements
    - Keyframe editing for properties
    - CSS animation generation
    - SMIL animation support
    - Export as animated SVG or GIF/video
    - Motion path creation and editing
    - Easing function editor
    - Animation presets

5. **Collaboration & Cloud Features**:

    - Optional cloud sync for projects
    - Share viewable/editable links
    - Export to design platforms
    - Version control integration
    - Asset library with reusable elements
    - Real-time collaboration

6. **Learning Tools**:
    - Interactive SVG tutorials
    - Element inspector with explanations
    - Optimization suggestions
    - Best practices hints
    - Code explanations for beginners
    - Example gallery with editable templates
    - AI-assisted learning suggestions

## Persistence Strategy

The application will implement a multi-layered persistence approach:

1. **Auto-save**:

    - Automatic saving to LocalStorage every 30 seconds
    - Manual save button for immediate storage
    - Recovery notification on page reload after crash
    - Atomic saves with backup protection

2. **Version History**:

    - Snapshots of document state at key points
    - Configurable number of history states to keep
    - Ability to name/bookmark important versions
    - Diff view between versions
    - Branch-based version exploration

3. **Storage Options**:

    - LocalStorage for current document and settings
    - IndexedDB for larger files and version history
    - Optional cloud storage integration in future releases
    - Export to file system for backup
    - Compressed storage format for efficiency

4. **Session Recovery**:
    - Automatic session restoration on browser restart
    - Multiple document support with tabbed interface
    - Conflict resolution for multi-tab editing
    - Graceful degradation when storage limits are reached

## Synchronization Architecture

The application implements a robust synchronization layer between the code editor and visual SVG canvas:

1. **Element Identification**:

    - Unique ID assignment to all SVG elements
    - Element registry with position tracking in code and canvas
    - Efficient DOM-to-code position mapping

2. **Bidirectional Highlighting**:

    - Code cursor position tracking with element detection
    - Visual element selection triggers code highlighting
    - Multi-selection support across both editors
    - Animated transitions for highlighting connections

3. **Event Coordination**:

    - Event bus for editor-to-editor communication
    - Debounced updates to prevent performance issues
    - Optimistic UI updates with verification
    - Conflict resolution for simultaneous edits

4. **Technical Implementation**:

    - Custom Monaco editor decorations for highlighting
    - SVG element overlay highlighting with CSS
    - Efficient range calculation for complex nested elements
    - Document mutation observer for sync maintenance
    - WebWorker support for complex parsing operations

## Project Structure (Modern Architecture)

```
svg-editor/
├── public/
│   ├── index.html
│   ├── assets/
│   └── examples/              # Example SVG files
├── src/
│   ├── components/            # Using atomic design principles
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── slider.tsx
│   │   ├── canvas/            # SVG editing canvas
│   │   │   ├── grid.tsx
│   │   │   ├── selection-tool.tsx
│   │   │   └── view-controls.tsx
│   │   ├── controls/          # UI controls and toolbars
│   │   │   ├── color-picker.tsx
│   │   │   ├── property-panel.tsx
│   │   │   └── toolbar.tsx
│   │   ├── file-io/           # File handling components
│   │   │   ├── file-open.tsx
│   │   │   ├── file-save.tsx
│   │   │   └── history-manager.tsx
│   │   ├── layout/            # App layout components
│   │   │   ├── header.tsx
│   │   │   ├── panels.tsx
│   │   │   └── splitter.tsx
│   │   ├── code-editor/       # Code editing components
│   │   │   ├── monaco-wrapper.tsx
│   │   │   ├── syntax-highlighter.tsx
│   │   │   └── sync-manager.tsx  # Manages bidirectional highlighting
│   │   └── property-editor/   # Element property editors
│   │       ├── path-editor.tsx
│   │       ├── style-editor.tsx
│   │       └── text-editor.tsx
│   ├── lib/                   # Core library code
│   │   ├── svg/               # SVG manipulation
│   │   │   ├── elements.ts
│   │   │   ├── parser.ts
│   │   │   └── renderer.ts
│   │   ├── sync/              # Synchronization code
│   │   │   ├── code-to-visual.ts
│   │   │   ├── visual-to-code.ts
│   │   │   └── position-mapper.ts
│   │   └── utils/             # Utility functions
│   │       ├── storage.ts
│   │       ├── transforms.ts
│   │       └── validation.ts
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-svg.ts
│   │   ├── use-storage.ts
│   │   ├── use-selection.ts
│   │   ├── use-code-sync.ts   # Hook for code highlighting
│   │   └── use-hotkeys.ts
│   ├── store/                 # Zustand state stores
│   │   ├── editor-store.ts
│   │   ├── history-store.ts
│   │   ├── sync-store.ts      # Store for sync state
│   │   └── preferences-store.ts
│   ├── services/              # Service layer
│   │   ├── persistence-service.ts
│   │   ├── svg-service.ts
│   │   ├── sync-service.ts    # Handles sync logic
│   │   └── export-service.ts
│   ├── workers/               # Web Workers
│   │   ├── svg-optimizer.worker.ts
│   │   ├── image-tracer.worker.ts
│   │   └── position-mapper.worker.ts  # Offloads parsing work
│   ├── styles/                # Global styles and themes
│   │   ├── globals.css
│   │   └── themes.css
│   ├── types/                 # TypeScript type definitions
│   │   ├── svg.types.ts
│   │   ├── editor.types.ts
│   │   └── sync.types.ts      # Types for synchronization
│   ├── config/                # Application configuration
│   │   ├── editor-config.ts
│   │   └── shortcuts.ts
│   ├── app.tsx
│   └── main.tsx
├── tests/                     # Test files
│   ├── components/
│   ├── hooks/
│   └── utils/
├── scripts/                   # Build and utility scripts
├── .github/                   # GitHub workflows for CI/CD
├── .vscode/                   # VS Code configuration
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
├── README.md
└── package.json
```

## Development Roadmap

### Phase 1: Project Setup and Modern Infrastructure (2 weeks)

-   Initialize React+TypeScript project with Vite
-   Set up Tailwind CSS with shadcn/ui components
-   Configure ESLint, Prettier and Husky
-   Set up testing framework
-   Create basic layout components with resizable panels
-   Set up Monaco editor for code editing
-   Implement file upload/paste functionality
-   Create storage service with LocalStorage integration

### Phase 2: SVG Rendering and Persistence (2 weeks)

-   Integrate svg.js for manipulation
-   Create SVG canvas component
-   Implement zoom and pan controls with touch support
-   Set up auto-save functionality
-   Build version history system
-   Create split view with synchronized code and visual editors
-   Implement responsive design for different devices

### Phase 3: Basic Editing Features (3 weeks)

-   Implement basic selection and property editing
-   Add property panels for common attributes
-   Create direct manipulation handles
-   Build color picker and style controls
-   Add basic shape creation tools
-   Implement undo/redo functionality
-   Add accessibility features
-   Create bi-directional highlighting between code and visual elements

### Phase 4: Enhanced Editing and UX (3 weeks)

-   Add grid and guides
-   Implement snap-to functionality
-   Create alignment tools
-   Build layer management panel
-   Add path editing capabilities
-   Implement group operations
-   Add keyboard shortcuts and command palette
-   Enhance synchronization between code and visual views

### Phase 5: Advanced Features and Export (2 weeks)

-   Implement export functionality for various formats
-   Add keyboard shortcuts
-   Create image import and background tools
-   Build optimization tools
-   Enhance code editor with validation and formatting
-   Implement performance optimizations for large SVGs

### Phase 6: Polish and Documentation (2 weeks)

-   Optimize performance
-   Add documentation and help system
-   Create example files and templates
-   Implement user preferences system
-   Add analytics and error reporting
-   Final testing and bug fixes
-   A11y audit and improvements

## Getting Started

To initialize the project with modern best practices:

1. Create a new Vite React+TypeScript project

```bash
npm create vite@latest svg-editor -- --template react-ts
cd svg-editor
```

2. Install dependencies with the latest versions

```bash
# Core dependencies
npm install @svgdotjs/svg.js monaco-editor zustand @tanstack/react-query
# UI components
npm install class-variance-authority tailwindcss-animate framer-motion @radix-ui/react-primitive cmdk
# Styling
npm install tailwindcss postcss autoprefixer clsx
# Utilities
npm install nanoid lodash-es zod
# Development dependencies
npm install -D sass typescript @types/node @typescript-eslint/eslint-plugin
npm install -D @typescript-eslint/parser eslint eslint-plugin-react eslint-plugin-react-hooks
npm install -D prettier eslint-config-prettier vitest @testing-library/react
npm install -D husky lint-staged vite-plugin-svgr
```

3. Set up Tailwind CSS and shadcn/ui

```bash
# Initialize Tailwind
npx tailwindcss init -p

# Set up shadcn/ui
npx shadcn-ui@latest init

# Add components as needed
npx shadcn-ui@latest add button dialog slider tabs popover
```

4. Configure TypeScript, ESLint, and Prettier

5. Create initial folder structure and implement basic components

6. Set up persistence layer with encrypted storage

## UI Design Principles

-   **Design-first approach** with intuitive visual controls
-   **Code accessibility** with synchronized code view
-   **Responsive layout** that works on various screen sizes
-   **Contextual controls** that appear when relevant
-   **Consistent interaction patterns** following design tool conventions
-   **Progressive disclosure** of advanced features to avoid overwhelming new users
-   **Accessibility-first** design with keyboard navigation and screen reader support
-   **Performance optimization** techniques for smooth interaction
-   **Error prevention** over error correction
-   **Consistent feedback** for all user interactions
-   **Intuitive information architecture** with logical grouping
-   **Visual hierarchy** that guides attention appropriately

## Modern Development Best Practices

-   **TypeScript everywhere** for type safety and better developer experience
-   **Component-driven development** with reusable atomic components
-   **Automated testing** for critical functionality
-   **Accessibility compliance** from the beginning
-   **Performance budgets** to maintain high-speed experience
-   **Code splitting** to reduce initial load time
-   **Error boundaries** to prevent cascading failures
-   **Progressive enhancement** for broader device support
-   **Secure storage** practices for user data
-   **Continuous integration** workflows
-   **Documentation as code** for maintainability
-   **Semantic versioning** for releases

## Resources

-   [SVG Specification](https://www.w3.org/TR/SVG2/)
-   [svg.js Documentation](https://svgjs.dev/docs/3.0/)
-   [React Documentation](https://react.dev/)
-   [TypeScript Documentation](https://www.typescriptlang.org/docs/)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [shadcn/ui Components](https://ui.shadcn.com/)
-   [Zustand Documentation](https://github.com/pmndrs/zustand)
-   [Monaco Editor Documentation](https://microsoft.github.io/monaco-editor/)
-   [IndexedDB Documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
-   [Web Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
