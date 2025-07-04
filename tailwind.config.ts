import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';

const config: Config = {
  content: ['./src/*.{html,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    animate,
    forms,
    typography,
    aspectRatio,
    containerQueries,
  ],
};
export default config;
