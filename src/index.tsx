import * as React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router-dom';
import {Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';

import App from './App';
import Test from './Test';
import Style from './Style';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/style" component={Style} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
