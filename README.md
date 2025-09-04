# Pitta Icon Assets V2

**극도로 최적화된 React SVG 아이콘 컴포넌트 라이브러리**  
Lucide React와 완벽 호환되도록 설계된 핵심 아이콘만 선별한 경량화 버전입니다.

## 🚀 설치

```bash
npm install @pittaofficial/pitta-icon-assets-v2
```

## 📦 사용법

```jsx
import { DashCam, CloudConfig2Icon, Battery100Icon } from '@pittaofficial/pitta-icon-assets-v2';

function App() {
  return (
    <div>
      <DashCam htmlColor="#0095e0" />
      <CloudConfig2Icon htmlColor="#333" />
      <Battery100Icon htmlColor="#28a745" />
    </div>
  );
}
```

## 🎯 최적화 개요

### 📊 최적화 결과
- **원본**: 249개 아이콘 → **최종**: 94개 아이콘
- **삭제율**: 62% (155개 아이콘 제거)
- **패키지 크기**: 266.3 kB → **219.4 kB** (18% 감소)
- **압축 해제 크기**: 1.2 MB → **993.9 kB** (17% 감소)

### 🎨 삭제된 아이콘 카테고리
다음 카테고리의 아이콘들은 Lucide React로 대체 가능하여 제거되었습니다:

#### 🔄 **기본 UI 요소** (Lucide React 대체)
- `Visibility`, `VisibilityOff` → `Eye`, `EyeOff`
- `NearMe` → `MapPin`
- `ElectricBolt` → `Zap`
- `TemperatureGreen/Cold/Hot` → `Thermometer`
- `ChevronUp/Down/Back/Forward` → `ChevronUp/Down/Left/Right`
- `Filter`, `FilterModified` → `Filter`
- `AddCircle`, `AddBox` → `PlusCircle`, `Plus`
- `AllInclusive`, `Infinity` → `Infinity`
- `Back`, `Close` → `ArrowLeft`, `X`
- `Call` → `Phone`
- `Report` → `FileText`
- `Inventory` → `Package`
- `Sim` → `SimCard`
- `RadioChecked/Unchecked` → `Radio`
- `Timelapse` → `Clock`
- `DataRange` → `Calendar`
- `Play` → `Play`
- `Help`, `Info` → `HelpCircle`, `Info`
- `Refresh` → `RefreshCw`
- `Speed` → `Gauge`
- `Schedule` → `Calendar`
- `Loupe` → `Search`
- `PersonAdd` → `UserPlus`
- `Undo`, `Redo` → `Undo`, `Redo`
- `Flip` → `RotateCcw`
- `FullScreen`, `FullScreenExit` → `Maximize`, `Minimize`
- `AssignmentSolid` → `FileText`
- `Layers` → `Layers`
- `PersonSolid` → `User`
- `GroupSolid` → `Users`
- `Search` → `Search`
- `Info` → `Info`
- `AccountCircle` → `UserCircle`
- `Inbox` → `Inbox`

#### 📅 **날짜/시간 관련**
- `Calendar`, `CalendarModified`
- `CollapseUp/Down`, `ExpandUp/Down`

#### 🔧 **관리자 도구**
- `AdminChart`, `AdminDefaultProfile`, `AdminLogout`, `AdminPWChange`, `AdminPerson`
- `ElectricBoltOff`, `DashcamPublic`, `AddIcon`

#### 🎥 **미디어 관련**
- `VideoIcon`, `VideoSegmentIcon`, `ResolutionIcon`, `RotationIcon`
- `MotionIcon`, `MoreHoriz/VertIcon`

#### 📡 **네트워크/통신**
- `WifiConnected`, `WifiOn`, `LanguageIcon`

#### 🗺️ **지도/위치**
- `GeofenceCircle`, `GeofencePolygon`, `GeofencePolyline`, `GeofenceRectangle`
- `PolyLineIcon`, `RectangleIcon`

#### 💳 **결제/브랜드**
- `AmexCard`, `AppStoreBadge`, `DinersCard`, `DiscoverCard`
- `Facebook`, `Google`, `GooglePlay`, `GooglePlayBadge`
- `JcbCard`, `MasterCard`, `UnionPayCard`, `VisaCard`
- `MacOS`, `Windows`

#### 🎨 **UI/UX 요소**
- `CheckIcon`, `CheckCircle`, `CircleIcon`
- `EditIcon`, `CameraSettings`, `CameraCountHighlight`
- `CellularLite/Strong/Weak`
- `LogoOnly`, `BlackvueLogoOutlined`

#### 📁 **파일/업로드**
- `FileDownload`, `UploadFileIcon`, `UploadVideoIcon`
- `VideoQualityIcon`, `MoveToInBox`

#### 🔔 **알림/상태**
- `NotificationPlaybackIcon`, `NotificationsIcon`, `PlaybackRev`
- `Stat1Icon`, `StatMinus1Icon`, `Success`, `TaskAlt`

## 🎨 현재 제공 아이콘 카테고리

### 🚗 **대시캠 & 차량 (핵심)**
- `DashCam` - 대시캠 메인
- `Dashcam3Icon` - 대시캠 3세대
- `DashcamSettings` - 대시캠 설정
- `DashcamConnectivity` - 대시캠 연결
- `DashcamEmptyIcon` - 빈 대시캠
- `DashcamInvalid` - 무효한 대시캠
- `DashcamLiteConnected` - 라이트 연결됨
- `DashcamLiteDisconnected` - 라이트 연결 해제
- `DashcamParked` - 주차된 대시캠
- `DashcamPublic` - 공개 대시캠

### 🔋 **배터리 & 전원**
- `Battery100Icon` - 배터리 100%
- `Battery75Icon` - 배터리 75%
- `Battery50Icon` - 배터리 50%
- `Battery25Icon` - 배터리 25%
- `Battery0Icon` - 배터리 0%
- `BatteryNoInfoIcon` - 배터리 정보 없음
- `PowerSavingIcon` - 절전 모드
- `UnpairBatteryIcon` - 배터리 페어링 해제

### ☁️ **클라우드 & 네트워크**
- `Cloud` - 클라우드 기본
- `CloudCamera` - 클라우드 카메라
- `CloudConfig2Icon` - 클라우드 설정 2
- `CloudOff2Icon` - 클라우드 오프 2
- `CloudOutline` - 클라우드 아웃라인
- `CloudSync` - 클라우드 동기화
- `CloudUploadIcon` - 클라우드 업로드

### 🎤 **마이크 & 오디오**
- `MicNormal` - 마이크 일반
- `MicOn` - 마이크 켜짐
- `MicOff` - 마이크 꺼짐
- `MicStrong` - 마이크 강함
- `MicWeak` - 마이크 약함
- `MicOffHover` - 마이크 오프 호버

### 📍 **위치 & GPS**
- `MapIcon` - 지도
- `MapIcon2Icon` - 지도 2
- `PlaceIcon` - 장소
- `Geofence` - 지오펜스 기본
- `GeofenceAreaIcon` - 지오펜스 영역
- `GeofenceEnter` - 지오펜스 진입
- `GeofenceExit` - 지오펜스 출구
- `GeofencePass` - 지오펜스 통과
- `GPSTracking` - GPS 추적
- `GPSRouteIcon` - GPS 경로
- `GpsTrackingRev` - GPS 추적 역방향

### 🎥 **미디어 & 재생**
- `VideoLengthIcon` - 비디오 길이
- `ThumbnailBroken` - 썸네일 깨짐
- `ThumbnailDefault` - 기본 썸네일
- `ThumbnailPlayback` - 재생 썸네일
- `PlayerNextFrame` - 다음 프레임
- `PlayerPreviousFrame` - 이전 프레임
- `LiveviewRev` - 라이브뷰 역방향

### ⚙️ **설정 & 시스템**
- `SettingsIcon` - 설정
- `SettingSystemIcon` - 시스템 설정
- `SettingVideoIcon` - 비디오 설정
- `SettingPrivacyIcon` - 개인정보 설정
- `SettingRecordingMode` - 녹화 모드 설정
- `SettingEventTriggersIcon` - 이벤트 트리거 설정
- `SettingDMSIcon` - DMS 설정
- `SettingCloudConnectivityIcon` - 클라우드 연결 설정
- `FirmwareUpdateIcon` - 펌웨어 업데이트
- `SdCardResetIcon` - SD카드 리셋

### 🔧 **DMS & FOTA**
- `DMSIcon` - DMS 기본
- `DmsFotaIcon` - DMS FOTA
- `DmsFotaNewIcon` - DMS FOTA 신규
- `DmsFrontFotaIcon` - DMS 프론트 FOTA
- `DmsFrontFotaNewIcon` - DMS 프론트 FOTA 신규
- `MobileFotaIcon` - 모바일 FOTA
- `MobileFotaNewIcon` - 모바일 FOTA 신규
- `FotaDocIcon` - FOTA 문서
- `FotaDocNewIcon` - FOTA 문서 신규

### 📱 **통신 & 연결**
- `ChatbotIcon` - 챗봇
- `ConnectLocallyIcon` - 로컬 연결
- `SeamlessPairingIcon` - 원활한 페어링
- `PushNotificationIcon` - 푸시 알림
- `Simcard1G` - SIM카드 1G
- `Simcard3G` - SIM카드 3G
- `Simcard5G` - SIM카드 5G
- `SimOutlineIcon` - SIM 아웃라인

### 🎯 **상태 & 피드백**
- `Error` - 오류
- `PopupFailedIcon` - 팝업 실패
- `PopupSuccessIcon` - 팝업 성공
- `NoDashcamResultIcon` - 대시캠 결과 없음
- `NoItemIcon` - 항목 없음
- `OfflineIcon` - 오프라인

### 🏢 **로고 & 브랜드**
- `LogoFull` - 전체 로고
- `LogoFullAdmin` - 관리자 전체 로고
- `LogoFullDark` - 다크 전체 로고

### 📊 **기타**
- `AspectRatioIcon` - 종횡비
- `Download` - 다운로드
- `DownloadedMedia` - 다운로드된 미디어
- `ListIcon` - 목록
- `MenuIcon` - 메뉴
- `MicroSD` - 마이크로SD
- `SelectList` - 선택 목록

## 🤖 AI 활용 가이드

### 📋 **메타데이터 활용**
```javascript
import metadata from '@pittaofficial/pitta-icon-assets-v2/dist/metadata.json';

// 카테고리별 아이콘 검색
const batteryIcons = metadata.icons.filter(icon => 
  icon.categories.includes('battery')
);

// 키워드로 아이콘 검색
const searchIcons = metadata.icons.filter(icon => 
  icon.keywords.some(keyword => 
    keyword.toLowerCase().includes('battery')
  )
);
```

### 🔍 **검색 인덱스 활용**
```javascript
import searchIndex from '@pittaofficial/pitta-icon-assets-v2/dist/search-index.json';

// AI가 사용자 의도에 맞는 아이콘 추천
const recommendIcon = (userIntent) => {
  // 검색 인덱스를 활용한 추천 로직
  return searchIndex.find(icon => 
    icon.semanticTags.includes(userIntent)
  );
};
```

### 🎯 **카테고리별 활용**
```javascript
// 대시캠 관련 기능
const dashcamIcons = ['DashCam', 'DashcamSettings', 'DashcamConnectivity'];

// 배터리 상태 표시
const batteryIcons = ['Battery100Icon', 'Battery75Icon', 'Battery50Icon', 'Battery25Icon', 'Battery0Icon'];

// GPS 추적 기능
const gpsIcons = ['GPSTracking', 'GPSRouteIcon', 'Geofence'];
```

## 🔧 Props

### 기본 Props
```jsx
<DashCam 
  htmlColor="#0095e0"     // 아이콘 색상
  width={24}              // 너비
  height={24}             // 높이
  className="my-icon"      // CSS 클래스
/>
```

### 특수 Props (일부 아이콘)
```jsx
// 배경색과 아이콘 색상 분리
<DefaultUserBoxIcon 
  backgroundColor="#0095e0" 
  iconColor="#ffffff" 
/>

// 액센트 색상
<CheckCircle accentColor="#28a745" />
```

## 📊 현재 통계

- **총 아이콘 수**: 94개 (빌드 가능)
- **제외된 아이콘**: 9개 (의존성 문제)
- **카테고리**: 11개
- **검색 키워드**: 115개

### 📈 카테고리별 통계
- **other**: 50개 (53%)
- **location**: 17개 (18%)
- **device**: 7개 (7%)
- **media**: 5개 (5%)
- **system**: 5개 (5%)
- **navigation**: 4개 (4%)
- **payment**: 4개 (4%)
- **status**: 3개 (3%)
- **communication**: 3개 (3%)
- **action**: 3개 (3%)
- **user**: 2개 (2%)

## 🚀 마이그레이션 가이드

### V1에서 V2로 업그레이드
```bash
# 기존 패키지 제거
npm uninstall @pittaofficial/pitta-icon-assets

# V2 설치
npm install @pittaofficial/pitta-icon-assets-v2
```

### 삭제된 아이콘 대체
```jsx
// V1 (삭제됨)
import { VisibilityIcon } from '@pittaofficial/pitta-icon-assets';

// V2 (Lucide React 사용 권장)
import { Eye } from 'lucide-react';

// 또는 유사한 아이콘 사용
import { VisibilityOnIcon } from '@pittaofficial/pitta-icon-assets-v2';
```

## 🛠️ 개발

```bash
# 의존성 설치
npm install

# 아이콘 export 생성
npm run generate-exports

# 메타데이터 생성
npm run generate-metadata

# SVG 추출
npm run extract-svgs

# 빌드
npm run build

# 배포
npm publish
```

## 📁 파일 구조

```
dist/
├── index.js              # CommonJS 번들
├── index.esm.js          # ESM 번들
├── index.d.ts            # TypeScript 타입 정의
├── metadata.json         # AI 친화적 메타데이터
├── search-index.json     # 검색 인덱스
└── icon-svgs.json       # SVG 데이터
```

## 🔗 링크

- **NPM 패키지**: [https://www.npmjs.com/package/@pittaofficial/pitta-icon-assets-v2](https://www.npmjs.com/package/@pittaofficial/pitta-icon-assets-v2)
- **GitHub**: [https://github.com/kimdh-pittasoft/pitta-icon-assets-v2](https://github.com/kimdh-pittasoft/pitta-icon-assets-v2)

## 📄 라이선스

MIT License

---

## 🎯 **핵심 메시지**

**Pitta Icon Assets V2**는 Lucide React와의 완벽한 호환성을 위해 **극도로 최적화**된 아이콘 라이브러리입니다. 

- ✅ **62% 경량화**: 249개 → 94개 아이콘
- ✅ **Lucide React 호환**: 중복 아이콘 제거
- ✅ **AI 친화적**: 메타데이터와 검색 인덱스 제공
- ✅ **핵심 기능 집중**: 대시캠, 배터리, GPS 등 핵심 아이콘만 유지

**삭제된 아이콘들은 모두 Lucide React에서 제공하는 동일한 기능의 아이콘으로 대체 가능합니다.**
