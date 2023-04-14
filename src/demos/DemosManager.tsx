import { Link, useRoutes } from 'react-router-dom';
import Header from '../common/Header';
import { routes } from './demos-routes';

export default function DemosManager() {
	let routeConfig = Array.from(routes.keys());
	let element = useRoutes(routeConfig);

	return (
		<>
			<Header
				level={2}
				text="Demos Manager"
			/>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						{routeConfig
							.filter((r) => !r.index)
							.map((r, index) => (
								<li key={index}>
									<Link to={`${r.path}`}>{routes.get(r)}</Link>
								</li>
							))}
					</ul>
				</div>
				<div className="col">{element}</div>
			</div>
		</>
	);
}
