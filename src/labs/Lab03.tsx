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

	return (
		<section>
			<h3>Lab 3</h3>
			<StudentDetail student={exampleStudent} />
		</section>
	);
}

interface Student {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	email: string;
	phoneNumber: string;
	city: string;
	province: string | null;
	country: string;
	postalCode: string;
	id: number;
}

interface StudentDetailProps {
	student: Student;
}

export function StudentDetail(props: StudentDetailProps) {
	let {
		firstName, lastName, province, city, country, dateOfBirth, email, postalCode,
	} = props.student;

	return (
		<div className="card">
			<div className="card-body bg-primary text-white">
				<div className="card-title">
					<h5>{firstName} {lastName}</h5>
				</div>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">{email}</li>
				<li className="list-group-item">Date of birth: {dateOfBirth}</li>
				<li className="list-group-item">
					{city}, {province ?? ''} {country}
				</li>
				<li className="list-group-item">{postalCode}</li>
			</ul>
		</div>
	);
}
