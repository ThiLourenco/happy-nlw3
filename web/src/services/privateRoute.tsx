import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { isAuth } from './auth';

function PrivateRoute({ component: Component, ...rest }: RouteProps) {
	if (!Component) return null;
	return (
	<Route 
		{...rest} 
		render={props => 
		isAuth() ? (
			<Component {...props} />
		) : (
			<Redirect to={{ 
				pathname: '/singin', 
				state: { 
					from: props.location ,
					message: 'Usuário não autorizado' } 
				}} />
		)
	}
	/>
)}

export default PrivateRoute;