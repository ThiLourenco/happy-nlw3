import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import AuthenticationRoute from './authRoute';
import DashboardRoute from './dashboardRoute';

import Landing from '../pages/Landing/Landing';
import OrphanagesMap from '../pages/OrphanageMap/OrphanagesMap';
import Orphanage from '../pages/Orphanage/Orphanage';
import CreateOrphanage from '../pages/CreateOrphanages/CreateOrphanage';
import OrphanageSuccess from '../pages/OrphanageSuccess/OrphanageSuccess';
import RecoverPassword from '../pages/RecoverPassword/RecoverPassword';
import PasswordReset from '../pages/PasswordReset/PasswordReset';
import CreateUser from '../pages/CreateUser/CreateUser';
import Login from '../pages/Login/Login';  




function Routes() {
	const { signed } = useAuth();
	return (
			<Switch>
				<Route path="/" exact component={Landing} />

				<Route path="/app" exact component={OrphanagesMap} />
				<Route path="/success" exact component={OrphanageSuccess} />
				<Route path="/orphanages/create" exact component={CreateOrphanage} />
				<Route path="/orphanages/:id" exact component={Orphanage} />

				
				<Route path="/singup" exact component={CreateUser} />
				<Route path="/recover" exact component={RecoverPassword} />
				<Route path="/password-reset" exact component={PasswordReset} />

				{signed ? <DashboardRoute /> : <AuthenticationRoute />}
			</Switch>					
	);
}

export default Routes;