export default function EventHandling() {
	// <nameOfEvent>Handler -> clickHandler()
	// handle<nameOfEvent> -> handleClick()
	function byReferenceClickHandler() {
		console.log('You clicked on the By Reference button');
	}

	return (
		<div>
			{/* button.btn.btn-warn{Click Me} */}
			<button
				className="btn btn-danger"
				onClick={byReferenceClickHandler}
			>
				By reference
			</button>
			&nbsp;
			<button className="btn btn-warning"
				onClick={() => { console.log('You clicked on the In-line button'); }}
			>In-line</button>
		</div>
	);
}
