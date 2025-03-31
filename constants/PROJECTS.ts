import { Project } from "@/app/components/projects/types/project";

export const PROJECTS: Project[] = [
  {
    period: "2025.02 - 진행 중",
    title: "Fungle",
    tag: [
      "팀",
      "React",
      "TypeScript",
      "Next.js",
      "Styled-Components",
      "PostgreSQL",
    ],
    description: "누구나 웹 소설을 연재할 수 있는 서비스",
    thumbnail: "/project1/thumbnail.webp",
    outline: `2022년 기준, 웹 소설의 시장 규모는 1조 390억원에 달했습니다.웹 소설은 빠르게 성장하는 콘텐츠 사업 중 하나이지만, 작가가 정식으로 데뷔할 수 있는 기회는 제한적입니다. 특히, 독자들이 좋아하는 작품을 직접 후원하거나 펀딩 진행 상황을 한 곳에서 확인하기 어려운 문제가 있습니다.
    우리는 단순한 연재 플랫폼이 아닌 **펀딩 시스템을 통해 작가가 정식 데뷔**할 수 있도록 지원하는 새로운 형태의 창작 생태계를 제공하기 위해 **'펀글(Fungle)'** 을 만들었습니다.`,
    features: [
      "**간단한 연재 시스템**으로 아이디어가 있는 누구나 손쉽게 소설 업로드 가능",
      "연재 중인 **소설과 펀딩 진행 현황을 동시에 확인**",
      "창작자들이 협업할 수 있는 커뮤니티 공간 제공",
    ],
    contributions: [
      "Styled-Components를 사용하여 반응형 UI 컴포넌트 설계 및 구현",
      "로그인, 마이페이지, 관리자 화면 UI 개발",
      "Input, Textarea, Button 공통 컴포넌트 구현으로 **재사용성을 고려하여 개발**",
      "마이페이지에서 사용자의 소설 연재 내역, 좋아요 누른 기록 등 **사이트 활동 정보를 직관적으로 확인**할 수 있도록 구현",
      "Zustand를 사용한 **사용자 로그인 상태 전역 관리**",
      "역할(user/admin)에 따라 **관리자 페이지 접근 차단**",
      "**관리자 화면**에서 회원, 커뮤니티 관리 및 소설, 펀딩 검토가 가능하도록 구현",
      "프로젝트에 대한 정보를 파악할 수 있도록 **README 작성**",
    ],
    screenshots: [
      { src: "/project1/login.webp", caption: "로그인 화면" },
      { src: "/project1/signup.webp", caption: "회원가입 화면" },
      {
        src: "/project1/main.webp",
        caption: "홈 화면 – 소설 연재 내역 및 전체 소설 조회",
      },
      {
        src: "/project1/novel.webp",
        caption: "소설 상세 페이지 – 작가 소개 및 소설 에피소드 조회",
      },
      {
        src: "/project1/community.webp",
        caption: "커뮤니티 – 창작자의 소통 공간",
      },
      {
        src: "/project1/mypage.webp",
        caption: "마이페이지 – 정보 수정 및 연재/활동 내역 조회",
      },
      {
        src: "/project1/admin.webp",
        caption: "관리자 화면 - 소설 검토, 회원 관리, 커뮤니티 관리, 펀딩 관리",
      },
    ],
    deployUrl: "https://fungle.site",
    githubUrl: "https://github.com/FRONT-END-BOOTCAMP-PLUS-3/fungle",
  },
  {
    period: "2025.01 - 2025.02",
    title: "Myking",
    tag: [
      "팀",
      "React",
      "TypeScript",
      "Next.js",
      "Styled-Components",
      "Supabase",
      "PWA",
    ],
    description: "등산 정보를 확인하고 등산 메이트를 구할 수 있는 서비스",
    thumbnail: "/project2/thumbnail.webp",
    outline: `건강과 여가에 대한 관심이 높아지는 요즘, 등산은 남녀노소 누구나 즐길 수 있는 인기 있는 취미 활동 중 하나입니다. 하지만 등산을 처음 시작하는 사람들에게는 산에 대한 정보가 부족하고, 함께 등산할 사람을 찾는 것은 쉽지 않습니다.\n
    **'마이킹(Myking)'**은 사용자가 지역 기반으로 **산 정보를 손쉽게 확인하고, 함께 등산을 즐길 메이트를 모집하거나 참여**할 수 있는 플랫폼입니다.`,
    features: [
      "홈 화면에서 산 및 등산 파티 조회 가능",
      "산 상세 페이지에서 위치, 고도, 난이도 등의 정보 확인",
      "등산 메이트 모집 게시글 등록 및 참여",
      "로그인 후 내가 등록하거나 참여한 파티 관리",
      "**PWA 적용**으로 모바일에서도 앱처럼 사용 가능",
    ],
    contributions: [
      "Supabase를 활용한 **카카오 소셜 로그인** 구현으로 간단하게 서비스 사용하도록 구현",
      "로그인 시 가입 여부 따라 **조건부 렌더링**",
      "Zustand를 사용한 **로그인 상태 전역 관리**",
      "마이페이지에서 **사용자 정보 조회 및 수정**",
      "내가 등록하거나 참여한 **등산 파티 정보 관리**",
    ],
    screenshots: [
      { src: "/project2/main.webp", caption: "홈 화면 - 산 및 등산 파티 조회" },
      {
        src: "/project2/mountain.webp",
        caption: "산 상세 화면 - 산 및 코스 정보 조회",
      },
      {
        src: "/project2/parties.webp",
        caption: "등산 파티 화면 - 등록된 파티 정보 등록 및 조회",
      },
      {
        src: "/project2/mypage.webp",
        caption:
          "마이페이지 - 사용자 정보 조회, 수정 및 등록하거나 참여한 파티 관리",
      },
      {
        src: "/project2/admin.webp",
        caption: "관리자 화면 - 등록된 회원, 산, 코스, 파티 정보 관리",
      },
    ],
    githubUrl:
      "https://github.com/FRONT-END-BOOTCAMP-PLUS-3/myking/tree/develop",
  },
  {
    period: "2024.09 - 2024.12",
    title: "CO/N",
    tag: [
      "팀",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Socket.io",
      "HTML5",
      "CSS",
      "Axios",
    ],
    description: "생활비 부담 해소를 위한 커뮤니티",
    thumbnail: "/project3/thumbnail.webp",
    outline: `물가가 지속적으로 상승하는 요즘, 1인 가구를 중심으로 생활비에 대한 부담이 커지고 있습니다.  
    **CO/N**은 이웃과 함께 택시비, 식비, 배송비 등을 분담할 수 있도록 돕는 학교 기반 매칭 서비스입니다.  
    사용자는 게시글을 통해 거래할 상대를 구하고, **실시간 채팅 기능을 통해 소통과 거래 현황 관리**가 가능합니다.  
    또한, **무단 거래 방지를 위한 패널티 시스템**을 도입해 신뢰 기반의 커뮤니티 문화를 형성하고자 했습니다.
    * _배포 완료했지만 현재 DB 사용량이 초과되어 서버가 닫힌 상태입니다._`,
    features: [
      "학교 내 건물 설정으로 게시글을 노출해 1인 가구 학생들의 **생활비 부담 감소**",
      "**실시간 채팅 기능**을 통해 거래 참여자 간 원활한 소통 및 거래 현황 확인 가능",
      "무단 거래 파기 시 **패널티 부여** 및 일정 횟수 초과 시 서비스 이용 제한",
    ],
    contributions: [
      "거래 게시글 등록, 수정, 삭제 및 조회 기능 구현",
      "Socket.io를 이용한 **실시간 채팅** 기능 개발",
      "**채팅 내역 및 거래 상태를 실시간으로 확인**할 수 있는 UI 및 데이터 흐름 설계 및 구현",
      "방장이 거래 참여 인원 관리할 수 있도록 구현(강제 퇴장)",
    ],
    screenshots: [
      { src: "/project3/community.webp", caption: "거래 게시글 목록 화면" },
      {
        src: "/project3/community-detail.webp",
        caption: "거래 게시글 상세 화면 - 게시글 수정, 삭제 및 거래 정보 확인",
      },
      { src: "/project3/chatting-list.webp", caption: "참여한 채팅 목록" },
      { src: "/project3/chatting.webp", caption: "실시간 채팅 화면" },
      {
        src: "/project3/chatting-status.webp",
        caption: "거래 현황 확인 및 관리",
      },
    ],
    githubUrl: "https://github.com/m01310g/CapstoneDesign2",
  },
  {
    period: "2025.03",
    title: "김민경 포트폴리오",
    tag: ["개인", "React", "Next.js", "Styled-Components"],
    description:
      "프로젝트와 기술 스택 등을 소개하기 위해 제작된 포트폴리오 웹사이트",
    thumbnail: "/project4/thumbnail.webp",
    outline: `저의 프로젝트와 기술 스택 등을 소개하기 위해 제작된 **포트폴리오 웹사이트**입니다.
    Styled-Components를 사용하여 향후에도 **지속적으로 업데이트**하며 성장 과정을 기록할 예정입니다.`,
    features: [
      "자기소개, 기술 스택, 프로젝트, 정보 등을 한눈에 볼 수 있도록 구성된 **섹션별 구조**",
      "프로젝트별 상세 페이지에서 스크린샷과 기능 설명 제공",
      "**반응형 디자인**으로 데스크탑과 모바일 모두에서 최적화된 뷰 제공",
      "모달 UI 구현으로 **이미지 상세 확인** 가능",
      "스크롤 위치에 따라 현재 섹션에 해당하는 **메뉴 항목 자동 강조**",
    ],
    contributions: [
      "Styled-Components를 활용한 **재사용 가능한 UI 컴포넌트** 구현",
      "스크롤 위치에 따른 **메뉴 활성화 로직** 구현",
      "프로젝트별 상세 페이지 구성 및 이미지 모달 UI 구현",
      "simple-icons 라이브러리 사용으로 각 **태그 색상 유연하게 변경**",
      "모달 내 항목 내용을 **Markdown 문법**으로 렌더링하도록 react-markdown 라이브러리 적용",
    ],
    screenshots: [
      { src: "/project4/main.webp", caption: "메인 화면 - 자기 소개" },
      { src: "/project4/skills.webp", caption: "기술 스택 섹션" },
      { src: "/project4/projects.webp", caption: "프로젝트 목록 섹션" },
      {
        src: "/project4/project-modal.webp",
        caption:
          "개별 프로젝트 모달 - 사용한 기술 스택, 기능, 기여도, 스크린샷 확인 가능",
      },
      {
        src: "/project4/about.webp",
        caption: "프로젝트 진행 태도와 자격증 등 확인 가능",
      },
    ],
    githubUrl: "https://github.com/m01310g/portfolio",
  },
];
