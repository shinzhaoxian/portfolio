/* =========================================================================
   콘텐츠는 여기서만 수정하면 전체 사이트에 반영됩니다.
   ========================================================================= */

/* ----- 이미지 / 영상 (public/images 폴더에 파일 넣고 경로 입력) -----
   예) scentSync: "/images/scent-sync.png"
   비워두면("") 자동으로 회색 자리표시자가 보입니다.

   프로젝트마다 이미지가 2개:
     - xxx      = 카드(목록)에 보이는 사진
     - xxxCover = 상세 페이지 상단에 보이는 사진(영상 mp4도 가능)
   ※ Baker Hughes는 사양/문서 캡처를 넣지 마세요(영업비밀). 텍스트만 권장. */
export const MEDIA = {
  // 카드용
  bakerHughes: "/images/baker.png",
  puzzleLog: "/images/p.png",
  fridge: "/images/f.png",
  scentSync: "/images/scentSync.png",
  // 상세(cover)용
  bakerHughesCover: "/images/baker-cover.png",
  puzzleLogCover: "/images/puzzlelog-cover.png",
  fridgeCover: "/images/fridge-cover.png",
  scentSyncCover: "/images/per-cover.png",

  about: "../images/profile.jpg",
};

export const PROFILE = {
  brand: "SO HYUN",
  name: "신소현",
  nameEn: "SHIN SO HYUN",
  birth: "",              // 공개 꺼려지면 빈 문자열("")로
  phone: "",           // 공개 꺼려지면 빈 문자열("")로
  email: "shinso120922@gmail.com",
  location: "Korea · Taiwan",
  // 커버 첫 문장 (자기소개)
 intro: "시장과 고객을 분석하고, 데이터를 활용해 업무를 개선해왔습니다. 제품의 강점을 고객이 구매할 이유로 연결하는 아마존 MD가 되겠습니다.",
};

// 커버의 Skills & Tools (칩으로 표시)
export const TOOLS = ["PowerPoint", "Excel · Power Query", "영어 · 중국어", "GitHub"];

// About 페이지의 숙련도 막대
export const SKILLS = [
  ["English", 4],
  ["中文", 5],
  ["Excel · Power Query", 4],
  ["Front-end (React)", 3],
];

export const PROJECTS = [
  {
    id: "baker-hughes",
    no: "01",
    toc: "글로벌 EPC 고객 대상 B2B 프로젝트 운영 지원",
    title: "B2B Coordination",
    tags: "OTR · Process Automation",
    period: "현재 재직 중",
    sub: "글로벌 에너지 기업 · Application Engineer",
    image: MEDIA.bakerHughes,
    cover: MEDIA.bakerHughesCover,
    desc: "글로벌 EPC 고객 대상 B2B 프로젝트 운영을 지원. 문서·일정·산출물을 관리하고, 반복 데이터 작업을 자동화했습니다.",
    oneLiner: "고객 요구를 정확히 반영되도록 여러 이해관계자 사이를 조율했습니다.",
    intro:
      "Baker Hughes Korea에서 Application Engineer로 글로벌 EPC 고객 대상 B2B 프로젝트 운영을 지원했습니다. 고객 기술 코멘트, 문서 제출 일정, VPIS·MDR/VDB·Final Book 등 산출물을 관리하고, 해외 공장과의 커뮤니케이션으로 고객 요구가 정확히 반영되도록 조율했습니다. 또한 Power Query로 약 9,000건의 데이터를 자동 매칭해 반복 수작업을 약 4일에서 1시간으로 단축했습니다.",
    role: [
      "기술문서 제출 관리 (VPIS / MDR·VDB / Final Book 등)",
      "고객 기술 코멘트 대응 및 제출 일정 관리",
      "해외 공장·엔지니어링팀과 영어 커뮤니케이션·문서 조율",
    ],
    facts: [
      ["직무", "Application Engineer · Commercial Operations."],
      ["문서 품질", "Final Data Book 3건, Manufacturer Data Book 3건 제작·납품. 최종 제출본 EPC 고객사 코멘트 0건."],
      ["프로세스 자동화", "Power Query(M언어)로 문서 통합 자동화, CMD 배치 스크립트로 대량 파일 일괄 처리·선별."],
      ["다국적 협업", "복수의 국내 대형 EPC 고객사 및 해외 공장 간 문서·기술 커뮤니케이션을 한·영 이중언어로 조율."],
    ],
    metrics: [
      ["0건", "최종 제출본 고객사 코멘트"],
      ["98%↓", "문서 통합 (72시간 → 1시간)"],
      ["5분", "800개 파일 처리 (기존 수 시간)"],
      ["6건", "FDB·MDB 제작·납품"],
    ],
    metricsLabel: "업무 성과",
    metricsNote: "* 고객사명·프로젝트명 등 세부 정보는 영업비밀 보호를 위해 제외했습니다.",
  },
  {
    id: "puzzle-log",
    no: "02",
    toc: "PuzzleLog — 감성 다이어리 웹 서비스",
    title: "PuzzleLog",
    tags: "Service Planning · Revenue Model",
    period: "2025.02 – 2025.04",
    sub: "감성 다이어리 웹 서비스 · 팀 프로젝트",
    image: MEDIA.puzzleLog,
    cover: MEDIA.puzzleLogCover,
    desc: "사진·글 '조각'을 저장해 감정 흐름을 시각화하는 다이어리 서비스. 다이어리 꾸미기 화면을 직접 구현하고, 구독형 수익모델을 제안했습니다.",
    oneLiner: "기획·구현과 함께 수익모델까지 제안했습니다.",
    intro:
      "감정 조각을 기록하는 다이어리 서비스에서 다이어리 꾸미기 화면을 직접 구현하고, 결제·저장 로직을 담당했습니다. 수익 관점에서는 스티커 구독형 모델을 제안했습니다.",
    role: [
      "다이어리 꾸미기 화면 직접 구현",
      "프론트엔드 UI + 백엔드 (카카오 결제 API·저장 로직)",
      "스티커 구독형 수익모델 아이디어 제안",
      "발표",
    ],
    facts: [
      ["사용 기술", "HTML · CSS · JavaScript · React · Spring · MySQL"],
      ["수익모델", "스티커 잠금 해제를 구독형으로 전환하는 안을 제안."],
    ],
    metrics: [],
    metricsLabel: "",
    metricsNote: "",
  },
  {
    id: "fridge",
    no: "03",
    toc: "냉장고를 부탁해 — 건강 레시피 추천 서비스",
    title: "냉장고를 부탁해",
    tags: "Service Planning · Revenue Model",
    period: "2025.12",
    sub: "혈당·재료 기반 건강 서비스 · 팀 프로젝트",
    image: MEDIA.fridge,
    cover: MEDIA.fridgeCover,
    desc: "혈당과 냉장고 재료를 기반으로 건강 레시피를 추천하는 서비스. 핵심 기능 기획과 수익모델 아이디어를 제안하고, 일부 화면을 직접 구현했습니다.",
    oneLiner: "서비스를 '어떻게 돈이 되게 할지'까지 기획했습니다.",
    intro:
      "혈당과 냉장고 재료로 레시피를 추천하는 서비스를 기획하며, 사용자·수익 관점의 문제를 직접 개선안으로 제안했습니다. 기능 기획과 일부 화면 구현, 발표를 담당했습니다.",
    role: [
      "spoonacular API를 활용한 혈당·재료 기반 레시피 추천 기획 제안",
      "로그인·회원가입·관리자·커뮤니티 화면 직접 구현",
      "진입장벽 피드백 대응 → 온보딩 가이드 아이디어 제안",
      "수익 구조 피드백 대응 → 광고 배너 수익모델 아이디어 제안",
      "발표",
    ],
    facts: [
      ["문제 해결", "'첫 사용자가 어렵다' 피드백 → 온보딩 가이드로, '어디서 버나' 피드백 → 광고 배너로 대응."],
      ["담당 구현", "인증(로그인·회원가입)·관리자·커뮤니티 영역."],
    ],
    metrics: [],
    metricsLabel: "",
    metricsNote: "",
  },
  {
    id: "scent-sync",
    no: "04",
    toc: "로레알 브랜드스톰 — Scent-Sync",
    title: "Scent-Sync",
    tags: "Market Research · Strategy",
    period: "2026 · L'Oréal Brandstorm",
    sub: "글로벌 마케팅 공모전 · Team H³",
    image: MEDIA.scentSync,
    cover: MEDIA.scentSyncCover,
    desc: "럭셔리 시장의 구매 장벽을 리서치하고, 이를 제품 컨셉과 오프라인 전환 전략으로 연결한 팀 프로젝트.",
    oneLiner: "시장 리서치를 전략과 실행으로 연결했습니다.",
    intro:
      "소비자가 구매 전 제품을 테스트해도 결국 맞지 않는 선택을 하는 문제를 리서치로 정의하고, 이를 개인화 제품 컨셉과 Gen Z 대상 오프라인 팝업 전환 전략으로 구체화했습니다.",
    role: [
      "시장·소비자 구매 장벽 조사",
      "제품 컨셉 및 기대 효과 설계",
      "Gen Z 대상 팝업스토어 전환 전략",
    ],
    facts: [
      ["팀 구성", "크로스펑셔널 팀(Team H³)에서 리서치·전략 파트 담당."],
      ["산출물", "문제 정의 → 컨셉 → 전환 전략으로 이어지는 실행안."],
    ],
    metrics: [
      ["3.2×", "재구매율"],
      ["40%", "전환율"],
      ["$2.6M", "1년차 예상 매출"],
    ],
    metricsLabel: "Projected · 예상 지표",
    metricsNote: "* 위 지표는 공모전 컨셉 기반 예상치입니다.",
  },
];
