import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'; //路由缓存的实现

import Home from '../pages/Home';
import Mall from '../pages/Mall';
import Service from '../pages/Service';
import Profile from '../pages/Profile';
import City from '../pages/City';
import Search from '../pages/Search';
import Detail from '../pages/Detail';
import Login from '../pages/Login';


import NotFound from '../pages/NotFound';

export default class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
              <CacheSwitch>
                  <Route exact path="/" component={Home}/>
                  <Route  path="/mall" component={Mall}/>
                  <Route  path="/service" component={Service}/>
                  <Route  path="/profile" component={Profile}/>
                  <Route  path="/city" component={City} />
                  <CacheRoute  path="/search/:content" component={Search} />
                  <Route  path="/detail/:id" component={Detail} />
                  <Route path="/login" component={Login} />
                  <Route path="*" component={NotFound}/>
              </CacheSwitch>
            </BrowserRouter>
        )
    }
}