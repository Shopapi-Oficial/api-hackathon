module.exports = {
  roots: ['<rootDir>/api'],
  collectCoverageFrom: ['<rootDir>/api/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageProvider: 'v8'
}
