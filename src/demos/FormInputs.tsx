import { useState } from 'react';

export default function FormInputs() {
	let [textInput, setTextInput] = useState('');
	let [selectInput, setSelectInput] = useState('');
	let [bootstrapInput, setBootstrapInput] = useState('');

	let handleTextUpdate: React.FormEventHandler<HTMLInputElement> = (event) => {
		// Validation?
		// Auto complete?
		// Send input off to an remote API?

		setTextInput(event.currentTarget.value);
	};

	return (
		<>
			<div className="row">
				<div className="col">
					<h3>Form inputs and React</h3>
				</div>
			</div>
			<div className="row p-3">
				<div className="col">
					<div>
						<label
							htmlFor="ex-text-input"
							className="form-label"
						>
							Text input
						</label>
						<input
							type="text"
							className="form-control"
							id="ex-text-input"
							placeholder="placeholder text"
							value={textInput}
							onChange={handleTextUpdate}
						/>
					</div>
				</div>
				<div className="col">
					<p>The value of the form field is {textInput}</p>
				</div>
			</div>
			<div className="row p-3 border-top">
				<div className="col">
					<label
						htmlFor="ex-select"
						className="form-label"
					>
						Select List
					</label>
					<select
						className="form-select"
						id="ex-select"
						value={selectInput}
						onChange={(e) => setSelectInput(e.currentTarget.value)}
					>
						<option>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
				<div className="col">
					<p>The select value is {selectInput}</p>
				</div>
			</div>
			<div className="row p-3 border-top">
				<div className="col">
					<BootstrapInput
						id="ex-bootstrap-input"
						value={bootstrapInput}
						onChange={(e) => setBootstrapInput(e.currentTarget.value)}
						labelText="Bootstrap Input"
					/>
				</div>
				<div className="col">
					<p>Value of the Bootstrap input: {bootstrapInput}</p>
				</div>
			</div>
		</>
	);
}

interface BootstrapInputProps extends React.ComponentPropsWithoutRef<'input'> {
	containerClass?: string;
	labelClass?: string;
	labelText?: string;
}

export function BootstrapInput(props: BootstrapInputProps) {
	let {
		containerClass, labelClass, labelText, ...rest
	} = props;

	return (
		<div className={containerClass}>
			<label
				htmlFor={rest.id}
				className={`form-label ${labelClass}`}
			>
				{labelText ?? 'Input'}
			</label>
			<input
				{...rest}
				type={rest.type ?? 'text'}
				className={`form-control ${rest.className}`}
			/>
		</div>
	);
}
