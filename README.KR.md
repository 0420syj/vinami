# Vinami🍷

음식과 어울리는 완벽한 와인을 찾을 수 있도록 도와주는 와인 페어링 서비스입니다.

## 번역

-   [English](README.md)
-   [한국어](README.KR.md)

## 목차

-   [시작하기](#시작하기)

    -   [환경구성](#환경구성)
    -   [설치](#설치)
        <!-- -   [테스트 실행](#테스트 실행) -->
        <!-- -   [배포](#배포) -->

-   [기술 스택](#기술-스택)
-   [프로젝트 구조](#프로젝트-구조)
    <!-- -   [기여](#기여) -->
    <!-- -   [버전 관리](#버전 관리) -->
-   [제작자](#제작자)
-   [라이센스](#라이센스)
<!-- -   [감사의 말](#감사의 말) -->

## 시작하기

아래 안내사항을 통해 개발 및 테스트 목적으로 로컬에서 프로젝트를을 실행할 수 있습니다.

### 환경구성

-   [Node.js](https://nodejs.org/ko/) - Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.
-   [Yarn](https://yarnpkg.com/) - 의존성 관리

### 설치

1.  저장소 Clone

    ```bash
    git clone https://github.com/0420syj/vinami.git
    cd vinami
    ```

2.  의존성 설치

    ```bash
    yarn
    ```

3.  개발 서버 실행

    ```bash
    yarn mariage dev
    yarn admin dev
    ```

4.  Storybook 실행

    ```bash
    yarn storybook
    ```

## 기술 스택

-   [Next.js](https://nextjs.org/) - [apps/mariage](apps/mariage)에서 사용된 웹 프레임워크입니다.

-   [Nuxt.js](https://nuxtjs.org/) - [apps/admin](apps/admin)에서 사용된 웹 프레임워크입니다.

-   [Yarn](https://yarnpkg.com/) - 의존성 관리
    -   [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) - Yarn Workspaces는 여러 패키지를 하나의 저장소에서 관리할 수 있도록 도와주는 기능입니다.
    -   [Yarn Berry](https://yarnpkg.com/getting-started/qa#why-should-you-upgrade-to-yarn-modern) - Yarn Berry는 속도와 안정성을 향상시키고, 새로운 기능을 추가한 Yarn의 새로운 버전입니다.
-   [TypeScript](https://www.typescriptlang.org/) - JavaScript의 슈퍼셋으로 정적 타입을 지원합니다.
-   [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크
-   [Storybook](https://storybook.js.org/) - [common/ui](common/ui)에서 사용된 UI 컴포넌트를 개발하고 테스트할 수 있도록 도와주는 도구입니다.
-   [Jest](https://jestjs.io/) - 테스트 프레임워크

## 프로젝트 구조

```bash
. # Root
├── apps
│   ├── admin # Admin app (Nuxt.js)
│   └── mariage # Front app (Next.js)
└── common
    ├── ui # UI components (Storybook)
    └── utils # Shared utils
```

## 제작자

-   **심완** - 최초 작성자

## 라이센스

이 프로젝트는 [MIT License](LICENSE)를 따릅니다.
