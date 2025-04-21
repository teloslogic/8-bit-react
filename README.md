# 8 Bit React
Chip 8 Emulator PWA

## Table of Contents
- [About](#about)
- [The Tech Stack](#the-tech-stack)
- [Project Setup](#project-setup)
- [Project Commands](#project-commands)
- [IDE Plugins](#ide-plugins)
  + [Visual Studio Code](#visual-studio-code)
  + [Webstorm](#webstorm)
- [References](#references)

## About
In order to update UI tech stack skills, I have decided to write an Emulator. Eventually, I want to create a gameboy emulator, but for now, I am starting off with a CHIP-8 Emulator.

## The Tech Stack
The libraries and frameworks that make up the tech stack:

- [Vitest](https://vitest.dev/) - A fast Vite-native unit test framework.
- [Vite](https://vitejs.dev/) - Next generation front end tooling.
- [React JS](https://reactjs.org) - User interface library.
- [daisy UI](https://daisyui.com/) - UI Component Library built with [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org) - A strongly typed programming language.
- [Pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.
- [PWA](https://web.dev/explore/progressive-web-apps) - Capabilities that enable app experiences, built and deployed on the web.

## Project Setup
The steps for installing the required frameworks, libraries and tools needed to build, test, run, and deploy this project:

1. Install the latest, stable official release version of [Node JS](https://nodejs.org/).
2. Since v16.13, [Node JS](https://nodejs.org/) is shipping with [Corepack](https://nodejs.org/api/corepack.html). Enable it for this project and install [Pnpm](https://pnpm.io/) by running the command `corepack enable pnpm`.

## Project Commands
This project is setup to use [Pnpm CLI](https://pnpm.io/pnpm-cli).

All commands are run from the `8-bit-react` root project directory:

| Command          | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `pnpm install`   | Install all workspace libraries and dependencies         |
| `pnpm clean`     | Delete `coverage`, and `dist` folders                    |
| `pnpm coverage`  | Create unit and integration test coverage reports        |
| `pnpm dev`       | Run 'hot loading' development server                     |
| `pnpm build`     | Builds for production in the `dist` folder               |
| `pnpm start`     | Brings up the production build located in `dist` folder  |
| `pnpm test`      | Run all unit and integration tests                       |
| `pnpm fix`       | Format all source code using linter syntax rules         |
| `pnpm lint`      | Look for all linting errors using linter syntax rules    |
| `pnpm ls`        | List all project dependencies                            |
| `pnpm outdated`  | Checks for outdated packages                             |
| `pnpm audit`     | Reported security vunerabilities on NPM depencies        |
| `pnpm prune`     | Remove extraneous packages                               |

## IDE Plugins
The Intergrated Development Environment (IDE's; Visual Studio Code, Intelli J, and the like), work best when they have the proper tools installed.
The plugins, extensions or add ons for the following tools, will help with 
application development:

1. [ESLint](https://eslint.org/)
2. [EditorConfig](https://editorconfig.org/)

### Visual Studio Code
The required [Visual Studio Code](https://code.visualstudio.com/) [Extensions](https://code.visualstudio.com/#hundreds-of-extensions) are:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### Webstorm
The required [Webstorm](https://www.jetbrains.com/webstorm/) [Plugins](https://plugins.jetbrains.com/) are:

- [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint)
- [EditorConfig](https://plugins.jetbrains.com/plugin/7294-editorconfig)

## References
- [CHIP-8](https://en.wikipedia.org/wiki/CHIP-8)
- [CHIP-8 Emulator Guide](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/)
- [Building A CHIP-8 Emulator In C++](https://austinmorlan.com/posts/chip8_emulator/)
- [How To Write a CHIP-8 Interpreter](https://multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/)
- [Cowgod's CHIP-8 Technical Reference](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM)
- [CHIP-8 Research Facility](https://chip-8.github.io/)
