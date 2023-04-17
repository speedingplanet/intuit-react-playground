export default function EventHandling() {
	return (
		<CustomizableButton
			label="Click me"
			backgroundColor="blue"
			textColor="white"
			// customClick={() => { console.log('Parent event handler'); }}
			customClick={(event) => {
				console.dir(event.currentTarget);
			}}
		/>
	);
}

// Only some valid colors: red, orange, yellow, green, blue, purple
type CustomColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black' | 'white';
type NoBlackOrWhite = Exclude<CustomColor, 'black' | 'white'>;

interface CustomizableButtonProps {
	label: string;
	backgroundColor: NoBlackOrWhite;
	textColor: CustomColor;
	customClick: React.MouseEventHandler<HTMLButtonElement>;
}
export function CustomizableButton(props: CustomizableButtonProps) {
	let buttonStyle = {
		backgroundColor: props.backgroundColor,
		color: props.textColor,
	};
	return (
		<button
			style={buttonStyle}
			onClick={props.customClick}
			className="btn"
		>
			{props.label}
		</button>
	);
}
