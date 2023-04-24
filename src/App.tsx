import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import NavbarWithLayout from './common/NavbarWithLayout';
import DemosManager from './demos/DemosManager';
import LabsManager from './labs/LabsManager';
import Home from './Home';

// React Query
const queryClient = new QueryClient();

// Apollo Client
const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<main className="container">
			<header className="row">
				<div className="col">
					<h1>React Playground</h1>
					<hr />
				</div>
			</header>
			{/* Apollo Client's provider component */}
			<ApolloProvider client={client}>
				{/* React Query's provider component */}
				<QueryClientProvider client={queryClient}>
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
					</Router>
				</QueryClientProvider>
			</ApolloProvider>{' '}
		</main>
	);
}

export default App;
