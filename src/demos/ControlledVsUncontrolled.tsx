import type React from 'react';
import { useState } from 'react';

export default function ControlledVsUncontrolled() {
	return (
		<section className="row">
			<div className="col">
				<ControlledInput />
			</div>
			<div className="col">
				<UncontrolledInput />
			</div>
		</section>
	);
}

export function ControlledInput() {
	const [firstName, setFirstName] = useState('');

	return (
		<div>
			<label
				htmlFor="controlled-first-name"
				className="form-label"
			>
				First Name (controlled)
			</label>
			<input
				type="text"
				name="controlled-first-name"
				id="controlled-first-name"
				className="form-control"
				value={firstName}
				onChange={(event) => setFirstName(event.currentTarget.value)}
			/>
			<p className="mt-2">
				{firstName ? `First name is "${firstName}"` : 'First name has no value yet.'}
			</p>
		</div>
	);
}

export function UncontrolledInput() {
	const [firstName, setFirstName] = useState('');

	let handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		let form = event.currentTarget;
		let data = new FormData(form);

		// data.get(name of form field NOT id)
		// Also, data.get has a weird return type
		let localFirstName = data.get('uncontrolled-first-name') as string;
		setFirstName(localFirstName);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label
					htmlFor="uncontrolled-first-name"
					className="form-label"
				>
					First Name (uncontrolled)
				</label>
				<input
					type="text"
					name="uncontrolled-first-name"
					id="uncontrolled-first-name"
					className="form-control"
				/>
				<button
					className="btn btn-sm btn-success mt-2"
					type="submit"
				>
					Get field value
				</button>
				<p className="mt-2">
					{firstName ? `First name is "${firstName}"` : 'First name has no value yet.'}
				</p>
			</form>
		</div>
	);
}
