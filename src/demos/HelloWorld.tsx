/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable no-unneeded-ternary */
import React from 'react';

interface HelloWorldProps {
	// The ? makes this property optional
	userName?: string;
}

// Could set a default value for the prop this way:
// function HelloWorld({ userName = 'everybody' }: HelloWorldProps) {

function HelloWorld({ userName }: HelloWorldProps) {
	// Because userName is optional (above), we have to account for the possibility
	// that it is not defined.

	return (
	// Ternary operator ?: is like an in-line if conditional
	// <div>Hello, {userName ? userName : 'everybody'}! The sum of 2 and 5 is {2 + 5}</div>

	// Use an || (or) operator (downside is that some valid values might render as false)
	// <div>Hello, {userName || 'everybody'}! The sum of 2 and 5 is {2 + 5}</div>

		// Modern JS, use the "nullish coalescing" operator: ??
		// is userName either null or undefined? Then use 'everybody'
		<div>
			Hello, {userName ?? 'everybody'}! The sum of 2 and 5 is {2 + 5}
		</div>
	);
}

export default HelloWorld;
