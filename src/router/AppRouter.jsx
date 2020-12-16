import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/home/Home';
import Mall from '../pages/mall/Mall';
import Service from '../pages/service/Service';
import Profile from '../pages/profile/Profile';
import NotFound from '../pages/notfound/NotFound';

export default class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/mall" component={Mall}/>
                  <Route exact path="/service" component={Service}/>
                  <Route exact path="/profile" component={Profile}/>
                  <Route path="*" component={NotFound}/>
              </Switch>
            </BrowserRouter>
        )
    }
}