import React, { useState } from 'react';
import { orderBy } from 'lodash-es';
import './demos.css';
import type { Movie, SortConfig } from './demos-types';
import { MovieBody, type MovieTableProps } from './MovieTable';

export default function SortableMovieTable({ movies, columns }: MovieTableProps) {
	const [sortConfig, setSortConfig] = useState<SortConfig>({
		sortColumn: undefined,
		sortDirection: 'asc',
	});

	const handleClickHeader = (field: string) => {
		let nextSortState: SortConfig = {
			sortColumn: field,
			sortDirection: 'asc',
		};

		if (field === sortConfig.sortColumn && sortConfig.sortDirection === 'asc') {
			nextSortState.sortDirection = 'desc';
		}

		setSortConfig(nextSortState);
	};

	let displayMovies = orderBy(movies, sortConfig.sortColumn, sortConfig.sortDirection);

	return (
		<div className={`movie-container mc-${columns.length}`}>
			<SortableMovieHeaders
				columns={columns}
				sortConfig={sortConfig}
				clickHeader={handleClickHeader}
			/>
			<MovieBody
				columns={columns}
				movies={displayMovies}
			/>
		</div>
	);
}

type SortableMovieHeaderProps = {
	clickHeader: (field: keyof Movie) => void;
	sortConfig: SortConfig;
} & Pick<MovieTableProps, 'columns'>;

export function SortableMovieHeaders({
	columns,
	clickHeader,
	sortConfig,
}: SortableMovieHeaderProps) {
	return (
		<>
			{columns.map((c) => (
				<div
					className="movie-headers clickable"
					onClick={() => {
						clickHeader(c.field);
					}}
					key={c.field}
				>
					{c.label}&nbsp;{getSortIndicator(c.field, sortConfig, ['⬆️', '⬇️'])}
				</div>
			))}
		</>
	);
}

function getSortIndicator(field: keyof Movie, sortConfig: SortConfig, indicators: string[]) {
	if (field !== sortConfig.sortColumn) return '';
	return sortConfig.sortDirection === 'asc' ? indicators[0] : indicators[1];
}
