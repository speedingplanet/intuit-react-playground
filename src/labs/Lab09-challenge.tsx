// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { type NoOpFunction } from '../common/common-types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let words = [
	'apple', 'banana', 'car', 'dog', 'echo',
];

export default function Lab09() {
	const [index, setIndex] = useState(0);
	let handlePreviousClick = () => {
		/*
		if (index > 0) {
			setIndex(index - 1);
		} else {
			setIndex(0);
		} */

		// index !== 0 ? setIndex(index - 1) : setIndex(0);
		// setIndex(index !== 0 ? index - 1 : 0);
		setIndex(Math.max(0, index - 1));
	};

	let handleNextClick = () => {
		/*
		if (index < words.length - 1) {
			setIndex(index + 1);
		} else {
			setIndex(words.length - 1);
		}
		*/
		setIndex(Math.min(words.length - 1, index + 1));
	};

	return (
		<div>
			<h4>Lab 9</h4>
			<div style={{ height: '35px' }} className="text-center">{words[index]}</div>
			<PagerBar
				clickPreviousButton={handlePreviousClick}
				clickNextButton={handleNextClick}
				// index={index}
				// maxIndex={words.length - 1}
				disableNext={index === words.length - 1}
				disablePrevious={index === 0}
			/>
		</div>
	);
}

interface PagerBarProps {
	clickPreviousButton: NoOpFunction;
	clickNextButton: NoOpFunction;
	/*
	index: number;
	maxIndex: number;
	*/
	disablePrevious: boolean;
	disableNext: boolean;
}
export function PagerBar({
	clickPreviousButton, clickNextButton, /* index, maxIndex, */ disableNext, disablePrevious,
}: PagerBarProps) {
	/*
	let disablePrevious = index === 0;
	let disableNext = index === maxIndex;
	*/
	return (
		<div className="button-bar d-flex justify-content-between">
			<button
				className="btn btn-info"
				onClick={clickPreviousButton}
				disabled={disablePrevious}
			>
				Previous
			</button>
			<button
				className="btn btn-info"
				onClick={clickNextButton}
				disabled={disableNext}
			>
				Next
			</button>
		</div>
	);
}
