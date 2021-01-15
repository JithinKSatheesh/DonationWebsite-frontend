import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from './core/home'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/'  component={Home} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
