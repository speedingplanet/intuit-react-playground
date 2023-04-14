import type { RouteObject } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import OurExperiment from './OurExperiment';

let routes = new Map<RouteObject, string>();
routes.set(
	{
		path: '/',
		element: <p>Placeholder</p>,
		index: true,
	},
	'index'
);

routes.set(
	{
		path: 'our-experiment',
		element: <OurExperiment />,
	},
	'Our Experiment'
);

routes.set(
	{
		path: 'hello-world',
		element: <HelloWorld userName="June" />,
	},
	'Hello World'
);

export { routes };
