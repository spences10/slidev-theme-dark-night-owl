/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import nightOwl from './night-owl.json'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: nightOwl,
      light: 'min-light',
    },
  }
})
