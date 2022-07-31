import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/loading.ts',
      name: 'OhhoLoading',
      formats: ['es', 'cjs'],
      fileName: 'loading'
    }
  }
})
