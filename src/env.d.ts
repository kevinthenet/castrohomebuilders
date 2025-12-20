/// <reference types="astro/client" />
declare module 'canvas-confetti';

// Alpine.js type definitions
declare module 'alpinejs' {
  export interface Alpine {
    store<T>(name: string, value: T): void;
    store<T>(name: string): T;
    start(): void;
  }

  interface Stores {
    theme: {
      dark: boolean;
      toggle(): void;
    };
  }

  const Alpine: Alpine;
  export default Alpine;
}

interface Window {
  Alpine: import('alpinejs').Alpine;
}
