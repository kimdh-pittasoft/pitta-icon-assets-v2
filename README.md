# Platform Icon Library

플랫폼 아이콘 라이브러리 - React 아이콘 컴포넌트 모음입니다.

## 📦 설치

```bash
npm install platform-icon-library
```

## 🚀 사용법

### 기본 사용
```tsx
import { VisibilityOnIcon, SearchIcon, AddIcon } from 'platform-icon-library';

function App() {
  return (
    <div>
      <VisibilityOnIcon htmlColor="#007bff" />
      <SearchIcon htmlColor="#28a745" />
      <AddIcon backgroundColor="#ff0000" htmlColor="#ffffff" />
    </div>
  );
}
```

### 색상 커스터마이징
```tsx
// 기본 색상
<AddIcon htmlColor="#0095e0" />

// 배경색과 아이콘 색상 분리
<AddBoxIcon backgroundColor="#0095e0" iconColor="#ffffff" />

// 액센트 색상
<CheckCircle accentColor="#28a745" />
```

## 🎨 아이콘 카테고리

### 👤 사용자 & 계정
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/account-circle.svg" width="20" height="20" /> `AccountCircleIcon` - 사용자 프로필
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/person-add.svg" width="20" height="20" /> `PersonAddIcon` - 사용자 추가
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/person-solid.svg" width="20" height="20" /> `AdminPerson` - 관리자
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/person-solid.svg" width="20" height="20" /> `DefaultUserBoxIcon` - 기본 사용자 박스

### ➕ 액션 & 버튼
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/add.svg" width="20" height="20" /> `AddIcon` - 추가 (플러스)
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/add.svg" width="20" height="20" /> `AddBoxIcon` - 박스형 추가 버튼
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/add-circle.svg" width="20" height="20" /> `AddCircleIcon` - 원형 추가 버튼
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/delete.svg" width="20" height="20" /> `DeleteIcon` - 삭제
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/edit.svg" width="20" height="20" /> `EditIcon` - 편집
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/search.svg" width="20" height="20" /> `SearchIcon` - 검색
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/upload.svg" width="20" height="20" /> `Upload` - 업로드
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/download.svg" width="20" height="20" /> `Download` - 다운로드

### 🔍 검색 & 필터
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/search.svg" width="20" height="20" /> `SearchIcon` - 검색
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/filter.svg" width="20" height="20" /> `FilterIcon` - 필터
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/filter.svg" width="20" height="20" /> `FilterModifiedIcon` - 수정된 필터
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/search.svg" width="20" height="20" /> `SearchDateIcon` - 날짜 검색

### 📱 네비게이션
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/arrow-forward.svg" width="20" height="20" /> `ArrowForwardIcon` - 앞으로 화살표
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/arrow-left.svg" width="20" height="20" /> `ArrowLeftIcon` - 왼쪽 화살표
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/arrow-right.svg" width="20" height="20" /> `ArrowRightIcon` - 오른쪽 화살표
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/chevron-down.svg" width="20" height="20" /> `ChevronDownIcon` - 아래쪽 화살표
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/chevron-up.svg" width="20" height="20" /> `ChevronUpIcon` - 위쪽 화살표
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/menu.svg" width="20" height="20" /> `MenuIcon` - 메뉴

### ✅ 상태 & 피드백
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/check.svg" width="20" height="20" /> `CheckIcon` - 체크
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/check.svg" width="20" height="20" /> `CheckCircle` - 체크 원형
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/error.svg" width="20" height="20" /> `Error` - 오류
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/success.svg" width="20" height="20" /> `Success` - 성공
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/warning.svg" width="20" height="20" /> `WarningIcon` - 경고
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/visibility.svg" width="20" height="20" /> `VisibilityOnIcon` - 보임
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/visibility-off.svg" width="20" height="20" /> `VisibilityOffIcon` - 숨김

### 🎥 미디어 & 카메라
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/video.svg" width="20" height="20" /> `VideoIcon` - 비디오
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/camera.svg" width="20" height="20" /> `CameraSettings` - 카메라 설정
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/camera.svg" width="20" height="20" /> `FrontCamera` - 전면 카메라
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/play.svg" width="20" height="20" /> `PlayArrowIcon` - 재생
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/full-screen.svg" width="20" height="20" /> `FullScreenIcon` - 전체화면
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/video-quality.svg" width="20" height="20" /> `VideoQualityIcon` - 비디오 품질

### ☁️ 클라우드 & 네트워크
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/cloud.svg" width="20" height="20" /> `Cloud` - 클라우드
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/cloud.svg" width="20" height="20" /> `CloudIcon` - 클라우드 아이콘
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/cloud-upload.svg" width="20" height="20" /> `CloudUploadIcon` - 클라우드 업로드
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/cloud-sync.svg" width="20" height="20" /> `CloudSync` - 클라우드 동기화
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/wifi.svg" width="20" height="20" /> `WifiConnected` - WiFi 연결
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/offline.svg" width="20" height="20" /> `OfflineIcon` - 오프라인

### ⚙️ 설정 & 시스템
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/settings.svg" width="20" height="20" /> `SettingsIcon` - 설정
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/settings.svg" width="20" height="20" /> `SettingSystemIcon` - 시스템 설정
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/settings.svg" width="20" height="20" /> `SettingVideoIcon` - 비디오 설정
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/settings.svg" width="20" height="20" /> `SettingPrivacyIcon` - 개인정보 설정
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/settings.svg" width="20" height="20" /> `SettingDMSIcon` - DMS 설정

### 📊 대시보드 & 차트
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/chart.svg" width="20" height="20" /> `AdminChart` - 관리자 차트
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/report.svg" width="20" height="20" /> `Report` - 리포트
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/stat 1.svg" width="20" height="20" /> `Stat1Icon` - 통계
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/speed.svg" width="20" height="20" /> `SpeedIcon` - 속도
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/temperature-hot.svg" width="20" height="20" /> `TemperatureHotIcon` - 온도

### 🔋 배터리 & 전원
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/battery-100.svg" width="20" height="20" /> `Battery100Icon` - 배터리 100%
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/battery-75.svg" width="20" height="20" /> `Battery75Icon` - 배터리 75%
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/battery-50.svg" width="20" height="20" /> `Battery50Icon` - 배터리 50%
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/battery-25.svg" width="20" height="20" /> `Battery25Icon` - 배터리 25%
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/battery-0.svg" width="20" height="20" /> `Battery0Icon` - 배터리 0%
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/power-saving.svg" width="20" height="20" /> `PowerSavingIcon` - 절전 모드

### 🎤 마이크 & 오디오
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/mic.svg" width="20" height="20" /> `MicNormal` - 마이크 일반
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/mic-on.svg" width="20" height="20" /> `MicOn` - 마이크 켜짐
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/mic-off.svg" width="20" height="20" /> `MicOff` - 마이크 꺼짐
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/mic-strong.svg" width="20" height="20" /> `MicStrong` - 마이크 강함
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/mic-weak.svg" width="20" height="20" /> `MicWeak` - 마이크 약함

### 📍 위치 & 지도
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/map.svg" width="20" height="20" /> `MapIcon` - 지도
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/place.svg" width="20" height="20" /> `PlaceIcon` - 장소
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/near-me.svg" width="20" height="20" /> `NearMeIcon` - 내 주변
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/geofence.svg" width="20" height="20" /> `Geofence` - 지오펜스
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/gps-tracking.svg" width="20" height="20" /> `GPSTracking` - GPS 추적

### 🚗 대시캠 & 차량
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/dashcam.svg" width="20" height="20" /> `DashCam` - 대시캠
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/dashcam-3.svg" width="20" height="20" /> `Dashcam3Icon` - 대시캠 3
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/dashcam-settings.svg" width="20" height="20" /> `DashcamSettings` - 대시캠 설정
- <img src="https://raw.githubusercontent.com/kimdh-pittasoft/platform-i/main/icon_svg/mono/dashcam-connectivity.svg" width="20" height="20" /> `DashcamConnectivity` - 대시캠 연결

## 🔧 Props

모든 아이콘은 다음 props를 받습니다:

### 기본 Props
- `htmlColor`: 아이콘 색상 (기본값: #888)
- 기타 SVG 속성들 (width, height, className 등)

### 특수 Props (일부 아이콘)
- `backgroundColor`: 배경 색상 (AddBoxIcon, DefaultUserBoxIcon 등)
- `iconColor`: 아이콘 색상 (AddBoxIcon, DefaultUserBoxIcon 등)
- `accentColor`: 액센트 색상 (CheckCircle 등)

## 📊 아이콘 통계

- **총 아이콘 수**: 249개 (빌드 가능)
- **제외된 아이콘**: 9개 (의존성 문제)
- **카테고리**: 15개
- **검색 키워드**: 226개

## 🔗 링크

- **GitHub**: [https://github.com/kimdh-pittasoft/platform-i](https://github.com/kimdh-pittasoft/platform-i)
- **아이콘 갤러리**: [https://kimdh-pittasoft.github.io/platform-i/](https://kimdh-pittasoft.github.io/platform-i/)
- **NPM 패키지**: [https://www.npmjs.com/package/platform-icon-library](https://www.npmjs.com/package/platform-icon-library)

## 🛠️ 개발

```bash
# 의존성 설치
npm install

# 모든 아이콘 export 생성
npm run generate-exports

# AI 메타데이터 생성
npm run generate-metadata

# 빌드
npm run build

# 개발 모드
npm run dev
```

## 📁 파일 구조

```
dist/
├── index.js              # CommonJS 번들
├── index.esm.js          # ESM 번들
├── index.d.ts            # TypeScript 선언
├── [IconName].d.ts       # 개별 아이콘 타입 선언
└── [IconName].d.ts.map   # 소스맵
```

## 🤖 AI 사용 가이드

AI가 이 라이브러리를 사용할 때:

1. **의도 파악**: "사용자 프로필 아이콘이 필요해요" → `AccountCircleIcon`
2. **기능 기반**: "검색 기능을 위한 아이콘" → `SearchIcon`
3. **카테고리 기반**: "네비게이션 화살표" → `ArrowForwardIcon`
4. **동의어 활용**: "플러스", "추가", "생성" → `AddIcon`

### AI 검색 키워드 예시
- `user`, `account`, `profile` → 사용자 관련 아이콘
- `add`, `plus`, `create` → 추가/생성 아이콘
- `search`, `find`, `magnifier` → 검색 아이콘
- `arrow`, `direction`, `navigation` → 방향 아이콘
- `check`, `success`, `done` → 성공/완료 아이콘
- `video`, `camera`, `media` → 미디어 아이콘
- `settings`, `config`, `gear` → 설정 아이콘
- `cloud`, `upload`, `sync` → 클라우드 아이콘

## �� 라이선스

MIT License
