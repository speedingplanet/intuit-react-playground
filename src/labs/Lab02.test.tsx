import { render, screen } from '@testing-library/react';
import Lab02, { StudentDetail } from './Lab02';

test('Smoke test', () => {
	render(<Lab02 />);
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
