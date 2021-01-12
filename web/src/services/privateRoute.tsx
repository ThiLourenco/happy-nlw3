import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { isAuthenticate } from './auth';

function PrivateRoute({ component: Component, ...rest }: RouteProps) {
	if (!Component) return null;
	return (
	<Route 
		{...rest} 
		render={props => 
		isAuthenticate() ? (
			<Component {...props} />
		) : (
			<Redirect to={{ 
				pathname: '/singin', 
				state: { from: props.location } }} />
		)
	}
	/>
)}

export default PrivateRoute;