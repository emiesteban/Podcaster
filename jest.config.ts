import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['./setupTests.ts', "@testing-library/jest-dom/extend-expect"],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-stub',
  },
};

export default config;