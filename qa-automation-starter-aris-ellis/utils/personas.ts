export type Persona = {
  name: string;
  network?: 'slow3g' | 'fast3g' | 'offline';
  locale?: string;
  viewport?: { width: number; height: number };
};

export const personas: Persona[] = [
  { name: 'Power User', locale: 'en-US', viewport: { width: 1440, height: 900 } },
  { name: 'Mobile Slow', network: 'slow3g', viewport: { width: 390, height: 844 } },
  { name: 'Accessibility', locale: 'en-US', viewport: { width: 1280, height: 800 } }
];
