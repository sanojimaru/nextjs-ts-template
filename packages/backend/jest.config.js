/** @type {import('jest').Config} */
const config = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/**/*.test.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

module.exports = config;
