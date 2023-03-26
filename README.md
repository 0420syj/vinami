# Vinami🍷

A wine pairing service that helps you find the perfect wine to pair with your food.

## Translation

-   [English](README.md)
-   [한국어](README.KR.md)

## Table of Contents

-   [Getting Started](#getting-started)

    -   [Prerequisites](#prerequisites)
    -   [Installing](#installing)
        <!-- -   [Running the tests](#running-the-tests) -->
        <!-- -   [Deployment](#deployment) -->

-   [Built With](#built-with)
-   [Project Structure](#project-structure)
    <!-- -   [Contributing](#contributing) -->
    <!-- -   [Versioning](#versioning) -->
-   [Authors](#authors)
-   [License](#license)
<!-- -   [Acknowledgments](#acknowledgments) -->

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
-   [Yarn](https://yarnpkg.com/) - Dependency Management

### Installing

1.  Clone the repo

    ```bash
    git clone https://github.com/0420syj/vinami.git
    cd vinami
    ```

2.  Install dependencies

    ```bash
    yarn
    ```

3.  Start the development server

    ```bash
    yarn mariage dev
    yarn admin dev
    ```

4.  Start the storybook

    ```bash
    yarn storybook
    ```

## Built With

-   [Next.js](https://nextjs.org/) - The web framework used in [apps/mariage](apps/mariage)

-   [Nuxt.js](https://nuxtjs.org/) - The web framework used in [apps/admin](apps/admin)

-   [Yarn](https://yarnpkg.com/) - Dependency Management
    -   [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) - Yarn Workspaces is a feature that allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.
    -   [Yarn Berry](https://yarnpkg.com/getting-started/qa#why-should-you-upgrade-to-yarn-modern) - Yarn 2 is a new version of Yarn that has been designed from the ground up with reliability, speed, and security in mind. It has already been used to build large production codebases at companies such as Bloomberg, Facebook, Google, and Microsoft.
-   [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
-   [Storybook](https://storybook.js.org/) - UI component explorer for frontend developers used in [common/ui](common/ui)

## Project Structure

```bash
. # Root
├── apps
│   ├── admin # Admin app (Nuxt.js)
│   └── mariage # Front app (Next.js)
└── common
    ├── ui # UI components (Storybook)
    └── utils # Shared utils
```

## Authors

-   **Wan Sim** - _Initial work_

## License

This project is licensed under the [MIT License](LICENSE)
