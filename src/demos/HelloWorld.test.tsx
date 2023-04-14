/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';
// import '@testing-library/jest-dom';

test('Smoke test', () => {
	render(<HelloWorld />);
	const helloEl = screen.getByText(/Hello/);
	expect(helloEl)
		.toBeInTheDocument();
});
