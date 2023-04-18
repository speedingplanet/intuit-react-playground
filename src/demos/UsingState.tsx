import type React from 'react';
import { useState } from 'react';

export default function UsingState() {
	// let [value, setterForValue] = useState(initialValue);
	// let results = useState(1);
	// results[0] === 1;
	// results[1] is a function that can change results[0];
	const [color, setColor] = useState('red');

	let handlePickColor = (color: string) => {
		console.log(`You chose the color ${color}`);
		setColor(color);
	};

	return (
		<div className="row">
			<div className="col">
				<ColorPicker pickColor={handlePickColor}/>
			</div>
			<div className="col">
				<ColorBox color={color} />
			</div>
		</div>
	);
}

export function ColorBox({ color }: { color: string }) {
	return (
		<div
			style={{
				height: '200px',
				width: '200px',
				border: '2px black solid',
				backgroundColor: color,
			}}
		></div>
	);
}

interface ColorList {
	value: string;
	label: string;
}

interface ColorPickerProps {
	colorList?: string[] | ColorList[];
	pickColor: (color: string) => void;
}

const defaultColors = [
	'red', 'green', 'blue', 'chartreuse', 'gray', 'black', 'white', 'yellow', 'orange', 'goldenrod',
];
export function ColorPicker({ pickColor, colorList }: ColorPickerProps) {
	if (colorList === undefined || colorList.length === 0) {
		colorList = defaultColors;
	}

	return (
		<>
			<label htmlFor="color-picker">Pick a color</label>
			<div className="col">
				<select
					name="color-picker"
					id="color-picker"
					className="form-select"
					onChange={(event) => {
						pickColor(event.currentTarget.value);
					}}
				>
					{colorList.map((color, index) => {
						if (typeof color === 'string') {
							return <option key={index}>{color}</option>;
						} else {
							return (
								<option
									key={index}
									value={color.value}
								>
									{color.label}
								</option>
							);
						}
					})}
				</select>
			</div>
		</>
	);
}
