import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const galleriesDir = path.join(__dirname, '..', '..', 'public', 'galleries')
const output = {}

fs.readdirSync(galleriesDir).forEach((category) => {
  const categoryPath = path.join(galleriesDir, category)
  const stat = fs.statSync(categoryPath)

  if (stat.isDirectory()) {
    const images = fs.readdirSync(categoryPath).filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext)
    })

    output[category] = images.map((img) => `/galleries/${category}/${img}`)
  }
})

fs.writeFileSync(
  path.join(__dirname, '..', '..', 'public', 'galleries.json'),
  JSON.stringify(output, null, 2)
)

console.log('✅ Fichier galleries.json généré avec succès !')
