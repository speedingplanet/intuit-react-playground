import type { RouteObject } from 'react-router-dom';
import HelloWorld from './HelloWorld';

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
		path: 'hello-world',
		element: <HelloWorld userName="June" />,
	},
	'Hello World'
);

export { routes };
