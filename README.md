# Pitta Icon Assets V2

React SVG 아이콘 컴포넌트 라이브러리

## 📦 설치

```bash
npm install @pittaofficial/pitta-icon-assets-v2
```

## 🚀 사용법

```tsx
import { 
  DashCam, 
  CloudConfig2Icon, 
  Battery100Icon,
  GPSLocationAgree,
  ChipEventFiltered 
} from '@pittaofficial/pitta-icon-assets-v2';

function App() {
  return (
    <div>
      <DashCam size={24} />
      <CloudConfig2Icon size={32} />
      <Battery100Icon size={20} />
      <GPSLocationAgree size={48} />
      <ChipEventFiltered size={16} />
    </div>
  );
}
```

## 🎨 아이콘 카테고리

### 📍 **Location (29개)**
GPS 관련 아이콘들
- `GPSLocationAgree`, `GPSManual`, `GPSParking`, `GPSJourneyStart`, `GPSJourneyEnd`
- `GPSDrowsiness`, `GPSInattentiveIcon`, `GPSImpactEvent`, `GPSRecklessDriving`
- `GPSTracking`, `GPSRouteIcon`, `GPSOverlapedStartEnd`, `GPSParkingEvent`
- `Geofence`, `GeofenceEnter`, `GeofenceExit`, `GeofencePass`, `GeofenceGPSAlert`
- `GeofenceAreaIcon`, `DirectionMarker`, `EndMarker`, `EndSelectedMarker`
- `ParkingMarker`, `ParkingSelectedMarker`, `PlaybackMarker`, `PlaybackSelectedMarker`
- `PlaceIcon`, `MapIcon`, `MapIcon2Icon`, `MapviewToggle1Icon`, `MapviewToggle2Icon`

### 🔋 **Device (7개)**
배터리 및 하드웨어 관련 아이콘들
- `Battery0Icon`, `Battery25Icon`, `Battery50Icon`, `Battery75Icon`, `Battery100Icon`, `BatteryNoInfoIcon`
- `UnpairBatteryIcon`

### ☁️ **Cloud (8개)**
클라우드 및 네트워크 관련 아이콘들
- `Cloud`, `CloudCamera`, `CloudConfig2Icon`, `CloudOff2Icon`, `CloudOutline`
- `CloudSync`, `CloudUploadIcon`, `ConnectLocallyIcon`

### 🎥 **Dashcam (12개)**
대시캠 관련 아이콘들
- `DashCam`, `DashCam2Icon`, `Dashcam3Icon`, `DashcamConnectivity`, `DashcamEmptyIcon`
- `DashcamInvalid`, `DashcamParked`, `DashcamSettings`, `DashcamLiteConnected`, `DashcamLiteDisconnected`

### 🎤 **Microphone (5개)**
마이크 관련 아이콘들
- `MicNormal`, `MicOff`, `MicOffHover`, `MicOn`, `MicStrong`, `MicWeak`

### 🔧 **System (5개)**
시스템 설정 관련 아이콘들
- `SettingSystemIcon`, `SettingVideoIcon`, `SettingRecordingMode`, `SettingPrivacyIcon`
- `SettingEventTriggersIcon`, `SettingDMSIcon`, `SettingCloudConnectivityIcon`

### 📱 **Mobile (4개)**
모바일 관련 아이콘들
- `MobileFotaIcon`, `MobileFotaNewIcon`, `DmsFotaIcon`, `DmsFotaNewIcon`
- `DmsFrontFotaIcon`, `DmsFrontFotaNewIcon`

### 🎯 **Chip (9개)**
이벤트 칩 관련 아이콘들
- `ChipEventFiltered`, `ChipEventManual`, `ChipEventDmsFiltered`
- `ChipNormalFiltered`, `ChipNormalDMSEvent`, `ChipNormlEvent`
- `ChipManualFiltered`, `ChipParkingFiltered`, `ChipParkingNormal`

### 📊 **Status (3개)**
상태 표시 아이콘들
- `Error`, `PopupSuccessIcon`, `PopupFailedIcon`

### 📡 **Communication (3개)**
통신 관련 아이콘들
- `ChatbotIcon`, `PushNotificationIcon`, `OfflineIcon`

### 🎬 **Media (5개)**
미디어 관련 아이콘들
- `VideoLengthIcon`, `PlayerNextFrame`, `PlayerPreviousFrame`
- `ThumbnailBroken`, `ThumbnailDefault`, `ThumbnailPlayback`

### 🧭 **Navigation (4개)**
네비게이션 관련 아이콘들
- `MenuIcon`, `ListIcon`, `SelectList`, `AspectRatioIcon`

### 💳 **Payment (4개)**
결제 관련 아이콘들
- `Simcard1G`, `Simcard3G`, `Simcard5G`, `MicroSD`

### 👤 **User (2개)**
사용자 관련 아이콘들
- `AdminHomeIcon`, `DefaultUserBoxIcon`

### 🔄 **Other (59개)**
기타 유틸리티 아이콘들
- `LogoFull`, `LogoFullAdmin`, `LogoFullDark`, `DMSIcon`, `FotaDocIcon`, `FotaDocNewIcon`
- `FirmwareUpdateIcon`, `MotionDetectionIcon`, `NoDashcamResultIcon`, `PowerSavingIcon`
- `SdCardResetIcon`, `SeamlessPairingIcon`, `Download`, `DownloadedMedia`
- `LiveviewRev`, `GpsTrackingRev`, `SettingsIcon`, `Error`, `ListIcon`

## 🤖 AI 활용 가이드

### 📋 **메타데이터 활용**

```javascript
// metadata.json 활용 예시
import metadata from '@pittaofficial/pitta-icon-assets-v2/dist/metadata.json';

// 카테고리별 아이콘 검색
const locationIcons = Object.values(metadata.iconInfo)
  .filter(icon => icon.category === 'location');

// 키워드로 아이콘 검색
const gpsIcons = Object.values(metadata.iconInfo)
  .filter(icon => icon.keywords.includes('gps'));

// AI 추천 시스템
function recommendIcon(description) {
  const keywords = description.toLowerCase().split(' ');
  return Object.values(metadata.iconInfo)
    .filter(icon => 
      keywords.some(keyword => 
        icon.keywords.some(k => k.includes(keyword))
      )
    )
    .sort((a, b) => b.relevance - a.relevance);
}
```

### 🔍 **검색 인덱스 활용**

```javascript
// search-index.json 활용 예시
import searchIndex from '@pittaofficial/pitta-icon-assets-v2/dist/search-index.json';

// 텍스트 기반 아이콘 검색
function searchIcons(query) {
  const normalizedQuery = query.toLowerCase();
  return searchIndex.filter(item => 
    item.searchableText.includes(normalizedQuery)
  );
}

// AI 자동 완성
function autoCompleteIconName(partialName) {
  return searchIndex
    .filter(item => item.name.toLowerCase().startsWith(partialName.toLowerCase()))
    .map(item => item.name);
}
```

### 🎨 **SVG 데이터 활용**

```javascript
// icon-svgs.json 활용 예시
import iconSvgs from '@pittaofficial/pitta-icon-assets-v2/dist/icon-svgs.json';

// SVG 데이터 직접 사용
function getIconSvg(iconName) {
  return iconSvgs[iconName]?.svg || null;
}

// 아이콘 분석
function analyzeIcon(iconName) {
  const svgData = iconSvgs[iconName];
  if (!svgData) return null;
  
  return {
    viewBox: svgData.viewBox,
    pathCount: (svgData.svg.match(/<path/g) || []).length,
    complexity: svgData.svg.length,
    colors: extractColors(svgData.svg)
  };
}
```

## 📋 Props

모든 아이콘은 다음 props를 지원합니다:

```tsx
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;           // 아이콘 크기 (기본값: 24)
  color?: string;          // 아이콘 색상
  className?: string;      // CSS 클래스
  style?: React.CSSProperties; // 인라인 스타일
}
```

## 📊 통계

- **총 아이콘 수**: 124개
- **카테고리 수**: 11개
- **검색 키워드**: 116개
- **패키지 크기**: 219.4 kB
- **압축 해제 크기**: 993.9 kB

---

**Made with ❤️ by Pitta Soft**