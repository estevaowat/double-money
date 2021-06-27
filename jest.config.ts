export default {
   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   clearMocks: true,
   coverageDirectory: 'coverage',
   coverageProvider: 'v8',
   rootDir: './src',
   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
   testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};
