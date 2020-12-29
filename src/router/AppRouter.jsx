import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from '../pages/Home';
import Mall from '../pages/Mall';
import Service from '../pages/Service';
import Profile from '../pages/Profile';
import City from '../pages/City';
import Search from '../pages/Search';
import Detail from '../pages/Detail';


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
                  <Route  path="/city" component={City} />
                  <Route  path="/search/:content" component={Search} />
                  <Route  path="/detail/:id" component={Detail} />
                  <Route path="*" component={NotFound}/>
              </Switch>
            </BrowserRouter>
        )
    }
}