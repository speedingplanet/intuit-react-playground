export default {
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};
