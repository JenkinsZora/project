import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './container/container';
import Content from './conponent/content.js';
import ContentTwo from './conponent/content_two.js';
import ContentThree from './conponent/content_three.js';
import './index.css';
import Login from './login/login.js';
import Super from './super/superAll.js';
import Totalreducers from './reducers';
import { Router, Route, hashHistory, Redirect, IndexRedirect, IndexRoute} from 'react-router';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
let store=createStore(Totalreducers);
ReactDOM.render(
     <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>
            <Route path="/super" component={Super}/>
            <Route path="/student" component={Container}>
                <IndexRoute component={Content}/>
                <Route path="repos" component={Content}/>
                <Route path="about" component={ContentTwo}/>
                <Route path="three" component={ContentThree}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

