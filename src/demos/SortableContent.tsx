import SortableMovieTable from './SortableMovieTable';
import { movies } from '../data/all-data-typed';
import type { ColumnConfig, Movie } from './demos-types';

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
		field: 'rating',
		label: 'Rating',
	},

];

export default function StandaloneSortableMovieTable() {
	return <SortableMovieTable movies={movies} columns={columns} />;
}
