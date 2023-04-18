import React, { useState } from 'react';

export default function ComponentCommunication() {
	return (
		<div>
			<h3>Component Communication</h3>
			<Parent />
		</div>
	);
}

function Parent() {
	let [message, setMessage] = useState('The button was NOT clicked');

	let handleSiblingOneClick = () => {
		setMessage('The button was actually clicked');
	};

	return (
		<section style={{
			border: '2px dotted red',
			padding: '10px',
		}}>
			<div className="row">
				<div className="col">
					<SiblingOne tellMeAboutTheClick={handleSiblingOneClick} />
				</div>
				<div className="col">
					<SiblingTwo message={message} />
				</div>
			</div>
		</section>
	);
}

interface SiblingOneProps {
	tellMeAboutTheClick: () => void;
}

function SiblingOne({ tellMeAboutTheClick }: SiblingOneProps) {
	let handleClick = () => {
		console.log('You clicked on the button!');
		tellMeAboutTheClick();
	};

	return (
		<div style={{ border: '2px dashed green' }}>
			<p>SiblingOne (me) wants to tell SiblingTwo that the button was clicked.</p>
			<button className="btn btn-primary" onClick={handleClick}>
        Click me
			</button>
		</div>
	);
}

interface SiblingTwoProps {
	message: string;
}

function SiblingTwo({ message }: SiblingTwoProps) {
	return (
		<div style={{ border: '2px dashed blue' }}>
			<p>Sibling Two</p>
			<p>{message !== '' ? message : 'I don\'t know if the button was clicked.'}</p>
		</div>
	);
}
