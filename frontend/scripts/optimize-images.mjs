// Converts the large source images in /public into small WebP files.
// Run with: npm run optimize-images
// Re-run whenever a source image is replaced.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const pub = path.resolve(import.meta.dirname, "../public");

// Hero slides: several widths so the browser picks the right one via srcSet.
const heroWidths = [768, 1280, 1920];
const heroImages = {
  construction:
    "hero/civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept.jpg",
  strawberry: "hero/female-is-picking-strawberries-greenhouse.jpg",
  nurse: "hero/nurse-old-woman-looking-window.jpg",
};

// Other large images: one WebP next to the original, capped at maxWidth.
const singleImages = [
  { src: "figma/1afeb.png", maxWidth: 1024 },
  { src: "figma/21a21.png", maxWidth: 1200 },
  { src: "figma/f710d.png", maxWidth: 640 },
  { src: "figma/global-workforce-hero.jpg", maxWidth: 1376 },
  { src: "figma/global-candidates.jpg", maxWidth: 1376 },
  { src: "figma/global-employers.jpg", maxWidth: 1376 },
];

async function toWebp(src, out, width, quality = 72) {
  const info = await sharp(path.join(pub, src))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(path.join(pub, out));
  console.log(`${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}

await mkdir(path.join(pub, "hero/optimized"), { recursive: true });
for (const [name, src] of Object.entries(heroImages)) {
  for (const w of heroWidths) {
    await toWebp(src, `hero/optimized/${name}-${w}.webp`, w);
  }
}

for (const { src, maxWidth } of singleImages) {
  await toWebp(src, src.replace(/\.(png|jpe?g)$/i, ".webp"), maxWidth, 78);
}
