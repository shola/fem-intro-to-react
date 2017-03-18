import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Landing from './Landing';
import Search from './Search';

const MyRouter = () => (
    <Router history={hashHistory}>
        <div>
            <Route path="/" component={Landing} />
            <Route path="/search" component={Search} />
        </div>
    </Router>
);

ReactDOM.render(<MyRouter />, document.getElementById('app'));
