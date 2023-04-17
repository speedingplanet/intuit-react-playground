import { type NoOpFunction } from '../common/common-types';

export default function Lab08() {
	let handlePreviousClick = () => {
		console.log('Lab08: You clicked on the previous button');
	};

	let handleNextClick = () => {
		console.log('Lab08: You clicked on the next button');
	};

	return (
		<div>
			<h4>Lab 8</h4>
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
