/**
 * Image Optimization Script
 * Converts all PNG images in public/ and src/assets/ to WebP format.
 * Also generates optimized PNGs. Run with: node scripts/optimize-images.js
 */
import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const DIRS = [
    join(ROOT, 'public', 'images'),
    join(ROOT, 'src', 'assets')
]

const WEBP_QUALITY = 80
const PNG_QUALITY = 80

async function findPngs(dir) {
    const files = []
    try {
        const entries = await readdir(dir, { withFileTypes: true })
        for (const entry of entries) {
            const fullPath = join(dir, entry.name)
            if (entry.isDirectory()) {
                files.push(...await findPngs(fullPath))
            } else if (extname(entry.name).toLowerCase() === '.png') {
                files.push(fullPath)
            }
        }
    } catch {
        // Directory doesn't exist, skip
    }
    return files
}

async function convertToWebP(pngPath) {
    const webpPath = pngPath.replace(/\.png$/i, '.webp')
    const name = basename(pngPath)

    try {
        const info = await sharp(pngPath)
            .webp({ quality: WEBP_QUALITY })
            .toFile(webpPath)

        const originalStat = await stat(pngPath)
        const savings = ((1 - info.size / originalStat.size) * 100).toFixed(1)

        console.log(`  ✅ ${name} → .webp (${(originalStat.size / 1024).toFixed(0)}KB → ${(info.size / 1024).toFixed(0)}KB, -${savings}%)`)
        return { original: originalStat.size, converted: info.size }
    } catch (err) {
        console.error(`  ❌ Failed: ${name} — ${err.message}`)
        return null
    }
}

async function main() {
    console.log('\n🖼️  Image Optimization\n')

    let totalOriginal = 0
    let totalConverted = 0
    let count = 0

    for (const dir of DIRS) {
        const pngs = await findPngs(dir)
        if (pngs.length === 0) continue

        const relDir = dir.replace(ROOT, '').replace(/\\/g, '/')
        console.log(`📁 ${relDir} (${pngs.length} PNGs)`)

        for (const png of pngs) {
            const result = await convertToWebP(png)
            if (result) {
                totalOriginal += result.original
                totalConverted += result.converted
                count++
            }
        }
        console.log()
    }

    if (count > 0) {
        const totalSavings = ((1 - totalConverted / totalOriginal) * 100).toFixed(1)
        console.log(`📊 Summary: ${count} images converted`)
        console.log(`   Total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalConverted / 1024 / 1024).toFixed(2)}MB (-${totalSavings}%)`)
    } else {
        console.log('No PNG images found to convert.')
    }

    console.log('\n⚠️  Next steps:')
    console.log('   1. Update portfolio-cards.json: change .png → .webp')
    console.log('   2. Update portfolio-projects.json: change .png → .webp')
    console.log('   3. Import .webp in Home.jsx and ProfileImage.jsx')
    console.log('   4. Keep .png files as fallback or remove them\n')
}

main()
