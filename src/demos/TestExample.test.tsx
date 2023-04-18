
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let initialCount: number;

// or afterAll
beforeAll(() => {
	initialCount = 0;
	console.log('beforeAll: Runs once');
});

// or afterEach
beforeEach(() => {
	initialCount++;
	console.log('beforeEach: This runs before each test().');
});

test('2 + 2', () => {
	expect(2 + 2)
		.toEqual(4);
});

test('3 + 3', () => {
	expect(3 + 3)
		.toEqual(6);
});

test('4 + 4', () => {
	expect(4 + 4)
		.toEqual(8);
});

export {};
