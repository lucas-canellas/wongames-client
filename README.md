# React Avançado: Crie aplicações com NextJS, Strapi e mais

### https://www.udemy.com/course/react-avancado/

Neste arquivo irei documentar novas funcionalidades que eu for aprendendo durante o curso.

## Git hooks

## [Husky ](https://typicode.github.io/husky/getting-started.html)

Husky é uma ferramenta que permite executar comandos antes de realizar um commit.

## [lint-staged](https://prettier.io/docs/en/install)

O lint-staged é uma ferramenta que permite executar comandos apenas nos arquivos que serão commitados (staged).

## Configurando o [Jest](https://jestjs.io/pt-BR/docs/getting-started)

O Jest é um framework de testes unitários para Javascript.

```bash
  npm install --save-dev jest @types/jest jest-environment-jsdom
```

### 1. Criar o arquivo jest.config.js na raiz do projeto

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
```

### 2. Adicionar scripts no package.json

```bash
    "test": "jest --maxWorkers=50%",
    "test:watch": "jest --watch --maxWorkers=25%",
    "test:ci": "jest --runInBand"
```

### 3. Criar o arquico setup.ts dentro da pasta .jest

```javascript

```

## [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Configurando o react-testing-library

```bash
  npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Adicionar no .jest/setup.ts

```javascript
import '@testing-library/jest-dom'
```
