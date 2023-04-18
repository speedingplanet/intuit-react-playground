// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { type NoOpFunction } from '../common/common-types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let words = [
	'apple', 'banana', 'car', 'dog', 'echo',
];

export default function Lab09() {
	let handlePreviousClick = () => {};

	let handleNextClick = () => {};

	return (
		<div>
			<h4>Lab 9</h4>
			<div style={{ height: '35px' }}>What goes here?</div>
			<PagerBar
				clickPreviousButton={handlePreviousClick}
				clickNextButton={handleNextClick}
			/>
		</div>
	);
}

interface PagerBarProps {
	clickPreviousButton: NoOpFunction;
	clickNextButton: NoOpFunction;
}
export function PagerBar({ clickPreviousButton, clickNextButton }: PagerBarProps) {
	return (
		<div className="button-bar d-flex justify-content-between">
			<button
				className="btn btn-info"
				onClick={clickPreviousButton}
			>
				Previous
			</button>
			<button
				className="btn btn-info"
				onClick={clickNextButton}
			>
				Next
			</button>
		</div>
	);
}
