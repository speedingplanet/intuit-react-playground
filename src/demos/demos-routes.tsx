import type { RouteObject } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import OurExperiment from './OurExperiment';
import ObjectAsProps from './ObjectAsProps';
import SelectableMovieDetails from './SelectableMovieDetails';
import EventHandling from './EventHandling';
import CustomEvents from './CustomEvents';

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

routes.set(
	{
		path: 'object-as-props',
		element: <ObjectAsProps />,
	},
	'Object as props'
);

routes.set(
	{
		path: 'selectable-movie-details',
		element: <SelectableMovieDetails />,
	},
	'Selectable Movie Details (crazy typing)'
);

routes.set(
	{
		path: 'event-handling',
		element: <EventHandling />,
	},
	'Event Handling'
);

routes.set(
	{
		path: 'custom-events',
		element: <CustomEvents />,
	},
	'Custom Events'
);

export { routes };
