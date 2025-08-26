const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp').default || require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg').default || require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant').default || require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = 'public/content/home';
  const outputDir = 'public/content/home/optimized';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🚀 Starting image optimization...');
  
  // Convert JPG/PNG to WebP (high quality, smaller size)
  const webpFiles = await imagemin([`${inputDir}/*.{jpg,jpeg,png}`], {
    destination: outputDir,
    plugins: [
      imageminWebp({
        quality: 85, // High quality but compressed
      })
    ]
  });
  
  // Also create compressed JPEG fallbacks
  const jpegFiles = await imagemin([`${inputDir}/*.{jpg,jpeg}`], {
    destination: outputDir,
    plugins: [
      imageminMozjpeg({
        quality: 80,
        progressive: true
      })
    ]
  });
  
  // Compress PNG files
  const pngFiles = await imagemin([`${inputDir}/*.png`], {
    destination: outputDir,
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });
  
  console.log(`✅ Optimized ${webpFiles.length} images to WebP format`);
  console.log(`✅ Optimized ${jpegFiles.length} JPEG images`);
  console.log(`✅ Optimized ${pngFiles.length} PNG images`);
  console.log('🎉 Image optimization complete!');
}

optimizeImages().catch(console.error);
