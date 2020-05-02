import { Configuration } from '@nuxt/types'

export const build: Configuration['build'] = {
  babel: {
    presets({ isServer }) {
      return [['@nuxt/babel-preset-app', { loose: true }]]
    }
  },
  extend(config: any, ctx: any) {
    config.node = {
      fs: 'empty'
    }
  }
}
