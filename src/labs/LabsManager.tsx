import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import Header from '../common/Header';
import { routes } from './labs-routes';

export default function LabsManager() {
	let routeConfig = Array.from(routes.keys());
	let element = useRoutes(routeConfig);

	return (
		<>
			<Header level={2} text="Labs Manager" />
			<div className="row">
				<div className="col-3">
					<ul>
						{routeConfig
							.filter((r) => !r.index)
							.map((r, index) => (
								<li key={index}>
									<Link to={`${r.path}`}>{routes.get(r)}</Link>
								</li>
							))}
					</ul>
				</div>
				<div className="col border-start border-dark">{element}</div>
			</div>
		</>
	);
}
