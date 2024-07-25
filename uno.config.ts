import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'


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
      // 在这里配置你需要使用的图标库
      collections: {
        fluent: () => import('@vicons/fluent').then(i => i.default),
        ionicons4: () => import('@vicons/ionicons4').then(i => i.default),
        ionicons5: () => import('@vicons/ionicons5').then(i => i.default),
        antd: () => import('@vicons/antd').then(i => i.default),
        material: () => import('@vicons/material').then(i => i.default),
        fa: () => import('@vicons/fa').then(i => i.default),
        tabler: () => import('@vicons/tabler').then(i => i.default),
        carbon: () => import('@vicons/carbon').then(i => i.default),
      },
    }),
  ],
})