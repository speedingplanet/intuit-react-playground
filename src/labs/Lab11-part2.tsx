import React from 'react';
import { students } from '../data/all-data-typed';
import { type Student } from '../common/common-types';

type StudentNames = Pick<Student, 'firstName' | 'lastName' | 'id'>;

/*
 * Part 1: Render an ordered list of studentNames, displaying the first name and last name
 * Part 2: How can I sort by last name? First name?
 *
 * Part 3: What if I want to reverse the sort?
 * Part 4: How can I filter by last name?
 * Part 5: What if I want to add someone new to the list?
 *
 */

export default function Lab11Part2() {
	let studentNames: StudentNames[] = students.map((student) => {
		return {
			firstName: student.firstName,
			lastName: student.lastName,
			id: student.id,
		};
	});

	return (
		<section>
			<h4>Students</h4>
			<div className="mb-2">
				<button className="btn btn-success">Sort by last name</button>
			</div>
			<StudentList studentNames={studentNames} />
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
