import React, { useState } from 'react';
import { students } from '../data/all-data-typed';
import { type Student } from '../common/common-types';

/*
* Part 1: Render an ordered list of studentNames, displaying the first name and last name
* Part 2: How can I sort by last name? First name?
* Part 3: What if I want to reverse the sort?
* Part 4: How can I filter by last name?
*
* Part 5: What if I want to add someone new to the list?
*
*/

type StudentNames = Pick<Student, 'firstName' | 'lastName' | 'id'>;
type SortNames = Exclude<keyof StudentNames, 'id'>;
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

export default function Lab11Part4() {
	let [sortConfig, setSortConfig] = useState<SortConfig>({ sortDirection: 'asc' });
	let [lastNameFilter, setLastNameFilter] = useState('');

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
				</div>
				<div className="col">
					<StudentList studentNames={displayNames} />
				</div>
			</div>
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
					className="col-form-label col-4 pe-0"
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
