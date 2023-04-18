import React from 'react';
import { render, screen } from '@testing-library/react';
import { MovieRow } from './MovieTable';
import type { ColumnConfig, Movie } from './demos-types';

let movie = {
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

const columns: Array<ColumnConfig<Movie>> = [
	{
		field: 'title',
		label: 'Title',
	},
	{
		field: 'year',
		label: 'Year',
	},
	{
		field: 'director',
		label: 'Director',
	},
	{
		field: 'rating',
		label: 'Rating',
	},
];

const fields = columns.map(c => c.field);

test('renders a movie title (getByText exact)', () => {
	// Render your component
	render(<MovieRow movie={movie} fields={fields}/>);

	// Look for parts of your component that reflect the rendering state/props
	let titleDiv = screen.getByText(movie.title);

	// Write expect(s) to test
	expect(titleDiv)
		.toBeInTheDocument();
});

test('renders a movie director (getByText regexp)', () => {
	render(<MovieRow movie={movie} fields={fields} />);
	let directorDiv = screen.getByText(/spiel/i);
	expect(directorDiv)
		.toBeInTheDocument();
});

test('renders a movie year (getByText function)', () => {
	render(<MovieRow movie={movie} fields={fields}/>);
	let year = screen.getByText(function (content) {
		let contentAsNumber = Number(content);
		return Number.isInteger(contentAsNumber) && contentAsNumber > 1900;
	});
	expect(year)
		.toBeInTheDocument();
});
