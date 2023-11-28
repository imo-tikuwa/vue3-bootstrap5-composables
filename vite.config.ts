import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vue3Bootstrap5Composables',
      fileName: 'vue3-bootstrap5-composables'
    },
    rollupOptions: {
      external: ['vue', 'bootstrap'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    host: true
  }
})
