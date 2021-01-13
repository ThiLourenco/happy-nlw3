import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom'
//import { isAuth } from './auth';

function PrivateRoute({ component: Component, ...rest }: RouteProps) {
	if (!Component) return null;
	return (
	<Route 
		
		 />
		)
	}
	

//export default PrivateRoute;