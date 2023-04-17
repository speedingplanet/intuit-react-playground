import { type Movie } from './demos-types';

// <MovieDetail movie={raiders} />
export default function ObjectAsProps() {
	let raiders = {
		id: 1,
		title: 'Raiders of the Lost Ark',
		year: 1981,
		director: 'Stephen Spielberg',
		writer: [
			'Lawrence Kasdan', 'George Lucas', 'Philip Kaufman',
		],
		rating: 5,
		genres: [
			'action', 'adventure', 'supernatural',
		],
	};
	return <MovieDetails movie={raiders} />;
}

// Exported so SelectableMovieDetails can use it
export interface MovieDetailsProps {
	movie: Movie;
}

export function MovieDetails(props: MovieDetailsProps) {
	let {
		title, year, director, writer, rating, genres,
	} = props.movie;

	return (
		<ul>
			<li>Title: {title}</li>
			<li>Year: {year}</li>
			<li>Director: {director}</li>
			<li>Writers: {writer}</li>
			<li>Rating: {rating}</li>
			<li>Genres: {genres}</li>
		</ul>
	);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MovieDetailsStructured(props: MovieDetailsProps) {
	return (
		<ul>
			<li>Title: {props.movie.title}</li>
			<li>Year: {props.movie.year}</li>
			<li>Director: {props.movie.director}</li>
			<li>Writers: {props.movie.writer}</li>
			<li>Rating: {props.movie.rating}</li>
			<li>Genres: {props.movie.genres}</li>
		</ul>
	);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MovieDetailsDestructured({ movie: {
	title, year, director, writer, rating, genres,
} }: MovieDetailsProps) {
	return (
		<ul>
			<li>Title: {title}</li>
			<li>Year: {year}</li>
			<li>Director: {director}</li>
			<li>Writers: {writer}</li>
			<li>Rating: {rating}</li>
			<li>Genres: {genres}</li>
		</ul>
	);
}
