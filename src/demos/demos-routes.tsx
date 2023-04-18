import type { RouteObject } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import OurExperiment from './OurExperiment';
import ObjectAsProps from './ObjectAsProps';
import SelectableMovieDetails from './SelectableMovieDetails';
import EventHandling from './EventHandling';
import CustomEvents from './CustomEvents';
import UsingState from './UsingState';
import StateCounter from './StateCounter';
import ComponentCommunication from './ComponentCommunication';
import IterativeContent from './IterativeContent';
import SortableContent from './SortableContent';

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

routes.set(
	{
		path: 'using-state',
		element: <UsingState />,
	},
	'Working with State'
);

routes.set(
	{
		path: 'state-counter',
		element: <StateCounter />,
	},
	'State-based counter'
);

routes.set(
	{
		path: 'component-communication',
		element: <ComponentCommunication />,
	},
	'Component communication'
);

routes.set(
	{
		path: 'iterative-content',
		element: <IterativeContent />,
	},
	'Iterative content'
);

routes.set(
	{
		path: 'sortable-content',
		element: <SortableContent />,
	},
	'Iterative (sortable) content'
);

export { routes };
