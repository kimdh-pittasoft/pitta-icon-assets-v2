# Pitta Icon Assets V2

> 🎯 **극한 최적화된 React SVG 아이콘 라이브러리**  
> Lucide React 호환성 중심으로 재설계된 경량 아이콘 패키지

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

## 🎯 최적화 개요

### 📊 **통계**
- **원본**: 249개 아이콘 → **최종**: 124개 아이콘
- **삭제율**: 50% (125개 삭제)
- **패키지 크기**: 266.3 kB → 219.4 kB (18% 감소)
- **압축 해제 크기**: 1.2 MB → 993.9 kB (17% 감소)

### 🎨 **현재 제공 아이콘 카테고리**

#### 📍 **Location (29개)**
GPS 관련 아이콘들로 구성된 위치 기반 아이콘들
- `GPSLocationAgree`, `GPSManual`, `GPSParking`, `GPSJourneyStart`, `GPSJourneyEnd`
- `GPSDrowsiness`, `GPSInattentiveIcon`, `GPSImpactEvent`, `GPSRecklessDriving`
- `GPSTracking`, `GPSRouteIcon`, `GPSOverlapedStartEnd`, `GPSParkingEvent`
- `Geofence`, `GeofenceEnter`, `GeofenceExit`, `GeofencePass`, `GeofenceGPSAlert`
- `GeofenceAreaIcon`, `DirectionMarker`, `EndMarker`, `EndSelectedMarker`
- `ParkingMarker`, `ParkingSelectedMarker`, `PlaybackMarker`, `PlaybackSelectedMarker`
- `PlaceIcon`, `MapIcon`, `MapIcon2Icon`, `MapviewToggle1Icon`, `MapviewToggle2Icon`

#### 🔋 **Device (7개)**
배터리 및 하드웨어 관련 아이콘들
- `Battery0Icon`, `Battery25Icon`, `Battery50Icon`, `Battery75Icon`, `Battery100Icon`, `BatteryNoInfoIcon`
- `UnpairBatteryIcon`

#### ☁️ **Cloud (8개)**
클라우드 및 네트워크 관련 아이콘들
- `Cloud`, `CloudCamera`, `CloudConfig2Icon`, `CloudOff2Icon`, `CloudOutline`
- `CloudSync`, `CloudUploadIcon`, `ConnectLocallyIcon`

#### 🎥 **Dashcam (12개)**
대시캠 관련 아이콘들
- `DashCam`, `DashCam2Icon`, `Dashcam3Icon`, `DashcamConnectivity`, `DashcamEmptyIcon`
- `DashcamInvalid`, `DashcamParked`, `DashcamSettings`, `DashcamLiteConnected`, `DashcamLiteDisconnected`

#### 🎤 **Microphone (5개)**
마이크 관련 아이콘들
- `MicNormal`, `MicOff`, `MicOffHover`, `MicOn`, `MicStrong`, `MicWeak`

#### 🔧 **System (5개)**
시스템 설정 관련 아이콘들
- `SettingSystemIcon`, `SettingVideoIcon`, `SettingRecordingMode`, `SettingPrivacyIcon`
- `SettingEventTriggersIcon`, `SettingDMSIcon`, `SettingCloudConnectivityIcon`

#### 📱 **Mobile (4개)**
모바일 관련 아이콘들
- `MobileFotaIcon`, `MobileFotaNewIcon`, `DmsFotaIcon`, `DmsFotaNewIcon`
- `DmsFrontFotaIcon`, `DmsFrontFotaNewIcon`

#### 🎯 **Chip (9개)**
이벤트 칩 관련 아이콘들
- `ChipEventFiltered`, `ChipEventManual`, `ChipEventDmsFiltered`
- `ChipNormalFiltered`, `ChipNormalDMSEvent`, `ChipNormlEvent`
- `ChipManualFiltered`, `ChipParkingFiltered`, `ChipParkingNormal`

#### 📊 **Status (3개)**
상태 표시 아이콘들
- `Error`, `PopupSuccessIcon`, `PopupFailedIcon`

#### 📡 **Communication (3개)**
통신 관련 아이콘들
- `ChatbotIcon`, `PushNotificationIcon`, `OfflineIcon`

#### 🎬 **Media (5개)**
미디어 관련 아이콘들
- `VideoLengthIcon`, `PlayerNextFrame`, `PlayerPreviousFrame`
- `ThumbnailBroken`, `ThumbnailDefault`, `ThumbnailPlayback`

#### 🧭 **Navigation (4개)**
네비게이션 관련 아이콘들
- `MenuIcon`, `ListIcon`, `SelectList`, `AspectRatioIcon`

#### 💳 **Payment (4개)**
결제 관련 아이콘들
- `Simcard1G`, `Simcard3G`, `Simcard5G`, `MicroSD`

#### 👤 **User (2개)**
사용자 관련 아이콘들
- `AdminHomeIcon`, `DefaultUserBoxIcon`

#### 🔄 **Other (59개)**
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

## 🚀 마이그레이션 가이드

### V1 → V2 업그레이드

```bash
# 기존 패키지 제거
npm uninstall @pittaofficial/pitta-icon-assets

# 새 패키지 설치
npm install @pittaofficial/pitta-icon-assets-v2
```

### 🔄 **코드 변경사항**

```tsx
// V1 (기존)
import { Visibility, AddCircle, Search } from '@pittaofficial/pitta-icon-assets';

// V2 (새로운 패키지)
import { 
  // 삭제된 아이콘들은 Lucide React로 대체
  Eye, // Visibility 대신
  PlusCircle, // AddCircle 대신
  Search // Lucide React의 Search 사용
} from 'lucide-react';

// 유지되는 아이콘들
import { 
  DashCam, 
  CloudConfig2Icon, 
  Battery100Icon 
} from '@pittaofficial/pitta-icon-assets-v2';
```

### 📋 **삭제된 아이콘 대체 가이드**

| 삭제된 아이콘 | Lucide React 대체 | 용도 |
|--------------|------------------|------|
| `Visibility` | `Eye` | 표시/숨김 |
| `AddCircle` | `PlusCircle` | 추가 |
| `Search` | `Search` | 검색 |
| `Filter` | `Filter` | 필터 |
| `Calendar` | `Calendar` | 달력 |
| `ChevronUp` | `ChevronUp` | 위 화살표 |
| `ChevronDown` | `ChevronDown` | 아래 화살표 |
| `Check` | `Check` | 확인 |
| `Info` | `Info` | 정보 |
| `Help` | `HelpCircle` | 도움말 |

## 📊 현재 통계

- **총 아이콘 수**: 124개
- **카테고리 수**: 11개
- **검색 키워드**: 116개
- **패키지 크기**: 219.4 kB
- **압축 해제 크기**: 993.9 kB

### 📁 **파일 구조**

```
pitta-icon-assets-v2/
├── icons/                    # 아이콘 소스 파일들 (124개)
│   ├── index.ts             # 메인 export 파일
│   ├── GPSLocationAgree.tsx # GPS 위치 동의 아이콘
│   ├── DashCam.tsx          # 대시캠 아이콘
│   └── ...                  # 기타 아이콘들
├── dist/                    # 빌드된 파일들
│   ├── index.js             # CommonJS 번들
│   ├── index.esm.js         # ES Module 번들
│   ├── index.d.ts           # TypeScript 선언
│   ├── metadata.json        # 아이콘 메타데이터
│   ├── search-index.json    # 검색 인덱스
│   └── icon-svgs.json       # SVG 데이터
├── scripts/                 # 빌드 스크립트
├── package.json             # 패키지 설정
└── README.md               # 문서
```

## 🛠️ 개발

```bash
# 의존성 설치
npm install

# 개발 빌드
npm run build

# 메타데이터 생성
npm run generate-metadata

# 검색 인덱스 생성
npm run generate-search-index

# SVG 추출
npm run extract-svgs
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

## 🔗 링크

- **npm**: [@pittaofficial/pitta-icon-assets-v2](https://www.npmjs.com/package/@pittaofficial/pitta-icon-assets-v2)
- **GitHub**: [pitta-icon-assets-v2](https://github.com/kimdh-pittasoft/pitta-icon-assets-v2)
- **Lucide React**: [lucide-react](https://lucide.dev/)

## 🎯 핵심 메시지

> **"필요한 것만, 최적화된 것만"**  
> Pitta Icon Assets V2는 Lucide React와의 호환성을 최우선으로 하여 중복되는 아이콘들을 제거하고,  
> Pitta만의 고유한 아이콘들만을 제공하는 경량화된 라이브러리입니다.

---

**Made with ❤️ by Pitta Soft**
