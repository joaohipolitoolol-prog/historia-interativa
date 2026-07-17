import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#FF5A1F"/>
  <path d="M96 150c70 0 110 28 140 50v210c-30-22-70-42-140-42V150z" fill="#fff"/>
  <path d="M416 150c-70 0-110 28-140 50v210c30-22 70-42 140-42V150z" fill="#fff"/>
  <path d="M256 200v210" stroke="#FF5A1F" stroke-width="22" stroke-linecap="round"/>
  <path d="M380 90l18 42 46 18-46 18-18 42-18-42-46-18 46-18 18-42z" fill="#fff"/>
</svg>`)

fs.writeFileSync(path.join(root, 'public/favicon.svg'), svg)
fs.writeFileSync(path.join(root, 'public/brand/brand-icon.svg'), svg)

const outs = [
  ['public/favicon-16x16.png', 16],
  ['public/favicon-32x32.png', 32],
  ['public/favicon.png', 48],
  ['public/apple-touch-icon.png', 180],
  ['public/android-chrome-192x192.png', 192],
  ['public/android-chrome-512x512.png', 512],
  ['public/brand/brand-icon.png', 512],
]

for (const [out, size] of outs) {
  await sharp(svg).resize(size, size).png().toFile(path.join(root, out))
  console.log('ok', out)
}

const ogJpg = path.join(root, 'public/images/og-image.jpg')
const ogPng = path.join(root, 'public/images/og-image.png')
const src = fs.existsSync(ogPng) ? ogPng : ogJpg

await sharp(src)
  .resize(1200, 630, {
    fit: 'contain',
    background: { r: 255, g: 248, b: 242, alpha: 1 },
  })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(ogJpg)

await sharp(ogJpg).png().toFile(ogPng)

console.log('og jpg', fs.statSync(ogJpg).size)
console.log('og png', fs.statSync(ogPng).size)
