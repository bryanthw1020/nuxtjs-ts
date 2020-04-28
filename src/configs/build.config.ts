import { Configuration } from '@nuxt/types'

export const build: Configuration['build'] = {
  extend(config: any, ctx: any) {
    config.node = {
      fs: 'empty'
    }
  }
}
