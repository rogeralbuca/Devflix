import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/Video'

import Page404 from './pages/Page404';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cadastro" component={CadastroVideo} />
            <Route component={Page404} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
