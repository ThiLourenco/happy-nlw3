import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import OrphanageSuccess from './pages/OrphanageSuccess';
import RecoverPassword from './pages/RecoverPassword';
import PasswordReset from './pages/PasswordReset';
import CreateUser from './pages/CreateUser';

import Login from './pages/Login';  
import { isAuthenticate } from './services/auth';

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

function Routes() {
	return (
	
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/app" exact component={OrphanagesMap} />
				<Route path="/success" exact component={OrphanageSuccess} />

				<Route path="/orphanages/create" exact component={CreateOrphanage} />
				<Route path="/orphanages/:id" exact component={Orphanage} />

				<Route path="/singin" exact component={Login} />
				<Route path="/singup" exact component={CreateUser} />
				<Route path="/recover" exact component={RecoverPassword} />
				<Route path="/password-reset" exact component={PasswordReset} /> 
				
			</Switch>
		</BrowserRouter>
							
					
	);
}

export default Routes;