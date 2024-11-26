import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared'
import { en } from './en'
import { fr } from './fr'

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: { label: 'Français', ...fr },
    en: { label: 'English', ...en },
  },
})
