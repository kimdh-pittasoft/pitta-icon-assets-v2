#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ICONS_DIR = './icons';
const INDEX_FILE = './icons/index.ts';

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

function generateExports() {
  try {
    // 1. icons 폴더의 모든 .tsx 파일 스캔 (제외 목록 제외)
    const iconFiles = fs.readdirSync(ICONS_DIR)
      .filter(file => file.endsWith('.tsx'))
      .map(file => file.replace('.tsx', ''))
      .filter(icon => !EXCLUDED_ICONS.includes(icon))
      .sort(); // 알파벳 순 정렬

    // 2. 새로운 index.ts 생성
    const newExports = iconFiles.map(icon => 
      `export * from "./${icon}";`
    ).join('\n');

    // 3. 파일 작성
    fs.writeFileSync(INDEX_FILE, newExports);
    
    console.log(`✅ 총 ${iconFiles.length}개 아이콘 export 완료`);
    console.log(`🚫 제외된 아이콘: ${EXCLUDED_ICONS.length}개`);
    console.log(`📦 빌드 가능한 아이콘: ${iconFiles.length}개`);

  } catch (error) {
    console.error('❌ Export 생성 중 오류:', error);
  }
}

generateExports();
