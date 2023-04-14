import React from 'react';

export default function Lab03() {
	let exampleStudent = {
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

	const { firstName, lastName } = exampleStudent;

	return (
		<section>
			<h3>Lab 3</h3>
			<StudentDetail firstName={firstName} lastName={lastName} />
		</section>
	);
}

interface StudentDetailProps {
	firstName: string;
	lastName: string;
}

function StudentDetail(props: StudentDetailProps) {
	let { firstName, lastName } = props;
	return (
		<p>The student is {firstName} {lastName}</p>
	);
}
