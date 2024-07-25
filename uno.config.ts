import { defineConfig, presetUno, presetAttributify } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import presetIcons from '@unocss/preset-icons/browser'

export default defineConfig({
  shortcuts: [
    { logo: 'i-logos-vue w-6em h-6em transform transition-800' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
      processors: createLocalFontProcessor(),
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      // collections: {
      //   carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
      //   mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      //   logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
      // }
    }),
  ],
})