import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const rewriteSlashToIndexHtml = () => {
    return {
        name: 'rewrite-slash-to-index-html',
        apply: 'serve',
        enforce: 'post',
        configureServer(server) {
            // rewrite / as index.html
            server.middlewares.use('/', (req, _, next) => {
                if (req.url === '/') {
                    req.url = '/index.html'
                }
                next()
            })
        },
    }
}

// https://vite.dev/config/
export default defineConfig({
    appType: 'spa',
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
        target: 'esnext', // Ensure modern JS output for Cloudflare compatibility
        manifest: true,   // Generate manifest for Cloudflare integrations
        emptyOutDir: true // Clean output directory before build
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
        esbuildOptions: {
            target: 'esnext', // Use latest JS features for modern browsers
        },
    },
    // Cloudflare Pages uses SPA fallback
    server: {
        fs: {
            strict: false
        }
    },
    // For Cloudflare Pages, ensure correct base path if deploying to root
    base: './',
})
