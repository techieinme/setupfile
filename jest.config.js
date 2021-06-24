module.exports = {
  verbose: true,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname, // the root directory
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/config/jest/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/src/config/jest/styleMock.js',
  },
  reporters: ['default', ['@amzn/jest-reporter', { language: 'javascript' }]],
  coverageReporters: ['text', 'cobertura', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.jsx',
    '!src/**/*.stories.js',
    '!src/**/*.stories.jsx',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/src/mocks/',
    '/src/constants/',
    'src/store/index.js',
    'src/reducers/index.js',
    'src/config',
    'src/index.dev.js',
    'src/DevHome.jsx',
  ],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 78,
      lines: 92,
      statements: 90,
    },
  },
};
