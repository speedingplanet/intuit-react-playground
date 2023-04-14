import { render, screen } from '@testing-library/react';
import Lab01, { StudentDetail } from './Lab01';

test('Smoke test', () => {
	render(<Lab01 />);
	let labElement = screen.getByText(/The student is/i);
	expect(labElement).not.toBeNull();
	expect(labElement)
		.toBeInTheDocument();
});

test('StudentDetail: firstName and lastName render into the component', () => {
	let testFirstName = 'John';
	let testLastName = 'Paxton';
	render(<StudentDetail firstName={testFirstName} lastName={testLastName} />);
	let detailElement = screen.getByText(new RegExp(`${testFirstName} ${testLastName}`));
	expect(detailElement).not.toBeNull();
	expect(detailElement)
		.toBeInTheDocument();
});
