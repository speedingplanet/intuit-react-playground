import type { RouteObject } from 'react-router-dom';
import Lab01 from './Lab01';
import Lab03 from './Lab03';

let routes = new Map<RouteObject, string>();
routes.set(
	{
		path: '/',
		element: <p>Lab placeholder</p>,
		index: true,
	},
	'index'
);

routes.set(
	{
		path: 'lab-01',
		element: <Lab01 />,
	},
	'Lab 01'
);

routes.set(
	{
		path: 'lab-03',
		element: <Lab03 />,
	},
	'Lab 03'
);

export { routes };
