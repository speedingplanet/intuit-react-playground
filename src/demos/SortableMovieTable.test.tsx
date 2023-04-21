import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortableMovieTable from './SortableMovieTable';
import { type Movie, movies } from '../data/all-data-typed';
import type { ColumnConfig } from './demos-types';

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
		field: 'directors',
		label: 'Director',
	},
	{
		field: 'rating',
		label: 'Rating',
	},
];

test('renders one particular movie', () => {
	render(<SortableMovieTable movies={movies} columns={columns} />);
	let firstMovie = screen.getByText(movies[0].title);
	expect(firstMovie)
		.toBeInTheDocument();
});

test('sorts on a click', async () => {
	const user = userEvent.setup();
	render(<SortableMovieTable movies={movies} columns={columns} />);
	let title = screen.getByText(/title/i);
	expect(title.textContent).not.toContain('⬆️');
	await user.click(title);
	expect(title.textContent)
		.toContain('⬆️');
});
