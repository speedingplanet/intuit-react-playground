export default function Lab05() {
	return (
		<div>
			<h4>Lab 5</h4>
			<PagerBarUsingParameters />
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

// Using React.MouseEventHandler type
export function BetterPagerBar() {
	let handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		console.log(`You clicked the ${event.currentTarget.name} button`);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let handleButtonClickEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(`You clicked the ${event.currentTarget.name} button`);
	};

	return (
		<div className="button-bar d-flex justify-content-between">
			<button
				className="btn btn-info"
				onClick={handleButtonClick}
				name="previous"
			>
				Previous
			</button>
			<button
				className="btn btn-info"
				onClick={handleButtonClick}
				name="next"
			>
				Next
			</button>
		</div>
	);
}

// Invoke the event handler in-line, passing parameters as needed.
// No event object.
export function PagerBarUsingParameters() {
	let handleButtonClick = (label: string) => {
		console.log(`You clicked the ${label} button`);
	};

	return (
		<div className="button-bar d-flex justify-content-between">
			<button
				className="btn btn-info"
				onClick={() => {
					handleButtonClick('previous');
				}}
			>
				Previous
			</button>
			<button
				className="btn btn-info"
				onClick={() => {
					handleButtonClick('next');
				}}
			>
				Next
			</button>
		</div>
	);
}

// In-line event handler, no need to specify type as it's inferred
export function InlinePagerBar() {
	return (
		<div className="button-bar d-flex justify-content-between">
			<button
				className="btn btn-info"
				onClick={(event) => {
					console.log(`You clicked the ${event.currentTarget.name} button`);
				}}
				name="previous"
			>
				Previous
			</button>
			<button
				className="btn btn-info"
				onClick={(event) => {
					console.log(`You clicked the ${event.currentTarget.name} button`);
				}}
				name="next"
			>
				Next
			</button>
		</div>
	);
}
