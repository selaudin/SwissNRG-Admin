import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from "../pages/Products";

const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/users' component={Customers}/>
        </Switch>
    )
}

export default Routes
