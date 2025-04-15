const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット
    dir: './',
})

// Jestのカスタム設定
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // aliasを定義 (@/*)
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.stories.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
    ],
}

// createJestConfigを定義することによって、next/jestが提供する設定とマージする
module.exports = createJestConfig(customJestConfig)