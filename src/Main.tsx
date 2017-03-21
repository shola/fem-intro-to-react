import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Landing from './Landing';
import Search from './Search';
import Layout from './Layout';
import Details from './Details';

/**
 * Main entrypoint for the app.
 *
 * Using nested routes is a form of composition of react elements:
 * - IndexRoute's component will be composed with it's parent route's component.
 * - The search route will get composed with the parent route as well.
 * - The 2 nested routes can be passed individually to the Layout as props.children.
 */

class MyRouter extends React.Component<any, any> {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Landing} />
                    <Route path="/search" component={Search} />
                    <Route path="/details/:id" component={Details} />
                </Route>
            </Router>
        );
    }
}
ReactDOM.render(<MyRouter />, document.getElementById('app'));
