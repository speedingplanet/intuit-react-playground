import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarWithLayout from './common/NavbarWithLayout';
import DemosManager from './demos/DemosManager';
import LabsManager from './labs/LabsManager';
import Home from './Home';

function App() {
	return (
		<main className="container">
			<header className="row">
				<div className="col">
					<h1>React Playground</h1>
					<hr />
				</div>
			</header>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<NavbarWithLayout />}
					>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path="demos/*"
							element={<DemosManager />}
						/>
						<Route
							path="labs/*"
							element={<LabsManager />}
						/>
					</Route>
				</Routes>
			</Router>{' '}
		</main>
	);
}

export default App;
