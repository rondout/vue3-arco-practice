import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

export function configUnocss() {
  return UnoCSS({
    presets: [presetUno(), presetAttributify()],
    rules: [
      ['ml-1', { 'margin-left': '8px' }],
      [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${parseInt(d) * 8}px` })],
      [
        /^my-(\d+)$/,
        ([, d]) => ({
          'margin-top': `${parseInt(d) * 8}px`,
          'margin-bottom': `${parseInt(d) * 8}px`
        })
      ]
    ],
    shortcuts: {
      'flex-center': ['flex', 'justify-center', 'items-center'],
      'flex-btw': ['flex', 'flex-justify-between', 'items-center'],
      'flex-start': ['flex', 'flex-justify-start', 'items-center']
    },
    theme: {
      colors: {
        primary: '#3f51b5',
        light: '#fff'
      }
    },
    variants: [
      // children:
      (matcher) => {
        if (!matcher.startsWith('children:')) return matcher
        return {
          // slice `children:` prefix and passed to the next variants and rules
          matcher: matcher.slice(9),
          selector: (s) => `${s}>*`
        }
      },
      // hover
      (matcher) => {
        if (!matcher.startsWith('hover:')) return matcher
        return {
          // slice `hover:` prefix and passed to the next variants and rules
          matcher: matcher.slice(6),
          selector: (s) => `${s}:hover`
        }
      }
    ]
  })
}
