import { render, screen } from '@testing-library/react';
import ObjectAsProps, { MovieDetails } from './ObjectAsProps';
import { type Movie } from '../data/all-data-typed';

test('Smoke test', () => {
	render(<ObjectAsProps />);
	let titleElement = screen.getByText(/title/i);
	expect(titleElement).not.toBeNull();
});

test('Renders a movie with multiple directors correctly', () => {
	let testMovie: Movie = {
		id: 5,
		title: 'Avengers: Endgame',
		year: 2019,
		directors: ['Anthony Russo', 'Joe Russo'],
		writers: [
			'Christopher Markus', 'Stephen McFeely', 'Stan Lee',
		],
		rating: 5,
		genres: [
			'comic-book', 'sci-fi', 'action', 'adventure',
		],
	};

	render(<MovieDetails movie={testMovie} />);
	let titleElement = screen.getByText(testMovie.title, { exact: false });
	expect(titleElement).not.toBeNull();
	let yearElement = screen.getByText(testMovie.year, { exact: false });
	expect(yearElement).not.toBeNull();
	let directorElement = screen.getByText(testMovie.directors[0], { exact: false });
	expect(directorElement).not.toBeNull();

	expect(directorElement.textContent)
		.toContain(testMovie.directors.join(', '));
});
