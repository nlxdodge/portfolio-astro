import { glob } from "glob";
import fs from "node:fs";
import sharp from "sharp";

const files = await glob("src/assets/**/*.png");

console.log(`Converting ${files.length} png files to avif format`);
for (const file of files) {
  const avifFile = file.replace(/\.png$/i, ".avif");

  if (fs.existsSync(avifFile)) continue;

  await sharp(file).avif({ quality: 80 }).toFile(avifFile);

  console.log(`Converted: ${avifFile}`);
}
console.log(`Done`);
