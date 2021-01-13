import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';

export default function DashboardRoute() {
  return (
    <Switch>
      <Route path="/singin" exact component={Login}></Route>
    </Switch>
  )
}