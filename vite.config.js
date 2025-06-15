import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: false, // Disable sourcemaps for production performance
        minify: 'esbuild', // Use esbuild for faster minification
        cssCodeSplit: true, // Enable CSS code splitting
        chunkSizeWarningLimit: 600, // Increase chunk size warning threshold
        assetsInlineLimit: 4096, // Inline small assets for fewer requests
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
        esbuildOptions: {
            target: 'esnext', // Use latest JS features for modern browsers
        },
    },
})
