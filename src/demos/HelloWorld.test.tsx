import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('Smoke test', () => {
	render(<HelloWorld />);
	const helloEl = screen.getByText(/Hello/);
	expect(helloEl)
		.toBeInTheDocument();
});
