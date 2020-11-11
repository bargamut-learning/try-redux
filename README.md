# 📦 Trying Redux with React

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![David](https://img.shields.io/david/dev/bargamut-learning/try-redux)

Trying Redux with React based on this article: [Введение в Redux & React-redux](https://habr.com/ru/post/498860/).

## Installation

```
git clone git@github.com:bargamut-learning/try-redux
cd try-redux
npm i
```

or

```
git clone git@github.com:bargamut-learning/try-redux my-project
cd my-project
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Linting

```bash
npm run lint
```

This will start editorconfig checker for linting files

### Testing

```bash
npm run test
```

This will start linting script and then run tests

#### Coverage

```bash
npm rut test::coverage
```

This will start tests with coverage report

> Note: If you wish to send coverage report to coveralls.io you must define the `COVERALLS_REPO_TOKEN` in secret environment variable

### Production build

```bash
npm run build
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [PostCSS](https://postcss.org/)
- [Jest](https://jestjs.io)
- [Coveralls](https://coveralls.io)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
<!-- - [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration -->

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Enables the re-use of Babel's injected helper code to save on codesize
  - [@babel/runtime](https://babeljs.io/docs/en/babel-runtime) - A library that contains Babel modular runtime helpers and a version of regenerator-runtime
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for React

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`css-minimizer-webpack-plugin`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) - Optimize and minimize CSS assets
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Optimize and minimize JavaScript
- [`babel-jest`](https://www.npmjs.com/package/babel-jest) - Transform test scripts with Babel

### Libraries

- [Reselect](https://www.npmjs.com/package/reselect) - Simple “selector” library for Redux (and others).

### Tools

- [`editorconfig-checker`](https://github.com/editorconfig-checker/editorconfig-checker) - Verifying that your files are in harmony with your .editorconfig

### Tests

- [`jest`](https://github.com/facebook/jest) - JavaScript testing library
  - [`@types/jest`](https://www.npmjs.com/package/@types/jest) - Type definitions for Jest
  - [`@testing-library/jest-dom`](https://testing-library.com/docs/ecosystem-jest-dom/) - A companion library for Testing Library that provides custom DOM element matchers for Jest
- [`coveralls`](https://github.com/nickmerwin/node-coveralls) - Get the coverage reporting of coveralls.io
- [`react-test-rederer`](https://www.npmjs.com/package/react-test-renderer) - Experimental React renderer to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.
- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) - React Testing Library is a simple and complete React DOM testing utilities that encourage good testing practices.

## Author

- [Paul Petrov](https://bargamut.ru)

## License

This project is open source and available under the [MIT License](LICENSE).
