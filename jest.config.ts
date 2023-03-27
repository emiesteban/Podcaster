import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['./setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-stub',
  },
};

export default config;