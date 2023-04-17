import { render, screen } from '@testing-library/react';
import { students } from '../data/all-data-typed';
import Lab04, { StudentDetail } from './Lab04';

test('Smoke test', () => {
	render(<Lab04 />);
	// let labElement = screen.getByText(/DATE of birth/i);
	let labElement = screen.getByText(new RegExp('DATE of birth', 'i'));
	expect(labElement).not.toBeNull();
	expect(labElement)
		.toBeInTheDocument();
});

test('StudentDetail: firstName and lastName render into the component', () => {
	let testStudent = students[0];
	let { firstName, lastName } = testStudent;
	render(<StudentDetail student={testStudent} />);
	let detailElement = screen.getByText(new RegExp(`${firstName} ${lastName}`));
	expect(detailElement.parentElement)
		.toHaveClass('card-title');
	expect(detailElement)
		.toBeInTheDocument();
});

test('StudentDetail: city and province for US', () => {
	let testStudent = students.find(s => s.country === 'US');
	if (testStudent === undefined) fail();
	let { city, province } = testStudent;
	render(<StudentDetail student={testStudent} />);
	let detailElement = screen.getByText(new RegExp(`${city}, ${province}`));
	expect(detailElement)
		.toBeInTheDocument();
});

test('StudentDetail: city and NO province for UK', () => {
	let testStudent = students.find(s => s.country === 'UK');
	if (testStudent === undefined) fail();
	let { city, country } = testStudent;
	render(<StudentDetail student={testStudent} />);
	let detailElement = screen.getByText(new RegExp(`${city}, ${country}`));
	expect(detailElement)
		.toBeInTheDocument();
});
