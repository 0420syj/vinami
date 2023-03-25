# Vinami🍷

A wine pairing service that helps you find the perfect wine to pair with your food.

## Table of Contents

<!-- -   [Getting Started](#getting-started) -->
<!-- -   [Prerequisites](#prerequisites) -->
<!-- -   [Installing](#installing) -->
<!-- -   [Running the tests](#running-the-tests) -->
<!-- -   [Deployment](#deployment) -->

-   [Built With](#built-with)
-   [Project Structure](#project-structure)
    <!-- -   [Contributing](#contributing) -->
    <!-- -   [Versioning](#versioning) -->
-   [Authors](#authors)
-   [License](#license)
<!-- -   [Acknowledgments](#acknowledgments) -->

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
│   ├── admin # Nuxt.js
│   └── mariage # Next.js
└── common
    ├── ui # Storybook
    └── utils # Shared utils
```

## Authors

-   **Wan Sim** - _Initial work_

## License

This project is licensed under the [MIT License](LICENSE)
