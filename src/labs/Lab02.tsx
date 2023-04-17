export default function Lab02() {
	let studentFirstName = 'Christopher';
	let studentLastName = 'Smith';

	return (
		<section>
			<h3>Lab 2</h3>
			<StudentDetail
				firstName={studentFirstName}
				lastName={studentLastName}
			/>
		</section>
	);
}

interface StudentDetailProps {
	firstName: string;
	lastName: string;
}

export function StudentDetail({ firstName, lastName }: StudentDetailProps) {
	return (
		// <p>The student is {props.firstName} {props.lastName} </p>
		<p>
			The student is {firstName} {lastName}{' '}
		</p>
	);
}
