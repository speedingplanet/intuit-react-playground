import React from 'react';
import { movies } from '../data/all-data-typed';

export default function IterativeList() {
	return (
		<>
			<h4>Iterative List of Movies</h4>
			<ul>
				{
					movies.map(movie => (
						<li key={movie.id}>{movie.title}</li>
					))
				}
			</ul>
		</>
	);
}
