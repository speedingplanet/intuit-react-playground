import { FullFormControlled, type MovieWithoutId } from '../FullForm';
import { type Movie } from '../../data/all-data-typed';
import {
	gql, useLazyQuery, useMutation, useQuery
} from '@apollo/client';
import { MovieDetails } from '../ObjectAsProps';

/*
Component flow:

<PickMovieByTitle>
Get a list of movie titles and ids
Display the titles as a drop-down (with ids as values)
User selects an option, which emits an event with the selected movie's id

At the top level, we capture the id, and query the details of that movie
Once we've loaded the movie, we pass the details to the form
User updates the form
User clicks submit button, which emit an event with the movie updates

Top level component receives updated movie values
Send updated movie to GraphQL
Get results back
Display results
*/

let UPDATE_MOVIE = gql`
	mutation Mutation($updateMovieId: Int!, $movie: UpdateMovie!) {
		updateMovie(id: $updateMovieId, movie: $movie) {
			id
			title
			year
			directors
			writers
			rating
			genres
		}
	}
`;

const GET_MOVIE_BY_ID = gql`
	query GetMoviesById($id: Int!) {
		movies(id: $id) {
			id
			title
			year
			directors
			writers
			rating
			genres
		}
	}
`;

const GET_TITLES_AND_IDS = gql`
	query GetMovies {
		movies {
			title
			id
		}
	}
`;

export default function UpdatingMoviesWithGraphQL() {
	const [updateMovie, { data: mutationData }] = useMutation(UPDATE_MOVIE);
	const [getMovieById, { data: movieData }] = useLazyQuery<{ movies: Movie[] }>(GET_MOVIE_BY_ID);

	const handleSubmitAction = async (movieUpdates: MovieWithoutId) => {
		let updatedMovie = {
			...movieData?.movies[0],
			...movieUpdates,
		};

		let id = updatedMovie.id;

		delete updatedMovie.__typename;
		delete updatedMovie.id;

		await updateMovie({
			variables: {
				updateMovieId: id,
				movie: updatedMovie,
			},
		});
	};

	console.log('fetched movies', movieData);

	return (
		<section className="row">
			<div className="col">
				<PickMovieByTitle selectMovie={(id) => getMovieById({ variables: { id } })} />
				<FullFormControlled
					submitAction={handleSubmitAction}
					submitButtonLabel="Update movie"
					formLabel="Updating a movie"
					movieToEdit={movieData?.movies[0]}
				/>
			</div>
			<div className="col">
				{mutationData?.updateMovie
					? (
						<MovieDetails movie={mutationData.updateMovie} />
					)
					: (
						<p>No updates yet</p>
					)}
			</div>
		</section>
	);
}

type TitleAndId = Pick<Movie, 'title' | 'id'>;
interface PickMovieByTitleProps {
	selectMovie: (id: number) => void;
}
export function PickMovieByTitle({ selectMovie }: PickMovieByTitleProps) {
	const {
		loading, error, data,
	} = useQuery<{ movies: TitleAndId[] }>(GET_TITLES_AND_IDS);

	return (
		<>
			<label
				htmlFor="movie-titles"
				className="form-label"
			>
				Select a movie
			</label>
			<select
				onChange={(event) => selectMovie(Number(event.currentTarget.value))}
				name="movie-titles"
				id="movie-titles"
				className="form-select"
				disabled={loading}
			>
				<option value="">Pick a movie...</option>
				{data?.movies.map(({ title, id }) => (
					<option
						value={id}
						key={id}
					>
						{title}
					</option>
				))}
			</select>
		</>
	);
}
