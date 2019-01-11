import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './views/login';
import Feed from './views/feed';
import CreateFeed from './views/create-feed/index';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/feed' component={Feed} />
            <Route exact path='/create-feed' component={CreateFeed} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
)

export default Router;