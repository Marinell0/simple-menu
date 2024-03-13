import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    cacheDirectory: '.jest-cache',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    restoreMocks: true,
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
  };
};
