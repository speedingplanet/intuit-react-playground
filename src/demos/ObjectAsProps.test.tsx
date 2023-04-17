import { render, screen } from '@testing-library/react';
import ObjectAsProps, { MovieDetails } from './ObjectAsProps';

test('Smoke test', () => {
	render(<ObjectAsProps />);
	let titleElement = screen.getByText(/title/i);
	expect(titleElement).not.toBeNull();
});

test('Renders a movie correctly', () => {
	let testMovie = {
		id: 5,
		title: 'Avengers: Endgame',
		year: 2019,
		director: ['Anthony Russo', 'Joe Russo'],
		writer: [
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
	let directorElement = screen.getByText(testMovie.director[0], { exact: false });
	expect(directorElement).not.toBeNull();

	expect(directorElement.textContent)
		.toContain(testMovie.director.join(''));
});
