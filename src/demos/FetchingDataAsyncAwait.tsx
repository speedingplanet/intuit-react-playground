import React, { useState, useEffect } from 'react';
import SortableMovieTable from './SortableMovieTable';
import { type Movie } from '../data/all-data-typed';
import type { ColumnConfig } from './demos-types';

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

async function fetchData(setMovies: (movies: Movie[]) => void) {
	try {
		let response = await fetch('http://localhost:8000/movies');
		if (response.ok) {
			let movies = await response.json();
			setMovies(movies);
		} else {
			throw new Error(`Bad fetch response: ${response.status}`);
		}
	} catch (error) {
		console.error('Could not fetch movies:', error);
	}
}

export default function FetchingDataAsyncAwait() {
	const [movies, setMovies] = useState<Movie[]>([]);

	// Fetches movies only once, at component load time
	// useEffect(what to do, [what to watch for changes])
	useEffect(() => {
		// 'void' because we don't care about the return value of the Promise
		void fetchData(setMovies);
	}, []);

	return (
		<>
			<div className="row">
				<header className="col">
					<h4>Fetching data (with async/await)</h4>
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
