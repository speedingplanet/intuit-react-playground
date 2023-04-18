import React, { useState } from 'react';

export default function CounterState() {
	let [counter, setCounter] = useState(0);
	// let counter = 0;

	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<div className="card-header">State-enabled Counter</div>
					<div className="card-body">
						<div className="text-center mb-2">
							<span className="h3">Counter: {counter}</span>
						</div>

						<div className="text-center">
							<button
								className="btn btn-primary me-3"
								onClick={() => {
									// setCounter(counter + 1);
									setCounter((counter) => counter + 1);
								}}>
                Add
							</button>
							<button
								className="btn btn-primary"
								onClick={() => {
									setCounter(counter - 1);
								}}>
                Subtract
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
