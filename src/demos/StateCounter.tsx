import React, { useState } from 'react';

export default function StateCounter() {
	const [counter, setCounter] = useState(1);
	return (
		<div>
			<div>Value: {counter}</div>
			<div>
				<button
					className="btn btn-primary"
					onClick={() => {
						setCounter(counter + 1);
					}}
				>
					Add 1
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						setCounter(counter - 1);
					}}
				>
					Subtract 1
				</button>
			</div>
		</div>
	);
}
