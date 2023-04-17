import { render, screen } from '@testing-library/react';
import Lab04, { StudentDetail } from './Lab04';

let testStudent = {
	firstName: 'Christopher',
	lastName: 'Smith',
	dateOfBirth: '2000-02-13',
	email: 'Christopher_Smith@hotmail.com',
	phoneNumber: '(848) 646-2354',
	city: 'Kilgore',
	province: 'TX',
	country: 'US',
	postalCode: '75663',
	id: 3,
};

let ukStudent = {
	firstName: 'Maria',
	lastName: 'Ijaz',
	dateOfBirth: '1999-01-12',
	email: 'Maria_Ijaz@yandex.ru',
	phoneNumber: '07624 580397',
	city: 'Newcastle upon Tyne',
	province: null,
	country: 'UK',
	postalCode: 'NE1 4ST',
	id: 48,
};

test('Smoke test', () => {
	render(<Lab04 />);
	let labElement = screen.getByText(/Date of birth/i);
	expect(labElement).not.toBeNull();
	expect(labElement)
		.toBeInTheDocument();
});

test('StudentDetail: firstName and lastName render into the component', () => {
	let { firstName, lastName } = testStudent;
	render(<StudentDetail student={testStudent} />);
	let detailElement = screen.getByText(new RegExp(`${firstName} ${lastName}`));
	expect(detailElement.parentElement)
		.toHaveClass('card-title');
	expect(detailElement)
		.toBeInTheDocument();
});

test('StudentDetail: city and province for US', () => {
	let { city, province } = testStudent;
	render(<StudentDetail student={testStudent} />);
	let detailElement = screen.getByText(new RegExp(`${city}, ${province}`));
	expect(detailElement)
		.toBeInTheDocument();
});

test('StudentDetail: city and NO province for UK', () => {
	let { city, country } = ukStudent;
	render(<StudentDetail student={ukStudent} />);
	let detailElement = screen.getByText(new RegExp(`${city}, ${country}`));
	expect(detailElement)
		.toBeInTheDocument();
});
