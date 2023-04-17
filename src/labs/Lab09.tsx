import { useState } from 'react';
import { type NoOpFunction } from '../common/common-types';

let words = [
	'apple', 'banana', 'car', 'dog', 'echo',
];

export default function Lab09() {
	let [index, setIndex] = useState(0);
	let handlePreviousClick = () => {
		setIndex(Math.max(index - 1, 0));
	};

	let handleNextClick = () => {
		setIndex(Math.min(index + 1, words.length - 1));
	};

	return (
		<div>
			<h4>Lab 9</h4>
			<div style={{ height: '35px' }}>{[words[index]]}</div>
			<PagerBar
				clickPreviousButton={handlePreviousClick}
				clickNextButton={handleNextClick}
				disablePreviousButton={index === 0}
				disableNextButton={index === words.length - 1}
			/>
		</div>
	);
}

interface PagerBarProps {
	clickPreviousButton: NoOpFunction;
	clickNextButton: NoOpFunction;
	disablePreviousButton?: boolean;
	disableNextButton?: boolean;
}
export function PagerBar({
	clickPreviousButton,
	clickNextButton,
	disablePreviousButton,
	disableNextButton,
}: PagerBarProps) {
	return (
		<div className="button-bar d-flex justify-content-between">
			<button
				className="btn btn-info"
				onClick={clickPreviousButton}
				disabled={disablePreviousButton}
			>
				Previous
			</button>
			<button
				className="btn btn-info"
				onClick={clickNextButton}
				disabled={disableNextButton}
			>
				Next
			</button>
		</div>
	);
}
