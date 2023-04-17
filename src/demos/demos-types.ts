
export interface Movie {
	id: number;
	title: string;
	year: number;
	director: string | string[];
	writer: string[];
	rating: number;
	genres: string[];
}
