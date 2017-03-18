import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = (): React.Element<any> => (
    <Router>
        <Route path="/" component={Landing} />
    </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
