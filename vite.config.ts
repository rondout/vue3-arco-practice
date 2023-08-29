import { fileURLToPath, URL } from 'node:url'
import { configAutoImport } from './config/unplugin/auto-import'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configComponents } from './config/unplugin/component'
import { configUnocss } from './config/plugins/unocss'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), configAutoImport(), configComponents(), configUnocss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  envDir: path.resolve('env'),
  envPrefix: 'MY',
  server: {
    // host
    host: '0.0.0.0',
    // 端口
    port: 3000,
    // 启动时打开浏览器
    open: true
  },
  build: {
    rollupOptions: {}
  },
  css: {
    // css 预处理器配置
    preprocessorOptions: {
      less: {
        modifyVars: {
          'arcoblue-6': '#3f51b5'
        },
        javascriptEnabled: true
      }
    }
  }
})
