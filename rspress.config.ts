import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rustacean Docs',
  description: 'Docs about Rust Gardening',
  icon: '/Github_Profile.png',
  logo: {
    light: '/Github_Profile.png',
    dark: '/Github_Profile.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/pulsarforge/rustaceans-docs' },
    ],
  },
});
