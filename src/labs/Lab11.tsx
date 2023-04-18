import React from 'react';
import { students } from '../data/all-data-typed';
import { type Student } from '../common/common-types';

type StudentNames = Pick<Student, 'firstName' | 'lastName' | 'id'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let studentNames: StudentNames[] = students.map((student) => {
	return {
		firstName: student.firstName,
		lastName: student.lastName,
		id: student.id,
	};
});

/*
 * Part 1: Render an ordered list of studentNames, displaying the first name and last name
 *
 *
 */

export default function Lab11() {
	return <div>Lab11</div>;
}

export function StudentList() {}
