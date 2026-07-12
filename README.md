# 신소현 Portfolio (React + Vite + React Router)

라우터로 페이지를 분리한 포트폴리오입니다.

## 라우트 구조
- `/` 홈 (히어로 + 인트로 + 프로젝트 미리보기)
- `/projects` 프로젝트 목록 (스크롤에 따라 왼쪽 프로젝트가 바뀜)
- `/projects/:id` 프로젝트 상세 — 예: `/projects/scent-sync`, `/projects/fridge`, `/projects/puzzle-log`, `/projects/baker-hughes`
- `/about` Know Me
- `/contact` Contact

## 폴더
```
portfolio/
├─ index.html
├─ package.json
├─ vite.config.js
├─ vercel.json            # Vercel 배포용 (새로고침 404 방지)
├─ public/
│  └─ _redirects          # Netlify 배포용 (새로고침 404 방지)
└─ src/
   ├─ main.jsx            # BrowserRouter 진입점
   ├─ App.jsx             # Nav + Routes + Footer
   ├─ styles.css          # 전체 스타일 (색상 변수 포함)
   ├─ data/site.js        # ★ 콘텐츠·이미지·프로필은 여기서만 수정
   ├─ components/         # Nav, Footer, Media
   └─ pages/              # Home, Projects, ProjectDetail, About, Contact
```

## 실행
Node.js 18 이상 필요.
```
npm install
npm run dev
```
터미널에 뜨는 http://localhost:5173 접속.

## 콘텐츠 수정
`src/data/site.js` 한 파일에서 프로필·프로젝트·이미지 경로를 모두 관리합니다.

### 이미지·영상 넣기
1. 파일을 `public/` 폴더에 넣습니다. (예: `public/scent-sync.png`, `public/hero.mp4`)
2. `src/data/site.js`의 `MEDIA`에 경로를 `/파일명`으로 적습니다.
   ```js
   export const MEDIA = {
     heroVideo: "/hero.mp4",
     scentSync: "/scent-sync.png",
     ...
   };
   ```
- 비워두면 회색 자리표시자가 표시됩니다.
- ⚠️ Baker Hughes 카드에는 사양·문서 캡처를 넣지 마세요(영업비밀). 이미지 없이 텍스트만 권장합니다.

### 아직 채워야 할 것
- `PROFILE.phone` — 실제 전화번호
- `PROFILE.email` — 실제 이메일 맞는지 확인
- Baker Hughes 시작월(있으면 `period`에)

## 색상 변경
`src/styles.css` 상단 `.tt-root`의 CSS 변수만 바꾸면 전체 색이 바뀝니다.
```css
--acc:#7c2ae8;   /* 포인트 색. 네이비로 바꾸려면 예: #1b3a8c */
--bg2:#e7e7e7;   /* 보조 배경 */
```

## 배포 (구글 drive·sites 불가 → 아래 사용)
빌드:
```
npm run build   # dist/ 생성
```
- **Vercel**: 깃허브에 올리고 vercel.com에서 import → 자동. `vercel.json` 포함되어 새로고침 404 방지됨.
- **Netlify**: `dist` 폴더를 드래그 업로드하거나 깃 연동. `public/_redirects` 포함되어 새로고침 404 방지됨.
- 배포 후 나온 URL(예: `https://xxx.vercel.app`)을 지원서 "포트폴리오/개인웹페이지" 칸에 붙여넣기.

> GitHub Pages는 BrowserRouter와 궁합이 나빠 권장하지 않습니다(하려면 HashRouter로 변경 필요). Vercel/Netlify를 권장합니다.
