
export interface Movie {
	id: number;
	title: string;
	year: number;
	director: string | string[];
	writer: string[];
	rating: number;
	genres: string[];
}

export type SortDirection = 'asc' | 'desc' | undefined;
export interface SortConfig {
	sortColumn: string | undefined;
	sortDirection: SortDirection;
}

export interface ColumnConfig<T> {
	field: keyof T;
	label: string;
}
