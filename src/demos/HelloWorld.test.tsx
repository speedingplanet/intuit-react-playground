import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('No React test', function () {
	expect(/* actual / received */ 2 + 2)
		.toEqual(/* expected */ 4);
});

test('Smoke test', () => {
	render(<HelloWorld />);
	const helloEl = screen.getByText(/Hello, everybody!/);
	expect(helloEl)
		.toBeInTheDocument();
});

test('Prints "Hello, everybody" if there is no userName prop', () => {
	render(<HelloWorld />);
	const helloEl = screen.getByText(/everybody/);
	expect(helloEl)
		.toBeInTheDocument();
});

test('Greets by userName if userName prop is passed in', () => {
	let testUserName = 'John';
	render(<HelloWorld userName={testUserName} />);

	// const helloEl = screen.getByText(new RegExp(testUserName));
	const helloEl = screen.getByText(testUserName, { exact: false });
	expect(helloEl)
		.toBeInTheDocument();
});

// test.only() to ONLY run THAT test
// test.skip() to skip a test
test.skip('Handles an empty string for userName', () => {
	render(<HelloWorld userName="" />);

	const helloEl = screen.getByText('everybody', { exact: false });
	expect(helloEl)
		.toBeInTheDocument();
});
