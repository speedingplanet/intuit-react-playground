export default function Lab06() {
	let handlePreviousClick = () => {
		console.log('Lab06: You clicked on the previous button');
	};

	let handleNextClick = () => {
		console.log('Lab06: You clicked on the next button');
	};

	return (
		<div>
			<h4>Lab 6</h4>
			<PagerBar
				clickPreviousButton={handlePreviousClick}
				clickNextButton={handleNextClick}
			/>
		</div>
	);
}

interface PagerBarProps {
	clickPreviousButton: () => void;
	clickNextButton: () => void;
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
