import { useState } from 'react';
import { type NoOpFunction } from '../common/common-types';

export default function Lab08() {
	let [message, setMessage] = useState('');
	let handlePreviousClick = () => {
		setMessage('Lab08: You clicked on the previous button');
	};

	let handleNextClick = () => {
		setMessage('Lab08: You clicked on the next button');
	};

	return (
		<div>
			<h4>Lab 8</h4>
			<div style={{ height: '35px' }}>{message}</div>
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
