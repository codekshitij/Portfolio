import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Ensure proper module format for GitHub Pages
    target: 'es2015',
    minify: 'esbuild',
    modulePreload: false,
    // Force proper file extensions
    assetsInlineLimit: 0,
  },
  server: {
    port: 5173,
  },
  // Ensure proper file extensions
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  // Optimize for static hosting
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
