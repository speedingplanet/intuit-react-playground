import type React from 'react';
import { useState } from 'react';
import { students } from '../data/all-data-typed';
import { type Student } from '../common/common-types';

/*
 * Part 1: Render an ordered list of studentNames, displaying the first name and last name
 * Part 2: How can I sort by last name? First name?
 * Part 3: What if I want to reverse the sort?
 * Part 4: How can I filter by last name?
 * Part 5: What if I want to add someone new to the list?
 *
 */

type StudentNames = Pick<Student, 'firstName' | 'lastName' | 'id'>;
type SortNames = Exclude<keyof StudentNames, 'id'>;
type StudentWithoutId = Omit<StudentNames, 'id'>;
type SortDirection = 'asc' | 'desc';
interface SortConfig {
	sortField?: SortNames;
	sortDirection: SortDirection;
}

let studentNames: StudentNames[] = students.map((student) => {
	return {
		firstName: student.firstName,
		lastName: student.lastName,
		id: student.id,
	};
});

export default function Lab11Part5() {
	let [sortConfig, setSortConfig] = useState<SortConfig>({ sortDirection: 'asc' });
	let [lastNameFilter, setLastNameFilter] = useState('');
	let [latestStudent, setLatestStudent] = useState<StudentNames | null>(null);

	let handleSortNames = (field: SortNames) => {
		if (field === sortConfig?.sortField && sortConfig.sortDirection === 'asc') {
			setSortConfig({
				...sortConfig,
				sortDirection: 'desc',
			});
		} else {
			setSortConfig({
				sortField: field,
				sortDirection: 'asc',
			});
		}
	};

	let handleUpdateFilter = (filterText: string) => {
		setLastNameFilter(filterText);
	};

	let handleAddStudent = (student: StudentWithoutId) => {
		let ids = studentNames.map((s) => s.id);
		let nextId = Math.max(...ids) + 1;
		let nextStudent: StudentNames = {
			...student,
			id: nextId,
		};

		/*
		 * Other viable options
		 * Add to the end of the array:
		 * studentNames.push(nextStudent)
		 *
		 * re-create the array with the new student
		 * studentNames = [...studentNames, nextStudent]
		 *
		 */
		studentNames.unshift(nextStudent);
		setLatestStudent(nextStudent);
	};

	let re = new RegExp(lastNameFilter, 'i');
	let displayNames = studentNames.filter(({ lastName }) => {
		return re.test(lastName);
	});

	displayNames.sort((a, b) => {
		// Does not sort if sortField is undefined
		if (sortConfig.sortField === undefined) {
			return 0;
		}
		return a[sortConfig.sortField].localeCompare(b[sortConfig.sortField]);
	});

	if (sortConfig.sortDirection === 'desc') displayNames.reverse();

	return (
		<section>
			<h4>Students</h4>
			<div className="row">
				<div className="col">
					<div>
						<SortWidget
							sortConfig={sortConfig}
							sortNames={handleSortNames}
						/>
						<hr />
					</div>
					<div>
						<FilterStudentsWidget updateFilter={handleUpdateFilter} />
					</div>
					<hr />
					<div>
						<AddStudentControlledWidget submitAction={handleAddStudent} />
					</div>
				</div>
				<div className="col">
					<StudentList
						studentNames={displayNames}
						latestStudent={latestStudent ?? undefined}
					/>
				</div>
			</div>
		</section>
	);
}

/*
===============================================================================
Adding Students
===============================================================================
*/
interface AddStudentWidgetProps {
	submitAction: (student: StudentWithoutId) => void;
}

export function AddStudentControlledWidget({ submitAction }: AddStudentWidgetProps) {
	const [student, setStudent] = useState<Partial<StudentWithoutId>>({});

	let updateStudent: React.FormEventHandler<HTMLInputElement> = (event) => {
		let field = event.currentTarget.name;
		let value = event.currentTarget.value;

		setStudent({
			...student,
			[field]: value,
		});
	};

	let handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		// HTML validation forces 'student' to have both firstName and lastName fields
		// which meets the criteria for being a StudentWithoutId
		submitAction(student as StudentWithoutId);
		setStudent({});
	};

	return (
		<section>
			<h5>Add a Student</h5>
			<form onSubmit={handleSubmit}>
				<div>
					<label
						htmlFor="add-first-name"
						className="form-label"
					>
						First name:
					</label>
					<input
						type="text"
						name="firstName"
						id="add-first-name"
						className="form-control"
						required
						value={student.firstName ?? ''}
						onChange={updateStudent}
					/>
				</div>
				<div>
					<label
						htmlFor="add-last-name"
						className="form-label"
					>
						Last name:
					</label>
					<input
						type="text"
						name="lastName"
						id="add-last-name"
						className="form-control"
						required
						value={student.lastName ?? ''}
						onChange={updateStudent}
					/>
				</div>
				<div className="mt-2">
					<button
						className="btn btn-sm btn-danger"
						type="submit"
					>
						Add student
					</button>
				</div>
			</form>
		</section>
	);
}

export function AddStudentUncontrolledWidget({ submitAction }: AddStudentWidgetProps) {
	let handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		let data = new FormData(event.currentTarget);
		let student: StudentWithoutId = {
			// FormData.get() returns File | string, which is annoying
			firstName: data.get('firstName') as string,
			lastName: data.get('lastName') as string,
		};

		submitAction(student);
		event.currentTarget.reset();
	};

	return (
		<section>
			<h5>Add a Student</h5>
			<form onSubmit={handleSubmit}>
				<div>
					<label
						htmlFor="add-first-name"
						className="form-label"
					>
						First name:
					</label>
					<input
						type="text"
						name="firstName"
						id="add-first-name"
						className="form-control"
					/>
				</div>
				<div>
					<label
						htmlFor="add-last-name"
						className="form-label"
					>
						Last name:
					</label>
					<input
						type="text"
						name="lastName"
						id="add-last-name"
						className="form-control"
					/>
				</div>
				<div className="mt-2">
					<button
						className="btn btn-sm btn-danger"
						type="submit"
					>
						Add student
					</button>
				</div>
			</form>
		</section>
	);
}

/*
===============================================================================
Filtering Students
===============================================================================
*/
interface FilterStudentsWidgetProps {
	updateFilter: (lastName: string) => void;
}

export function FilterStudentsWidget({ updateFilter }: FilterStudentsWidgetProps) {
	return (
		<>
			<h5>Filtering</h5>
			<div>
				<label
					htmlFor="filter-name"
					className="form-label"
				>
					Last name:
				</label>
				<input
					type="text"
					name="filter-name"
					id="filter-name"
					className="form-control"
					onChange={(event) => {
						updateFilter(event.currentTarget.value);
					}}
				/>
			</div>
		</>
	);
}

/*
===============================================================================
Sorting Students
===============================================================================
*/
interface SortWidgetProps {
	sortNames: (field: SortNames) => void;
	sortConfig: SortConfig;
}

export function SortWidget({ sortConfig, sortNames }: SortWidgetProps) {
	return (
		<section>
			<h5>Sorting</h5>
			<div className="d-flex flex-wrap">
				<div className="me-2 mb-2">
					<button
						className="btn btn-sm btn-success"
						onClick={() => {
							sortNames('firstName');
						}}
					>
						<SortIndicator
							config={sortConfig}
							field={'firstName'}
						/>
						Sort by first name
					</button>
				</div>
				<div>
					<button
						className="btn btn-sm btn-success"
						onClick={() => {
							sortNames('lastName');
						}}
					>
						<SortIndicator
							config={sortConfig}
							field={'lastName'}
						/>
						Sort by last name
					</button>
				</div>
			</div>
		</section>
	);
}

/*
===============================================================================
Sort Indicator
===============================================================================
*/
interface SortIndicatorProps {
	config: SortConfig;
	field: SortNames;
}

export function SortIndicator({ config, field }: SortIndicatorProps) {
	if (config.sortField !== field) return null;

	if (config.sortDirection === 'asc') {
		return <span>⏫</span>;
	} else {
		return <span>⏬</span>;
	}
}

/*
===============================================================================
Student List
===============================================================================
*/
interface StudentListProps {
	studentNames: StudentNames[];
	latestStudent?: StudentNames;
}

let latestStudentStyle = {
	backgroundColor: 'yellow',
};

export function StudentList({ studentNames, latestStudent }: StudentListProps) {
	return (
		<ol>
			{studentNames.map(({
				firstName, lastName, id,
			}) => (
				<li
					key={id}
					style={latestStudent && id === latestStudent.id ? latestStudentStyle : {}}
				>
					{firstName} {lastName}
				</li>
			))}
		</ol>
	);
}
