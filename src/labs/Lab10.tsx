import { useState } from 'react';
import { students } from '../data/all-data-typed';
import type { Student, NoOpFunction } from '../common/common-types';

export default function Lab10() {
	let [index, setIndex] = useState(0);
	let handlePreviousClick = () => {
		setIndex(Math.max(index - 1, 0));
	};

	let handleNextClick = () => {
		setIndex(Math.min(index + 1, students.length - 1));
	};

	return (
		<div>
			<h4>Lab 10</h4>
			<StudentDetail student={students[index]} />
			<div className="mt-3">
				<PagerBar
					clickPreviousButton={handlePreviousClick}
					clickNextButton={handleNextClick}
					disablePreviousButton={index === 0}
					disableNextButton={index === students.length - 1}
				/>
			</div>
		</div>
	);
}

interface PagerBarProps {
	clickPreviousButton: NoOpFunction;
	clickNextButton: NoOpFunction;
	disablePreviousButton?: boolean;
	disableNextButton?: boolean;
}
export function PagerBar({
	clickPreviousButton,
	clickNextButton,
	disablePreviousButton,
	disableNextButton,
}: PagerBarProps) {
	return (
		<div className="button-bar d-flex justify-content-between">
			<button
				className="btn btn-info"
				onClick={clickPreviousButton}
				disabled={disablePreviousButton}
			>
				Previous
			</button>
			<button
				className="btn btn-info"
				onClick={clickNextButton}
				disabled={disableNextButton}
			>
				Next
			</button>
		</div>
	);
}

interface StudentDetailProps {
	student: Student;
}

export function StudentDetail(props: StudentDetailProps) {
	let {
		firstName, lastName, province, city, country, dateOfBirth, email, postalCode,
	} =
		props.student;
	return (
		<div className="card">
			<div className="card-body">
				<div className="card-title">
					<h5>
						{firstName} {lastName}
					</h5>
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
