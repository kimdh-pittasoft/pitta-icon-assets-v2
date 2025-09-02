#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ICONS_DIR = './icons';
const OUTPUT_FILE = './dist/icon-svgs.json';

// 문제가 있는 의존성을 가진 아이콘들 제외
const EXCLUDED_ICONS = [
  'DashcamLiteConnected',
  'DashcamLiteDisconnected', 
  'DirectionMarker',
  'EndMarker',
  'EndSelectedMarker',
  'ParkingMarker',
  'ParkingSelectedMarker',
  'PlaybackMarker',
  'PlaybackSelectedMarker'
];

function extractSVGFromIcon(iconName) {
  try {
    const iconPath = path.join(ICONS_DIR, `${iconName}.tsx`);
    const content = fs.readFileSync(iconPath, 'utf8');
    
    // SVG 태그 추출
    const svgMatch = content.match(/<svg[^>]*>[\s\S]*?<\/svg>/);
    if (svgMatch) {
      let svg = svgMatch[0];
      
      // React props를 실제 색상 값으로 변환 (제거하지 않음)
      svg = svg.replace(/\{\.\.\.svgProps\}/g, '');
      svg = svg.replace(/\{\.\.\.props\}/g, '');
      svg = svg.replace(/\{htmlColor\}/g, 'currentColor');
      svg = svg.replace(/\{backgroundColor\}/g, '#2ea8e5');
      svg = svg.replace(/\{iconColor\}/g, '#fff');
      svg = svg.replace(/\{accentColor\}/g, '#0095e0');
      
      // props.속성 || "기본값" 패턴을 실제 값으로 변환 (더 정확한 패턴)
      svg = svg.replace(/\{props\.backgroundColor\|\|"#2ea8e5"\}/g, '#2ea8e5');
      svg = svg.replace(/\{props\.htmlColor\|\|"#0095e0"\}/g, 'currentColor');
      svg = svg.replace(/\{props\.iconColor\|\|"#fff"\}/g, '#fff');
      svg = svg.replace(/\{props\.accentColor\|\|"#0095e0"\}/g, '#0095e0');
      
      // props.속성 패턴을 실제 값으로 변환
      svg = svg.replace(/\{props\.backgroundColor\}/g, '#2ea8e5');
      svg = svg.replace(/\{props\.htmlColor\}/g, 'currentColor');
      svg = svg.replace(/\{props\.iconColor\}/g, '#fff');
      svg = svg.replace(/\{props\.accentColor\}/g, '#0095e0');
      
      // props?.속성 패턴을 실제 값으로 변환
      svg = svg.replace(/\{props\?\.backgroundColor\}/g, '#2ea8e5');
      svg = svg.replace(/\{props\?\.htmlColor\}/g, 'currentColor');
      svg = svg.replace(/\{props\?\.iconColor\}/g, '#fff');
      svg = svg.replace(/\{props\?\.accentColor\}/g, '#0095e0');
      
      // 기타 props 패턴들
      svg = svg.replace(/\{props\.color\|\|"[^"]*"\}/g, 'currentColor');
      svg = svg.replace(/\{props\.color\}/g, 'currentColor');
      svg = svg.replace(/\{props\?\.color\}/g, 'currentColor');
      svg = svg.replace(/\{props\?\.color\|\|"[^"]*"\}/g, 'currentColor');
      
      // stroke 관련 패턴들
      svg = svg.replace(/\{props\.stroke\|\|"[^"]*"\}/g, 'currentColor');
      svg = svg.replace(/\{props\.stroke\}/g, 'currentColor');
      svg = svg.replace(/\{props\?\.stroke\}/g, 'currentColor');
      svg = svg.replace(/\{props\?\.stroke\|\|"[^"]*"\}/g, 'currentColor');
      
      // fill 관련 패턴들
      svg = svg.replace(/\{props\.fill\|\|"[^"]*"\}/g, 'currentColor');
      svg = svg.replace(/\{props\.fill\}/g, 'currentColor');
      svg = svg.replace(/\{props\?\.fill\}/g, 'currentColor');
      svg = svg.replace(/\{props\?\.fill\|\|"[^"]*"\}/g, 'currentColor');
      
      // width, height를 48px로 설정 (메인 SVG 태그만)
      svg = svg.replace(/<svg[^>]*width="[^"]*"[^>]*>/g, (match) => {
        return match.replace(/width="[^"]*"/g, 'width="48"');
      });
      svg = svg.replace(/<svg[^>]*height="[^"]*"[^>]*>/g, (match) => {
        return match.replace(/height="[^"]*"/g, 'height="48"');
      });
      
      return svg;
    }
  } catch (error) {
    console.error(`❌ ${iconName} SVG 추출 실패:`, error.message);
  }
  
  return null;
}

function generateIconSVGs() {
  try {
    const iconFiles = fs.readdirSync(ICONS_DIR)
      .filter(file => file.endsWith('.tsx'))
      .map(file => file.replace('.tsx', ''))
      .filter(icon => !EXCLUDED_ICONS.includes(icon))
      .sort();

    const iconSVGs = {};
    let successCount = 0;
    let failCount = 0;

    iconFiles.forEach(iconName => {
      const svg = extractSVGFromIcon(iconName);
      if (svg) {
        iconSVGs[iconName] = svg;
        successCount++;
      } else {
        failCount++;
      }
    });

    // dist 폴더가 없으면 생성
    if (!fs.existsSync('./dist')) {
      fs.mkdirSync('./dist', { recursive: true });
    }

    // SVG 데이터 저장
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(iconSVGs, null, 2));
    
    console.log(`✅ SVG 추출 완료`);
    console.log(`📦 성공: ${successCount}개`);
    console.log(`❌ 실패: ${failCount}개`);
    console.log(`💾 저장: ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('❌ SVG 추출 중 오류:', error);
  }
}

generateIconSVGs();
