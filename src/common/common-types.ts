export type NoOpFunction = () => void;
export interface Student {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	email: string;
	phoneNumber: string;
	city: string;
	province: string | null;
	country: string;
	postalCode: string;
	id: number;
}
