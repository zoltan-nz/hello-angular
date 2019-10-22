module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/*/*.spec.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
  automock: false,
  notify: false,
  collectCoverage: false,
};
