import React, { useState } from 'react';
import { students } from '../data/all-data-typed';
import { type Student } from '../data/all-data-typed';

/*
 * Part 1: Render an ordered list of studentNames, displaying the first name and last name
 * Part 2: How can I sort by last name? First name?
 * Part 3: What if I want to reverse the sort?
 *
 * Part 4: How can I filter by last name?
 * Part 5: What if I want to add someone new to the list?
 *
 */

type StudentNames = Pick<Student, 'firstName' | 'lastName' | 'id'>;
type SortNames = Exclude<keyof StudentNames, 'id'>;

let studentNames: StudentNames[] = students.map((student) => {
	return {
		firstName: student.firstName,
		lastName: student.lastName,
		id: student.id,
	};
});

export default function Lab11Part3() {
	let [sortField, setSortField] = useState<SortNames | undefined>();

	let handleSortStudents = (field: SortNames) => {
		setSortField(field);
	};

	studentNames.sort((a, b) => {
		// Does not sort if sortField is undefined
		if (sortField === undefined) {
			return 0;
		}
		return a[sortField].localeCompare(b[sortField]);
	});

	return (
		<section>
			<div className="row">
				<div className="col mb-2">
					<h4>Students</h4>
					<button
						className="btn btn-sm btn-success"
						onClick={() => {
							handleSortStudents('firstName');
						}}
					>
						{sortField === 'firstName' && '☑️'} Sort by first name
					</button>
					&nbsp;
					<button
						className="btn btn-sm btn-success"
						onClick={() => {
							handleSortStudents('lastName');
						}}
					>
						{sortField === 'lastName' && '☑️'} Sort by last name
					</button>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<StudentList studentNames={studentNames} />
				</div>
			</div>
		</section>
	);
}

interface StudentListProps {
	studentNames: StudentNames[];
}

export function StudentList({ studentNames }: StudentListProps) {
	return (
		<ol>
			{studentNames.map(({
				firstName, lastName, id,
			}) => (
				<li key={id}>
					{firstName} {lastName}
				</li>
			))}
		</ol>
	);
}
