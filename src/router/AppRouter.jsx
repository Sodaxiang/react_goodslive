import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from '../pages/Home';
import Mall from '../pages/Mall';
import Service from '../pages/Service';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

export default class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route  path="/mall" component={Mall}/>
                  <Route  path="/service" component={Service}/>
                  <Route  path="/profile" component={Profile}/>
                  <Route path="*" component={NotFound}/>
              </Switch>
            </BrowserRouter>
        )
    }
}