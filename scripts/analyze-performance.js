#!/usr/bin/env node

/**
 * Script para analizar el rendimiento de la aplicación
 * Ejecutar: node scripts/analyze-performance.js
 */

const fs = require('fs');
const path = require('path');

console.log('\n🚀 Análisis de Optimizaciones de Rendimiento\n');
console.log('='.repeat(60));

// 1. Análizar tamaño de imágenes
function analyzeImages() {
  console.log('\n📸 Análisis de Imágenes:');
  console.log('-'.repeat(60));
  
  const publicDir = path.join(__dirname, '..', 'public');
  const images = [];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(file)) {
        images.push({
          name: file,
          size: stat.size,
          path: filePath.replace(publicDir, '')
        });
      }
    });
  }
  
  if (fs.existsSync(publicDir)) {
    scanDirectory(publicDir);
  }
  
  // Ordenar por tamaño
  images.sort((a, b) => b.size - a.size);
  
  const totalSize = images.reduce((sum, img) => sum + img.size, 0);
  const avgSize = totalSize / images.length;
  
  console.log(`Total de imágenes: ${images.length}`);
  console.log(`Tamaño total: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Tamaño promedio: ${(avgSize / 1024).toFixed(2)} KB`);
  
  console.log('\n🔝 Top 5 imágenes más grandes:');
  images.slice(0, 5).forEach((img, i) => {
    console.log(`${i + 1}. ${img.name}: ${(img.size / 1024).toFixed(2)} KB`);
  });
  
  const largeImages = images.filter(img => img.size > 500 * 1024);
  if (largeImages.length > 0) {
    console.log(`\n⚠️  ${largeImages.length} imágenes > 500KB - Considera optimizarlas`);
  } else {
    console.log('\n✅ Todas las imágenes están optimizadas (<500KB)');
  }
}

// 2. Analizar componentes
function analyzeComponents() {
  console.log('\n🧩 Análisis de Componentes:');
  console.log('-'.repeat(60));
  
  const componentsDir = path.join(__dirname, '..', 'components');
  const components = [];
  
  if (fs.existsSync(componentsDir)) {
    const files = fs.readdirSync(componentsDir);
    
    files.forEach(file => {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const filePath = path.join(componentsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n').length;
        const size = fs.statSync(filePath).size;
        
        // Detectar si usa dynamic import
        const usesDynamic = /dynamic\s*\(/.test(content);
        const usesLazy = /lazy\s*=\s*["']lazy["']/.test(content) || /loading\s*=\s*["']lazy["']/.test(content);
        
        components.push({
          name: file,
          lines,
          size,
          optimized: usesDynamic || usesLazy
        });
      }
    });
    
    components.sort((a, b) => b.size - a.size);
    
    console.log(`Total de componentes: ${components.length}`);
    
    const optimizedCount = components.filter(c => c.optimized).length;
    console.log(`Componentes optimizados: ${optimizedCount}/${components.length}`);
    
    console.log('\n🔝 Top 5 componentes más grandes:');
    components.slice(0, 5).forEach((comp, i) => {
      const status = comp.optimized ? '✅' : '⚠️ ';
      console.log(`${i + 1}. ${status} ${comp.name}: ${comp.lines} líneas, ${(comp.size / 1024).toFixed(2)} KB`);
    });
  }
}

// 3. Analizar configuración de Next.js
function analyzeNextConfig() {
  console.log('\n⚙️  Análisis de Configuración Next.js:');
  console.log('-'.repeat(60));
  
  const configPath = path.join(__dirname, '..', 'next.config.mjs');
  
  if (fs.existsSync(configPath)) {
    const config = fs.readFileSync(configPath, 'utf-8');
    
    const checks = [
      {
        name: 'Optimización de imágenes',
        check: /unoptimized\s*:\s*false/,
        found: /unoptimized\s*:\s*false/.test(config)
      },
      {
        name: 'Formatos modernos (WebP/AVIF)',
        check: /formats.*webp.*avif/i,
        found: /formats.*webp.*avif/i.test(config) || /formats.*avif.*webp/i.test(config)
      },
      {
        name: 'SWC Minification',
        check: /swcMinify\s*:\s*true/,
        found: /swcMinify\s*:\s*true/.test(config)
      },
      {
        name: 'Compresión',
        check: /compress\s*:\s*true/,
        found: /compress\s*:\s*true/.test(config)
      },
      {
        name: 'Headers de cache',
        check: /headers\s*\(\s*\)/,
        found: /headers\s*\(\s*\)/.test(config)
      },
      {
        name: 'Modular imports',
        check: /modularizeImports/,
        found: /modularizeImports/.test(config)
      }
    ];
    
    checks.forEach(check => {
      const status = check.found ? '✅' : '❌';
      console.log(`${status} ${check.name}`);
    });
    
    const score = checks.filter(c => c.found).length;
    console.log(`\nScore de configuración: ${score}/${checks.length}`);
  }
}

// 4. Analizar dependencias
function analyzeDependencies() {
  console.log('\n📦 Análisis de Dependencias:');
  console.log('-'.repeat(60));
  
  const packagePath = path.join(__dirname, '..', 'package.json');
  
  if (fs.existsSync(packagePath)) {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
    
    const deps = Object.keys(pkg.dependencies || {}).length;
    const devDeps = Object.keys(pkg.devDependencies || {}).length;
    
    console.log(`Dependencias de producción: ${deps}`);
    console.log(`Dependencias de desarrollo: ${devDeps}`);
    console.log(`Total: ${deps + devDeps}`);
    
    // Verificar dependencias pesadas
    const heavyDeps = [
      'moment',
      'lodash',
      '@fortawesome/fontawesome-svg-core',
      'jquery'
    ];
    
    const foundHeavy = heavyDeps.filter(dep => pkg.dependencies && pkg.dependencies[dep]);
    
    if (foundHeavy.length > 0) {
      console.log(`\n⚠️  Dependencias pesadas encontradas: ${foundHeavy.join(', ')}`);
      console.log('   Considera usar alternativas más ligeras');
    } else {
      console.log('\n✅ No se encontraron dependencias pesadas conocidas');
    }
  }
}

// 5. Resumen y recomendaciones
function showRecommendations() {
  console.log('\n💡 Recomendaciones:');
  console.log('-'.repeat(60));
  
  console.log(`
1. 🎯 Verifica el rendimiento con Lighthouse:
   - Abre Chrome DevTools > Lighthouse
   - Ejecuta un análisis de Performance
   - Objetivo: Score > 90

2. 📊 Analiza el bundle size:
   - npm run build
   - Revisa el tamaño de los bundles generados
   - Busca oportunidades de code splitting adicional

3. 🌐 Prueba en diferentes dispositivos:
   - Móvil (4G/3G)
   - Tablet
   - Desktop

4. 🔍 Monitorea en producción:
   - Google Search Console > Core Web Vitals
   - Vercel Analytics (si usas Vercel)

5. 📈 Establece benchmarks:
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1
  `);
}

// Ejecutar análisis
try {
  analyzeImages();
  analyzeComponents();
  analyzeNextConfig();
  analyzeDependencies();
  showRecommendations();
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ Análisis completado\n');
} catch (error) {
  console.error('Error durante el análisis:', error.message);
  process.exit(1);
}

