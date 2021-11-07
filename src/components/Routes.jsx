import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Twitter from '../pages/Twitter'
import Instagram from '../pages/Instagram'
import Facebook from '../pages/Facebook'
import LinkedIn from '../pages/LinkedIn'
import Home from '../pages/Home'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/linkedin' exact component={LinkedIn}/>
            <Route path='/twitter' exact component={Twitter}/>
            <Route path='/instagram' component={Instagram}/>
            <Route path='/facebook' component={Facebook}/>

        </Switch>
    )
}

export default Routes
