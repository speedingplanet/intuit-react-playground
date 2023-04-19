import type { RouteObject } from 'react-router-dom';
import Lab01 from './Lab01';
import Lab03 from './Lab03';
import Lab05 from './Lab05';
import Lab06 from './Lab06';
import Lab08 from './Lab08';
import Lab09 from './Lab09';
import Lab10 from './Lab10';
import Lab11 from './Lab11';
import Lab11Part2 from './Lab11-part2';
import Lab11Part3 from './Lab11-part3';
import Lab11Part4 from './Lab11-part4';
import Lab11Part5 from './Lab11-part5';

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

routes.set(
	{
		path: 'lab-05',
		element: <Lab05 />,
	},
	'Lab 05'
);

routes.set(
	{
		path: 'lab-06',
		element: <Lab06 />,
	},
	'Lab 06'
);

routes.set(
	{
		path: 'lab-08',
		element: <Lab08 />,
	},
	'Lab 08'
);

routes.set(
	{
		path: 'lab-09',
		element: <Lab09 />,
	},
	'Lab 09'
);

routes.set(
	{
		path: 'lab-10',
		element: <Lab10 />,
	},
	'Lab 10'
);

routes.set(
	{
		path: 'lab-11',
		element: <Lab11 />,
	},
	'Lab 11'
);

routes.set(
	{
		path: 'lab-11-2',
		element: <Lab11Part2 />,
	},
	'Lab 11, part 2'
);

routes.set(
	{
		path: 'lab-11-3',
		element: <Lab11Part3 />,
	},
	'Lab 11, part 3'
);

routes.set(
	{
		path: 'lab-11-4',
		element: <Lab11Part4 />,
	},
	'Lab 11, part 4'
);

routes.set(
	{
		path: 'lab-11-5',
		element: <Lab11Part5 />,
	},
	'Lab 11, part 5'
);

export { routes };
