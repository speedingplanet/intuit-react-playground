import React from 'react';

interface HelloWorldProps {
	userName?: string;
}

function HelloWorld({ userName }: HelloWorldProps) {
	return (
		<div>Hello, {userName ?? 'everyone'}! The sum of 2 and 5 is {2 + 5}</div>
	);
}

export default HelloWorld;
