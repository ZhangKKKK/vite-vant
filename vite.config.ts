import { defineConfig } from 'vite'
import styleImport from "vite-plugin-style-import";
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  plugins: [
    vue(),
    legacy(),
    vueJsx(),
    styleImport({
      libs:[
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        }
      ]
    }),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  // Vite启动后提示“Network: use `--host` to expose“ 通过ip访问
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://erpproxy.hapi123.net',
        ws: false,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    // 配置别名 vue cli一样 以@引入文件
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
