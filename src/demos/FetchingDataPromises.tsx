import type React from 'react';
import { useState, useEffect } from 'react';
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

export default function FetchingDataPromises() {
	const [movies, setMovies] = useState<Movie[]>([]);

	/*
	 * Fetches movies only once, at component load time
	 * useEffect(what to do, [what to watch for changes])
	 * what to watch for changes is important
	 * useEffect(fn); No changes to watch for, runs every render
	 * useEffect(fn, []); Watch for a change to the empty set (impossible), run once.
	 * useEffect(fn, [a, b, c]); Changes to a, b, or c will re-run fn.
	 *
	 */
	useEffect(() => {
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
	}, []);

	return (
		<>
			<div className="row">
				<header className="col">
					<h4>Fetching data (with promises)</h4>
				</header>
			</div>
			<div className="row">
				<div className="col">
					{
						// eslint-disable-next-line multiline-ternary
						movies.length === 0 ? (
							<p>Loading movies....</p>
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
