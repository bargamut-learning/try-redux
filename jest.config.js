module.exports = {
  // test conf
  roots: [
    `<rootDir>/src/`,
    // `<rootDir>/tests/`,
  ],
  testRegex: /.test\.(js|jsx)$/,
  transform: {
    '^.+\\.(js|jsx)$': `babel-jest`,
  },

  // coverage conf
  collectCoverage: true,
  collectCoverageFrom: [
    `src/**/*.js`,
    `!src/**/*.spec.js`,
    `!**/tests/**`,
    `!**/node_modules/**`,
  ],
  coverageReporters: [
    `html`,
    `text`,
    `text-lcov`,
    `lcov`,
  ],
  // coverageThreshold: {
  //   global: {
  //     lines: 10,
  //     statements: 10,
  //     functions: 10,
  //     branches: 10,
  //   },
  // },
};
