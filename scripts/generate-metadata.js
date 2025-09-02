#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const ICONS_DIR = './icons';

// AI가 이해할 수 있는 아이콘 카테고리 및 키워드
const ICON_CATEGORIES = {
  'user': ['account', 'profile', 'person', 'admin', 'login', 'logout'],
  'action': ['add', 'delete', 'edit', 'save', 'upload', 'download', 'search'],
  'navigation': ['arrow', 'chevron', 'menu', 'home', 'back', 'forward'],
  'status': ['check', 'error', 'warning', 'success', 'info', 'loading'],
  'media': ['video', 'image', 'audio', 'play', 'pause', 'camera'],
  'system': ['settings', 'gear', 'config', 'tools', 'firmware'],
  'communication': ['message', 'notification', 'call', 'chat', 'email'],
  'location': ['gps', 'map', 'location', 'geofence', 'marker'],
  'time': ['calendar', 'clock', 'schedule', 'timer', 'date'],
  'business': ['chart', 'report', 'analytics', 'dashboard'],
  'payment': ['card', 'payment', 'credit', 'visa', 'mastercard'],
  'social': ['facebook', 'google', 'social', 'share'],
  'device': ['battery', 'wifi', 'cellular', 'sim', 'microsd'],
  'weather': ['temperature', 'weather', 'hot', 'cold'],
  'other': ['misc', 'utility', 'general']
};

function categorizeIcon(iconName) {
  const name = iconName.toLowerCase();
  
  for (const [category, keywords] of Object.entries(ICON_CATEGORIES)) {
    if (keywords.some(keyword => name.includes(keyword))) {
      return category;
    }
  }
  
  return 'other';
}

function generateKeywords(iconName) {
  const name = iconName.toLowerCase();
  const keywords = [];
  
  // 기본 키워드 추출
  if (name.includes('icon')) keywords.push(name.replace('icon', ''));
  if (name.includes('icon')) keywords.push('icon');
  
  // 카테고리별 키워드 추가
  const category = categorizeIcon(iconName);
  keywords.push(...ICON_CATEGORIES[category]);
  
  // 특수 키워드
  if (name.includes('arrow')) keywords.push('direction', 'navigation');
  if (name.includes('check')) keywords.push('success', 'done', 'complete');
  if (name.includes('error')) keywords.push('warning', 'alert', 'problem');
  if (name.includes('add')) keywords.push('plus', 'create', 'new');
  if (name.includes('delete')) keywords.push('remove', 'trash', 'bin');
  
  return [...new Set(keywords)]; // 중복 제거
}

function generateMetadata() {
  try {
    const iconFiles = fs.readdirSync(ICONS_DIR)
      .filter(file => file.endsWith('.tsx'))
      .map(file => file.replace('.tsx', ''))
      .sort();

    const metadata = {
      totalIcons: iconFiles.length,
      categories: {},
      iconInfo: {}
    };

    iconFiles.forEach(iconName => {
      const category = categorizeIcon(iconName);
      const keywords = generateKeywords(iconName);
      
      // 카테고리별 카운트
      metadata.categories[category] = (metadata.categories[category] || 0) + 1;
      
      // 개별 아이콘 정보
      metadata.iconInfo[iconName] = {
        name: iconName,
        displayName: iconName.replace(/([A-Z])/g, ' $1').trim(),
        category,
        keywords,
        description: `${iconName} 아이콘 - ${category} 카테고리`,
        usage: `import { ${iconName} } from 'platform-icon-library';`
      };
    });

    // 메타데이터 파일 저장
    if (!fs.existsSync('./dist')) {
      fs.mkdirSync('./dist', { recursive: true });
    }
    fs.writeFileSync('./dist/metadata.json', JSON.stringify(metadata, null, 2));
    
    // AI 검색용 인덱스 생성
    const searchIndex = {
      icons: iconFiles,
      categories: Object.keys(metadata.categories),
      keywords: [...new Set(Object.values(metadata.iconInfo).flatMap(info => info.keywords))],
      searchable: iconFiles.map(icon => ({
        name: icon,
        ...metadata.iconInfo[icon]
      }))
    };
    
    fs.writeFileSync('./dist/search-index.json', JSON.stringify(searchIndex, null, 2));
    
    console.log(`✅ 메타데이터 생성 완료`);
    console.log(`📊 총 ${iconFiles.length}개 아이콘`);
    console.log(`📁 카테고리: ${Object.keys(metadata.categories).length}개`);
    console.log(`🔍 검색 키워드: ${searchIndex.keywords.length}개`);
    
    // 카테고리별 통계 출력
    console.log('\n📈 카테고리별 통계:');
    Object.entries(metadata.categories)
      .sort(([,a], [,b]) => b - a)
      .forEach(([category, count]) => {
        console.log(`  ${category}: ${count}개`);
      });

  } catch (error) {
    console.error('❌ 메타데이터 생성 중 오류:', error);
  }
}

generateMetadata();
