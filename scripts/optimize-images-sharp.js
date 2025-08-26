const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = 'public/content/home';
  const outputDir = 'public/content/home/optimized';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🚀 Starting image optimization with Sharp...');
  
  // Get all image files
  const files = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );
  
  let optimizedCount = 0;
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`📸 Processing ${file} (${originalSize}MB)...`);
    
    try {
      // Generate WebP version
      const webpPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      await sharp(inputPath)
        .webp({ 
          quality: 85,
          effort: 6 
        })
        .toFile(webpPath);
      
      // Generate compressed JPEG version
      const jpegPath = path.join(outputDir, file.replace(/\.png$/i, '.jpg'));
      await sharp(inputPath)
        .jpeg({ 
          quality: 80,
          progressive: true
        })
        .toFile(jpegPath);
      
      const webpStats = fs.statSync(webpPath);
      const webpSize = (webpStats.size / 1024 / 1024).toFixed(2);
      const savings = ((stats.size - webpStats.size) / stats.size * 100).toFixed(1);
      
      console.log(`  ✅ ${file} → ${path.basename(webpPath)} (${webpSize}MB, ${savings}% smaller)`);
      optimizedCount++;
      
    } catch (error) {
      console.error(`  ❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`🎉 Optimization complete! Processed ${optimizedCount} images.`);
  console.log(`📁 Optimized images saved to: ${outputDir}`);
}

optimizeImages().catch(console.error);
