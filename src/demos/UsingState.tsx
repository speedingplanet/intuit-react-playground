import type React from 'react';
import { useState } from 'react';

export default function UsingState() {
	// let [value, setterForValue] = useState(initialValue);
	// let results = useState(1);
	// results[0] === 1;
	// results[1] is a function that can change results[0];
	const [color, setColor] = useState('red');

	let handlePickColor: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		console.log(`You chose the color ${event.currentTarget.value}`);
		setColor(event.currentTarget.value);
	};

	return (
		<div className="row">
			<label htmlFor="color-picker">Pick a color</label>
			<div className="col">
				<select
					name="color-picker"
					id="color-picker"
					className="form-select"
					onChange={handlePickColor}
				>
					<option value="red">Red</option>
					<option value="yellow">Yellow</option>
					<option value="orange">Orange</option>
					<option value="green">Green</option>
					<option value="blue">Blue</option>
				</select>
			</div>
			<div className="col">
				<div
					style={{
						height: '200px',
						width: '200px',
						border: '2px black solid',
						backgroundColor: color,
					}}
				></div>
			</div>
		</div>
	);
}
