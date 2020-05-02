import { Plugin } from '@nuxt/types'
import queryString from 'query-string'

interface Helper {
  stringifyParams(params: any): string
  getBase64(file: File): Promise<string>
  prepareUrl(baseUrl: string, params: any): string
  jsonReparse(data: any): any
}

declare module 'vue/types/vue' {
  interface Vue {
    $helper: Helper
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $helper: Helper
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $helper: Helper
  }
}

const helperPlugin: Plugin = (context, inject) => {
  const helper: Helper = {
    stringifyParams(params: any) {
      return queryString
        .stringify(params)
        .replace(/[^?=&]+=(&|$)/g, '')
        .replace(/&$/, '')
    },
    getBase64(file: File) {
      return new Promise((resolve, reject) => {
        const reader: any = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          let encoded = reader.result.replace(/^data:(.*;base64,)?/, '')
          if (encoded.length % 4 > 0) {
            encoded += '='.repeat(4 - (encoded.length % 4))
          }
          resolve(encoded)
        }
        reader.onerror = (error: any) => reject(error)
      })
    },
    prepareUrl(baseUrl: string, params: any) {
      let url = baseUrl

      for (let key in params) {
        url = url.replace('{' + key + '}', params[key])
      }

      return url
    },
    jsonReparse(data: any) {
      return JSON.parse(JSON.stringify(data))
    }
  }

  inject('helper', helper)
}

export default helperPlugin
