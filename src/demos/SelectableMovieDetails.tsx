import { type MovieDetailsProps } from './ObjectAsProps';
import { type Movie } from './demos-types';

type MovieKeys = Array<keyof Movie>;

export default function SelectableMovieDetailsWrapper() {
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

	let fieldsToDisplay: MovieKeys = [
		'title', 'year', 'director',
	];

	return (
		<SelectableMovieDetails
			movie={raiders}
			showFields={fieldsToDisplay}
		/>
	);
}

interface SelectableMovieDetailsProps extends MovieDetailsProps {
	showFields: MovieKeys;
	// showFields: string[];
}

// export function SelectableMovieDetails(props: MovieDetailsProps & { showFields: MovieKeys }) {
export function SelectableMovieDetails(props: SelectableMovieDetailsProps) {
	return (
		<ul>
			{props.showFields.map((field, index) => (
				<li key={index}>
					{field}: {props.movie[field]}
				</li>
			))}
		</ul>
	);
}
