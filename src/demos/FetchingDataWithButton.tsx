import type React from 'react';
import { useState } from 'react';
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

export default function FetchingDataOnClick() {
	const [movies, setMovies] = useState<Movie[]>([]);

	let fetchData = () => {
		fetch('http://localhost:8000/movies')
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`Bad fetch response: ${response.status}`);
				}
			})
			.then((movies) => setMovies(movies))
			.catch((error) => console.error('Could not fetch movies:', error));
	};

	return (
		<>
			<div className="row">
				<header className="col">
					<h4>Fetching data (with promises)</h4>
				</header>
			</div>
			<div className="row mb-2">
				<div className="col">
					<button
						onClick={fetchData}
						className="btn btn-primary"
					>
						Fetch Data
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col">
					{
						// eslint-disable-next-line multiline-ternary
						movies.length === 0 ? (
							<p>Movies have not been loaded yet.</p>
						) : (
							<SortableMovieTable
								columns={columns}
								movies={movies}
							/>
						)
					}
				</div>
			</div>
		</>
	);
}
