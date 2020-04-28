import { Configuration } from '@nuxt/types'

require('dotenv').config()

export const server: Configuration['server'] = {
  port: process.env.APP_PORT
}
