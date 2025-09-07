import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    appType: 'spa',
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
    },
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false, // Disable sourcemaps for production performance
        minify: 'esbuild', // Use esbuild for faster minification
        cssCodeSplit: true, // Enable CSS code splitting
        chunkSizeWarningLimit: 600, // Increase chunk size warning threshold
        assetsInlineLimit: 8192, // Increase from 4096 to inline more small assets
        target: 'esnext', // Ensure modern JS output for Cloudflare compatibility
        manifest: true,   // Generate manifest for Cloudflare integrations
        emptyOutDir: true, // Clean output directory before build
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    bootstrap: ['react-bootstrap', 'bootstrap'],
                    mui: ['@mui/icons-material/AlternateEmail', '@mui/icons-material/Phone', '@mui/icons-material/LinkedIn', '@mui/icons-material/GitHub']
                }
            }
        }
    },
    server: {
        port: 5173,
        open: true
    }
})
