module.exports = {
  roots: [
    "<rootDir>/test"
  ],
  moduleDirectories: [
    "src",
    "node_modules"
  ],
  testMatch: [
    "**/*spec.js"
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js"
  ],
  coverageDirectory : "coverage"
};
