/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

// & merges types or interfaces
type A = { firstName: string };
type B = { lastName: string };
type C = A & B;

// Unions
type Person = {
	firstName: string;
	lastName: string;
};

type PersonKey = keyof Person;
// type PersonKey = 'firstName' | 'lastName'

type UnionExample = 'up' | 'down' | 'left' | 'right';

type NumberOrString = number | string;
type JSPrimitive = number | string | boolean;

let key: PersonKey = 'lastName';
let direction: UnionExample = 'left';

let x: NumberOrString = 10;
x = 'Hello';

// Not allowed
// x = true;

interface Shape {
	area: number;
	perimeter: number;
}

interface Circle extends Shape {
	radius: number;
}

type Vehicle = {
	make: string;
	model: string;
};

type HasColor = {
	color: string;
};

type Car = Vehicle & { numberOfWheels: number; transmisstion: string } & HasColor;

type CircularCar = Car & Circle;

interface ICircularCar extends Car, Circle {
	someOtherProp: string;
}

// Typing a function
function add(a: number, b: number): number {
	return a + b;
}
// Compare to Java: number add(number x, number y) {}

// Function type definition
type MathFunction = (x: number, y: number) => number;

// Assign the function type to a variable
let multiply: MathFunction = function (i, j) {
	return i * j;
};
