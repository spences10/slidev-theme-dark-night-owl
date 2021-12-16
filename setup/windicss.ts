import { defineWindiSetup } from '@slidev/types'
import { resolve } from 'path'

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, '../**/*.{vue,ts}')],
  },
  shortcuts: {
    // custom the default background
    'bg-main':
      'bg-[#f8f9fbff] text-[#090e24ff] dark:(bg-[#090e24ff] text-[#f8f9fbff])',
  },
}))

/* 
  #090e24ff Dark Blue
  #253889ff Dark Blue
  #f5487fff Red
  #7f43ffff Blue
  #f8f9fbff White
**/
