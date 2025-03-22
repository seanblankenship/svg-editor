/**
 * Environment configuration utility
 * Provides type-safe access to environment variables with defaults
 */

// App configuration
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'SVG Editor';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '0.1.0';
export const APP_DESCRIPTION = import.meta.env.VITE_APP_DESCRIPTION || 'Interactive SVG editor';

// Feature flags
export const ENABLE_PERSISTENCE = import.meta.env.VITE_ENABLE_PERSISTENCE !== 'false';
export const ENABLE_EXAMPLES = import.meta.env.VITE_ENABLE_EXAMPLES !== 'false';
export const DEBUG_MODE = import.meta.env.VITE_DEBUG_MODE === 'true';

// Editor configuration
export const DEFAULT_THEME = import.meta.env.VITE_DEFAULT_THEME || 'system';
export const AUTO_SAVE_INTERVAL = Number(import.meta.env.VITE_AUTO_SAVE_INTERVAL || 30000);

// Canvas configuration
export const DEFAULT_GRID_SIZE = Number(import.meta.env.VITE_DEFAULT_GRID_SIZE || 10);
export const DEFAULT_SNAP_TO_GRID = import.meta.env.VITE_DEFAULT_SNAP_TO_GRID !== 'false';
export const DEFAULT_CANVAS_WIDTH = Number(import.meta.env.VITE_DEFAULT_CANVAS_WIDTH || 800);
export const DEFAULT_CANVAS_HEIGHT = Number(import.meta.env.VITE_DEFAULT_CANVAS_HEIGHT || 600);

// Environment information
export const IS_DEVELOPMENT = import.meta.env.DEV;
export const IS_PRODUCTION = import.meta.env.PROD;
export const BASE_URL = import.meta.env.BASE_URL;

/**
 * Debug logging utility that only outputs in debug mode
 */
export const debugLog = (...args: unknown[]): void => {
  if (DEBUG_MODE) {
    console.log('[DEBUG]', ...args);
  }
};

/**
 * Environment configuration object for easy imports
 */
const env = {
  app: {
    name: APP_NAME,
    version: APP_VERSION,
    description: APP_DESCRIPTION,
  },
  features: {
    enablePersistence: ENABLE_PERSISTENCE,
    enableExamples: ENABLE_EXAMPLES,
    debugMode: DEBUG_MODE,
  },
  editor: {
    defaultTheme: DEFAULT_THEME,
    autoSaveInterval: AUTO_SAVE_INTERVAL,
  },
  canvas: {
    defaultGridSize: DEFAULT_GRID_SIZE,
    defaultSnapToGrid: DEFAULT_SNAP_TO_GRID,
    defaultWidth: DEFAULT_CANVAS_WIDTH,
    defaultHeight: DEFAULT_CANVAS_HEIGHT,
  },
  environment: {
    isDevelopment: IS_DEVELOPMENT,
    isProduction: IS_PRODUCTION,
    baseUrl: BASE_URL,
  },
  debug: debugLog,
};

export default env;
