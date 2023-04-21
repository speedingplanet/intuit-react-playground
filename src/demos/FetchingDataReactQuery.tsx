import { useQuery } from 'react-query';
import SortableMovieTable from './SortableMovieTable';
import type { ColumnConfig } from './demos-types';
import { type Movie } from '../data/all-data-typed';

let columns: Array<ColumnConfig<Movie>> = [
	{
		field: 'title',
		label: 'Title',
	},
	{
		field: 'directors',
		label: 'Director',
	},
	{
		field: 'year',
		label: 'Year',
	},
	{
		field: 'rating',
		label: 'Rating',
	},
];

async function fetchData() {
	try {
		let response = await fetch('http://localhost:8000/movies');
		if (response.ok) {
			return await response.json();
		} else {
			throw new Error(`Bad fetch response: ${response.status}`);
		}
	} catch (error) {
		console.error('Could not fetch movies:', error);
	}
}

export default function FetchingDataReactQuery() {
	const {
		isLoading, isError, data, error,
	} = useQuery<Movie[], Error>('movies', fetchData);

	let response: JSX.Element;
	if (isLoading) {
		response = <p>Loading....</p>;
	} else if (isError) {
		response = <p>Error: {error.message} </p>;
	} else if (data !== undefined) {
		response = (
			<SortableMovieTable
				columns={columns}
				movies={data}
			/>
		);
	} else {
		response = <p>Received a response, but it was empty?</p>;
	}

	return (
		<>
			<div className="row">
				<header className="col">
					<h4>Fetching data (with React Query)</h4>
				</header>
			</div>
			<div className="row">
				<div className="col">{response}</div>
			</div>
		</>
	);
}
