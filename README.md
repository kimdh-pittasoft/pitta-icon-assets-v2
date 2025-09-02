# Pitta Icon Assets

249개의 React SVG 아이콘 컴포넌트 라이브러리입니다. AI 친화적 카테고리 분류와 메타데이터를 제공합니다.

## 🚀 설치

```bash
npm install @pittaofficial/pitta-icon-assets
```

## 📦 사용법

```jsx
import { AddIcon, SearchIcon, SettingsIcon } from '@pittaofficial/pitta-icon-assets';

function App() {
  return (
    <div>
      <AddIcon htmlColor="#0095e0" />
      <SearchIcon htmlColor="#333" />
      <SettingsIcon htmlColor="#666" />
    </div>
  );
}
```

## 🎨 색상 커스터마이징

```jsx
// 기본 색상
<AddIcon htmlColor="#0095e0" />

// 배경색과 아이콘 색상 분리
<AddBoxIcon backgroundColor="#0095e0" iconColor="#ffffff" />

// 액센트 색상
<CheckCircle accentColor="#28a745" />
```

## 🎨 아이콘 카테고리

### 👤 사용자 & 계정
- `AccountCircleIcon` - 사용자 프로필
- `PersonAddIcon` - 사용자 추가
- `PersonAdd2Icon` - 사용자 추가 (대안)
- `PersonSolidIcon` - 사용자 (솔리드)
- `GroupSolidIcon` - 그룹 (솔리드)
- `DefaultUserBoxIcon` - 기본 사용자 박스
- `AdminPerson` - 관리자

### ➕ 액션 & 버튼
- `AddIcon` - 추가 (플러스)
- `AddBoxIcon` - 박스형 추가 버튼
- `AddCircleIcon` - 원형 추가 버튼
- `DeleteIcon` - 삭제
- `SearchIcon` - 검색

### 🔍 검색 & 필터
- `SearchIcon` - 검색
- `FilterIcon` - 필터
- `FilterModifiedIcon` - 수정된 필터
- `SearchDateIcon` - 날짜 검색

### 📱 네비게이션
- `ArrowForwardIcon` - 앞으로 화살표
- `ArrowLeftIcon` - 왼쪽 화살표
- `ArrowRightIcon` - 오른쪽 화살표
- `ChevronDownIcon` - 아래쪽 화살표
- `ChevronUpIcon` - 위쪽 화살표

### ✅ 상태 & 피드백
- `CheckIcon` - 체크
- `CheckCircle` - 체크 원형
- `Error` - 오류
- `Success` - 성공
- `VisibilityOnIcon` - 보임
- `VisibilityOffIcon` - 숨김

### 🎥 미디어 & 카메라
- `PlayArrowIcon` - 재생
- `FullScreenIcon` - 전체화면

### ☁️ 클라우드 & 네트워크
- `Cloud` - 클라우드
- `CloudIcon` - 클라우드 아이콘
- `CloudUploadIcon` - 클라우드 업로드

### ⚙️ 설정 & 시스템
- `SettingsIcon` - 설정
- `SettingSystemIcon` - 시스템 설정
- `SettingVideoIcon` - 비디오 설정

### 📊 대시보드 & 차트
- `AdminChart` - 관리자 차트
- `Report` - 리포트
- `Stat1Icon` - 통계
- `SpeedIcon` - 속도
- `TemperatureHotIcon` - 온도

### 🔋 배터리 & 전원
- `Battery100Icon` - 배터리 100%
- `Battery75Icon` - 배터리 75%
- `Battery50Icon` - 배터리 50%
- `Battery25Icon` - 배터리 25%
- `Battery0Icon` - 배터리 0%
- `PowerSavingIcon` - 절전 모드

### 🎤 마이크 & 오디오
- `MicNormal` - 마이크 일반
- `MicOn` - 마이크 켜짐
- `MicOff` - 마이크 꺼짐
- `MicStrong` - 마이크 강함
- `MicWeak` - 마이크 약함

### 📍 위치 & 지도
- `MapIcon` - 지도
- `PlaceIcon` - 장소
- `NearMeIcon` - 내 주변
- `Geofence` - 지오펜스
- `GPSTracking` - GPS 추적

### 🚗 대시캠 & 차량
- `DashCam` - 대시캠
- `Dashcam3Icon` - 대시캠 3
- `DashcamSettings` - 대시캠 설정
- `DashcamConnectivity` - 대시캠 연결

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

- **GitHub**: [https://github.com/pittaofficial/pitta-icon-assets](https://github.com/pittaofficial/pitta-icon-assets)
- **아이콘 갤러리**: [https://pittaofficial.github.io/pitta-icon-assets/](https://pittaofficial.github.io/pitta-icon-assets/)
- **NPM 패키지**: [https://www.npmjs.com/package/@pittaofficial/pitta-icon-assets](https://www.npmjs.com/package/@pittaofficial/pitta-icon-assets)

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
├── index.d.ts            # TypeScript 타입 정의
├── metadata.json         # AI 친화적 메타데이터
└── search-index.json     # 검색 인덱스
```

## �� 라이선스

MIT License
