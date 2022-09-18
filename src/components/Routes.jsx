import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Companies from "../pages/Companies";

const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/users' component={Customers}/>
            <Route path='/companies' component={Companies}/>
        </Switch>
    )
}

export default Routes
