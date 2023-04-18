import { render, screen } from '@testing-library/react';
import ObjectAsProps, { MovieDetails } from './ObjectAsProps';

test('Smoke test', () => {
	render(<ObjectAsProps />);
	let titleElement = screen.getByText(/title/i);
	expect(titleElement).not.toBeNull();
});

test('Renders a movie with multiple directors correctly', () => {
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
		.toContain(testMovie.director.join(', '));
});

test('Renders a movie with a single director correctly', () => {
	let testMovie = 	{
		id: 6,
		title: 'Spirited Away',
		year: 2001,
		director: 'Hayao Miyazaki',
		writer: ['Hayao Miyazaki'],
		rating: 5,
		genres: [
			'anime', 'fantasy', 'family', 'mystery',
		],
	};

	render(<MovieDetails movie={testMovie} />);
	let titleElement = screen.getByText(testMovie.title, { exact: false });
	expect(titleElement).not.toBeNull();
	let yearElement = screen.getByText(testMovie.year, { exact: false });
	expect(yearElement).not.toBeNull();
	let directorElement = screen.getByText('Director', { exact: false });
	expect(directorElement.textContent)
		.toContain(testMovie.director);
});

test('Renders a movie with a single director correctly', () => {
	let testMovie = 	{
		id: 6,
		title: 'Spirited Away',
		year: 2001,
		director: 'Hayao Miyazaki',
		writer: ['Hayao Miyazaki'],
		rating: 5,
		genres: [
			'anime', 'fantasy', 'family', 'mystery',
		],
	};

	render(<MovieDetails movie={testMovie} />);
	let titleElement = screen.getByText(testMovie.title, { exact: false });
	expect(titleElement).not.toBeNull();
	let yearElement = screen.getByText(testMovie.year, { exact: false });
	expect(yearElement).not.toBeNull();

	// getByText would fail because the director is also the writer
	let miyazakiElements = screen.getAllByText(testMovie.director, { exact: false });
	expect(miyazakiElements)
		.toHaveLength(2);
});
