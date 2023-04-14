export default function Lab01() {
	let studentFirstName = 'Christopher';
	let studentLastName = 'Smith';

	return (
		<section>
			<h3>Lab 1</h3>
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

// function StudentDetail(props: StudentDetailProps) {
function StudentDetail({ firstName, lastName }: StudentDetailProps) {
	return (
		// <p>The student is {props.firstName} {props.lastName} </p>
		<p>
			The student is {firstName} {lastName}{' '}
		</p>
	);
}
