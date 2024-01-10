import { fileURLToPath, URL } from 'node:url'
import {createHtmlPlugin} from "vite-plugin-html";
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command,mode,isSsrBuild})=>{
  const env = loadEnv(mode,process.cwd(),'')
  const port:number = (env.VITE_APP_PORT as unknown as number) || 3000
  const api = env.VITE_APP_BASE_URL;
  const app_title = env.VITE_APP_TITLE || "Jelly Website";
  return {
    plugins: [
      vue(),
        createHtmlPlugin({
          inject: {
            data: {
              title: app_title
            }
          }
        })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
        port: port, // 服务端口
    },
  }
  }
  )
