const fs = require('fs');
const path = require('path');

// SVG 파일들을 Base64로 변환하는 함수
function svgToBase64(svgPath) {
  try {
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    // SVG 내용을 Base64로 인코딩
    const base64 = Buffer.from(svgContent).toString('base64');
    return `data:image/svg+xml;base64,${base64}`;
  } catch (error) {
    console.error(`❌ SVG 변환 실패: ${svgPath}`, error.message);
    return null;
  }
}

// README.md에서 사용할 아이콘 매핑
const iconMapping = {
  // 사용자 & 계정
  'AccountCircleIcon': 'icon_svg/mono/account-circle.svg',
  'PersonAddIcon': 'icon_svg/mono/person-add.svg',
  'PersonAdd2Icon': 'icon_svg/mono/person-add.svg',
  'PersonSolidIcon': 'icon_svg/mono/person-solid.svg',
  'GroupSolidIcon': 'icon_svg/mono/group-solid.svg',
  'DefaultUserBoxIcon': 'icon_svg/mono/account-circle.svg',
  'AdminPerson': 'icon_svg/mono/person-solid.svg',
  
  // 액션 & 버튼
  'AddIcon': 'icon_svg/mono/add-circle.svg',
  'AddBoxIcon': 'icon_svg/mono/add-circle.svg',
  'AddCircleIcon': 'icon_svg/mono/add-circle.svg',
  'DeleteIcon': 'icon_svg/mono/cancel.svg',
  'EditIcon': 'icon_svg/mono/edit.svg',
  'SearchIcon': 'icon_svg/mono/search.svg',
  'Upload': 'icon_svg/mono/upload.svg',
  'Download': 'icon_svg/mono/download.svg',
  
  // 검색 & 필터
  'FilterIcon': 'icon_svg/mono/filter.svg',
  'FilterModifiedIcon': 'icon_svg/mono/filter.svg',
  'SearchDateIcon': 'icon_svg/mono/search.svg',
  
  // 네비게이션
  'ArrowForwardIcon': 'icon_svg/mono/arrow-forward.svg',
  'ArrowLeftIcon': 'icon_svg/mono/arrow-left.svg',
  'ArrowRightIcon': 'icon_svg/mono/arrow-right.svg',
  'ChevronDownIcon': 'icon_svg/mono/chevron-down.svg',
  'ChevronUpIcon': 'icon_svg/mono/chevron-up.svg',
  'MenuIcon': 'icon_svg/mono/menu.svg',
  
  // 상태 & 피드백
  'CheckIcon': 'icon_svg/mono/check.svg',
  'CheckCircle': 'icon_svg/mono/check.svg',
  'Error': 'icon_svg/mono/popup-failed.svg',
  'Success': 'icon_svg/mono/popup-success.svg',
  'VisibilityOnIcon': 'icon_svg/mono/visibility.svg',
  'VisibilityOffIcon': 'icon_svg/mono/visibility-off.svg',
  
  // 미디어 & 카메라
  'VideoIcon': 'icon_svg/mono/video.svg',
  'CameraSettings': 'icon_svg/mono/camera.svg',
  'FrontCamera': 'icon_svg/mono/camera.svg',
  'PlayArrowIcon': 'icon_svg/mono/play.svg',
  'FullScreenIcon': 'icon_svg/mono/full-screen.svg',
  'VideoQualityIcon': 'icon_svg/mono/video-quality.svg',
  
  // 클라우드 & 네트워크
  'Cloud': 'icon_svg/mono/cloud-solid.svg',
  'CloudIcon': 'icon_svg/mono/cloud-solid.svg',
  'CloudUploadIcon': 'icon_svg/mono/cloud-upload.svg',
  'CloudSync': 'icon_svg/mono/cloud-sync.svg',
  'WifiConnected': 'icon_svg/mono/wifi.svg',
  'OfflineIcon': 'icon_svg/mono/offline.svg',
  
  // 설정 & 시스템
  'SettingsIcon': 'icon_svg/mono/settings.svg',
  'SettingSystemIcon': 'icon_svg/mono/settings.svg',
  'SettingVideoIcon': 'icon_svg/mono/settings.svg'
};

// Base64 변환 실행
function convertIcons() {
  console.log('🔄 SVG를 Base64로 변환 중...');
  
  const base64Icons = {};
  let successCount = 0;
  let failCount = 0;
  
  for (const [iconName, svgPath] of Object.entries(iconMapping)) {
    const fullPath = path.join(__dirname, '..', svgPath);
    
    if (fs.existsSync(fullPath)) {
      const base64 = svgToBase64(fullPath);
      if (base64) {
        base64Icons[iconName] = base64;
        successCount++;
      } else {
        failCount++;
      }
    } else {
      console.warn(`⚠️ SVG 파일 없음: ${svgPath}`);
      failCount++;
    }
  }
  
  console.log(`✅ 변환 완료: ${successCount}개 성공, ${failCount}개 실패`);
  
  // Base64 데이터를 파일로 저장
  const outputPath = path.join(__dirname, '..', 'dist', 'icon-base64.json');
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(base64Icons, null, 2));
  console.log(`💾 Base64 데이터 저장: ${outputPath}`);
  
  return base64Icons;
}

// 스크립트 실행
if (require.main === module) {
  convertIcons();
}

module.exports = { convertIcons, iconMapping };
