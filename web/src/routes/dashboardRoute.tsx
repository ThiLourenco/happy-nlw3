import React from 'react';
import { Route, Switch } from "react-router-dom";

import Dashboard from '../pages/Dashboard/Dashboard';

export default function DashboardRoute() {
  return (
    <Switch>
      <Route path="/singin" exact component={Dashboard} />    
    </Switch>
  )
}