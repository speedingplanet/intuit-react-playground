import HelloWorld from './HelloWorld';

function App() {
	return (
		<div>
			<h1>React Playground</h1>
			{/* HelloWorld({userName: 'June'}) ➡️ <div>...</div> */}
			<HelloWorld userName="June"/>
		</div>
	);
}

export default App;
