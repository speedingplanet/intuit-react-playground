export default function Lab06() {
	return (
		<div>
			<h4>Lab 6</h4>
			<PagerBar />
		</div>
	);
}

export function PagerBar() {
	let handlePreviousClick = () => {
		console.log('You clicked on the previous button');
	};

	let handleNextClick = () => {
		console.log('You clicked on the next button');
	};

	return (
		<div className="button-bar d-flex justify-content-between">
			<button
				className="btn btn-info"
				onClick={handlePreviousClick}
			>
				Previous
			</button>
			<button
				className="btn btn-info"
				onClick={handleNextClick}
			>
				Next
			</button>
		</div>
	);
}
