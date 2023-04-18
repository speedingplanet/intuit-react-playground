import type { Config } from 'jest';

const config: Config = {
	moduleNameMapper: {
		'\\.css$': '<rootDir>/src/__mocks__/style-mock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};

export default config;
