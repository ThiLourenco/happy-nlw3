import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import OrphanagesMap from './pages/OrphanageMap/OrphanagesMap';
import Orphanage from './pages/Orphanage/Orphanage';
import CreateOrphanage from './pages/CreateOrphanages/CreateOrphanage';
import OrphanageSuccess from './pages/OrphanageSuccess/OrphanageSuccess';
import RecoverPassword from './pages/RecoverPassword/RecoverPassword';
import PasswordReset from './pages/PasswordReset/PasswordReset';
import CreateUser from './pages/CreateUser/CreateUser';
import Login from './pages/Login/Login';  

import PrivateRoute from './services/privateRoute';

function Routes() {
	return (
	
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/app" component={OrphanagesMap} />
				<Route path="/success" component={OrphanageSuccess} />

				<Route path="/orphanages/create" component={CreateOrphanage} />
				<Route path="/orphanages/:id" component={Orphanage} />

				<Route path="/singin" component={Login} />
				<Route path="/singup" component={CreateUser} />
				<Route path="/recover" component={RecoverPassword} />
				<Route path="/password-reset" component={PasswordReset} />
			</Switch>
		</BrowserRouter>
							
					
	);
}

export default Routes;