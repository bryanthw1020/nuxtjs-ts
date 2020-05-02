import { Configuration } from '@nuxt/types'

export const plugins: Configuration['plugins'] = [
  '@/plugins/bus.plugin',
  '@/plugins/helper.plugin'
]
