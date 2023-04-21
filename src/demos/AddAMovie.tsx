import { FullFormControlled, type MovieWithoutId } from './FullForm';
import { type Movie } from '../data/all-data-typed';
import { useEffect, useState } from 'react';

async function addMovie(newMovie: MovieWithoutId) {
	let fetchOptions: RequestInit = {
		body: JSON.stringify(newMovie),
		method: 'post',
		headers: {
			'Content-type': 'application/json',
		},
	};

	let response = await fetch('http://localhost:8000/movies', fetchOptions);
	if (response.ok) {
		let movie: Movie = await response.json();
		return movie;
	} else {
		throw Error(`Bad response ${response.status}`);
	}
}

export default function AddAMovie() {
	let [movie, setMovie] = useState<MovieWithoutId | null>(null);
	let [message, setMessage] = useState('');

	useEffect(() => {
		if (movie) {
			addMovie(movie)
				.then((movie) => {
					setMessage(`${movie.title} added with id ${movie.id}`);
				})
				.catch(error => console.error('addMovie failed:', error.message));
		}
	}, [movie]);

	let handleSubmitAction = (newMovie: MovieWithoutId) => {
		console.log('adding movie:', newMovie);
		setMovie(newMovie);
	};

	return (
		<section>
			<p>{message}</p>
			<FullFormControlled
				submitAction={handleSubmitAction}
				submitButtonLabel="Add movie"
			/>
		</section>
	);
}
