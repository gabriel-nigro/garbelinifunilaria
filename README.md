<p align="center">
  <img src="https://github.com/gabriel-nigro/garbelinifunilaria/blob/main/src/assets/logoSmall-removebg-preview.png?raw=true" width="202" height="79" alt="logo"/>
</p>

---

<p align="center">
    <a href="https://nodejs.org/en">
    <img src="https://img.shields.io/badge/node-v19.3.0-purple"
         alt="Node version" />
    </a>
    <a href="https://github.com/gabriel-nigro">
    <img src="https://img.shields.io/badge/maintainer-%40gabriel--nigro-purple"
         alt="Maintainer" />
    </a>
    <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-purple.svg"
         alt="License: MIT" />
    </a>
</p>

<p align="center">
    <a href="https://garbelinifunilaria.com.br/">
    <img src="https://img.shields.io/badge/website-up-brightgreen"
         alt="Website" />
    </a>
    <a href="https://github.com/gabriel-nigro/garbelinifunilaria/issues">
    <img src="https://img.shields.io/github/issues/gabriel-nigro/garbelinifunilaria"
         alt="GitHub issues" />
    </a>
    <a href="https://github.com/gabriel-nigro/garbelinifunilaria/commits/main">
    <img src="https://img.shields.io/github/last-commit/gabriel-nigro/garbelinifunilaria/main"
         alt="GitHub last commit (branch)" />
    </a>
    <a href="https://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
         alt="PRs Welcome" />
    </a>
</p>

<p align="center">
    <a href="https://codeclimate.com/github/gabriel-nigro/garbelinifunilaria/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/f9f648cb4f72bbde2bb1/maintainability"
         alt="Maintainability" />
    </a>
    <a href="https://codeclimate.com/github/gabriel-nigro/garbelinifunilaria/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/f9f648cb4f72bbde2bb1/test_coverage"
         alt="Test Coverage" />
    </a>
    <a href="https://snyk.io/test/github/gabriel-nigro/garbelinifunilaria">
    <img src="https://snyk.io/test/github/gabriel-nigro/garbelinifunilaria/badge.svg"
         alt="Known Vulnerabilities" />
    </a>
    <a href="http://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"
         alt="Commitizen friendly" />
    </a>
</p>

![](https://github.com/gabriel-nigro/garbelinifunilaria/blob/main/docs/page-slow.gif)

## 📋 Table of Contents

1. 🚗 [About](#🚗-about)
2. 🔨 [Installation](#🔨-installation)
3. 💯 [Tests](#💯-tests)
4. ☑️ [Code analysis and consistency](#☑️-code-analysis-and-consistency)
5. ✨ [Lighthouse](#✨-lighthouse)
6. ©️ [License](#©️-license)
7. ❤️ [Contributors](#❤️-contributors)

## 🚗 About

This project aims to create a landing page for Funilaria e Pintura Garbelini, aiming to generate visibility and leads for the company.

## 🔨 Installation

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

First, [download](https://nodejs.org/en/download) and install node. Version v19.3.0 was used in development lifecycle.

Installation is done using commands bellow:

```bash
# Clone project
git clone git@github.com:gabriel-nigro/garbelinifunilaria.git

# Install dependencies
npm install

# Start vite dev server
npm run dev

# Build for production
npm run build
```

## 💯 Tests

![Vitest](https://img.shields.io/badge/Vitest-6E9F18.svg?style=for-the-badge&logo=Vitest&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

![Test Coverage](https://api.codeclimate.com/v1/badges/f9f648cb4f72bbde2bb1/test_coverage)

### 🧪 Unit

To run the tests available in this project, run the following command:

```bash
# Run vitest
npm run test

# See coverage
npm run coverage
```

## ☑️ Code analysis and consistency

### 🔍 Code linting & formatting

![ESLint](https://img.shields.io/badge/-ESLint-black?style=for-the-badge&logoColor=white&logo=eslint&color=341BAB)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black)

Run one of the following commands :

```bash
# Lint
npm run lint

# Lint and fix
npm run lintfix
```

> _Obs: Lintfix is also triggered in pre-commit hook, but only for staged files_

### 🥇 Project quality scanner

CodeClimate assesses code quality, identifies issues, and enhances code maintainability, enabling better software development practices.

![Codeclimate](https://img.shields.io/badge/Code%20Climate-000000.svg?style=for-the-badge&logo=Code-Climate&logoColor=white)

![Maintainability](https://api.codeclimate.com/v1/badges/f9f648cb4f72bbde2bb1/maintainability)

You can check the [CodeClimate](https://codeclimate.com/github/gabriel-nigro/garbelinifunilaria/) analysis report here.

### 🚨 Security check

![Snyk](https://img.shields.io/badge/Snyk-4C4A73.svg?style=for-the-badge&logo=Snyk&logoColor=white)

![Monitored](https://snyk.io/test/github/gabriel-nigro/garbelinifunilaria/badge.svg)

Snyk performs comprehensive dependency checks, detecting and fixing vulnerabilities in your [project's dependencies](https://snyk.io/test/github/gabriel-nigro/garbelinifunilaria) for enhanced security.

## ✨ Lighthouse

![Lighthouse](https://img.shields.io/badge/Lighthouse-F44B21.svg?style=for-the-badge&logo=Lighthouse&logoColor=white)

![Performance](https://img.shields.io/badge/Performance-98-green)
![Accessibility](https://img.shields.io/badge/Accessibility-98-green)
![Best Practices](https://img.shields.io/badge/Best_Practices-100-green)
![SEO](https://img.shields.io/badge/SEO-100-green)

> The report can be viewed at the [docs directory](https://github.com/gabriel-nigro/garbelinifunilaria/blob/main/docs/lighthouse-report.pdf)

## ©️ License

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## ❤️ Contributors

[Angelo Palici](https://github.com/angeleranz) and [João Pedro](https://github.com/joaopedrobello) played the role of developers.

[Design](https://dribbble.com/shots/16755623-Car-Repair-Landing-Page) was created by [Luthfi Rizky](https://www.linkedin.com/in/luthfirzky/).

If you want to contribute to this project, please read the [**contribution guide**](https://github.com/gabriel-nigro/garbelinifunilaria/blob/main/CONTRIBUTING.md).
