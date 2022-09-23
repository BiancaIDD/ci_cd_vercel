export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"  
  }
}