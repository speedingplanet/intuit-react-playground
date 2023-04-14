import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('No React test', () => {
	expect(/* actual / received */ 2 + 2)
		.toEqual(/* expected */ 4);
});

test('Smoke test', () => {
	render(<HelloWorld />);
	const helloEl = screen.getByText(/Hello/);
	expect(helloEl)
		.toBeInTheDocument();
});
