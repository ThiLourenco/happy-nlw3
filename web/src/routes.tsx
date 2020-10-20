import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import OrphanageSuccess from './pages/OrphanageSuccess';
import RecoverPassword from './pages/RecoverPassword';
import PasswordReset from './pages/PasswordReset';
import CreateUser from './pages/CreateUser';

import Login from './pages/Login';  

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
				<Route path="/recover-password" component={RecoverPassword} />
				<Route path="/password-reset" component={PasswordReset} />
			</Switch>
		</BrowserRouter>
							
					
	);
}

export default Routes;