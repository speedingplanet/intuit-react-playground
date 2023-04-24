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
import IterativeList from './IterativeList';
import FormInputs from './FormInputs';
import ControlledVsUncontrolled from './ControlledVsUncontrolled';
import FetchingDataPromises from './FetchingDataPromises';
import FetchingDataAsyncAwait from './FetchingDataAsyncAwait';
import FullForm from './FullForm';
import FetchingDataReactQuery from './FetchingDataReactQuery';
import AddAMovie from './AddAMovie';
import FetchingGraphQL from './graphql/FetchingGraphQL';
import FetchingDataOnClick from './FetchingDataWithButton';
import FetchingGraphQLWithParameters from './graphql/FetchingGraphQLWithParameters';
import AddingMoviesWithGraphQL from './graphql/AddingMoviesWithGraphQL';
import UpdatingMoviesWithGraphQL from './graphql/UpdatingMoviesWithGraphQL';

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
		path: 'iterative-list',
		element: <IterativeList />,
	},
	'Movies (iterative list)'
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

routes.set(
	{
		path: 'form-inputs',
		element: <FormInputs />,
	},
	'Form inputs (controlled fields)'
);

routes.set(
	{
		path: 'controlled-vs-uncontrolled',
		element: <ControlledVsUncontrolled />,
	},
	'Forms (controlled vs uncontrolled)'
);

routes.set(
	{
		path: 'full-form',
		element: <FullForm />,
	},
	'Full form (controlled vs uncontrolled)'
);

routes.set(
	{
		path: 'fetching-with-promises',
		element: <FetchingDataPromises />,
	},
	'Fetching data with promises'
);

routes.set(
	{
		path: 'fetching-on-click',
		element: <FetchingDataOnClick />,
	},
	'Fetching data on click'
);

routes.set(
	{
		path: 'fetching-with-async-await',
		element: <FetchingDataAsyncAwait />,
	},
	'Fetching data using async/await'
);

routes.set(
	{
		path: 'fetching-with-react-query',
		element: <FetchingDataReactQuery />,
	},
	'Fetching data using React Query'
);

routes.set(
	{
		path: 'adding-with-fetch',
		element: <AddAMovie />,
	},
	'Adding data using fetch'
);

routes.set(
	{
		path: 'apollo-graphql',
		element: <FetchingGraphQL />,
	},
	'GraphQL: Fetching data with Apollo'
);

routes.set(
	{
		path: 'graphql-with-params',
		element: <FetchingGraphQLWithParameters />,
	},
	'GraphQL: Fetching data with parameters'
);

routes.set(
	{
		path: 'graphql-add-movie',
		element: <AddingMoviesWithGraphQL />,
	},
	'GraphQL: Add a movie'
);

routes.set(
	{
		path: 'graphql-update-movie',
		element: <UpdatingMoviesWithGraphQL />,
	},
	'GraphQL: Update a movie'
);

export { routes };
