import {
  axios,
  build,
  buildModules,
  css,
  head,
  i18n,
  loading,
  modules,
  plugins,
  proxy,
  router,
  server,
  vuetify
} from './src/configs'

import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  srcDir: 'src',
  head,
  loading,
  css,
  plugins,
  buildModules,
  modules,
  i18n,
  axios,
  proxy,
  router,
  server,
  vuetify,
  build
}

export default config
