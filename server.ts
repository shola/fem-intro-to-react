const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const match = ReactRouter.match;
const RouterContext = ReactRouter.RouterContext;
const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
const Store = require('./src/Store');
const store = Store.store;
const _ = require('lodash');
const fs = require('fs');
const port = 5050;
const baseTemplate = fs.readFileSync('./index.html');
const templateFn = _.template(baseTemplate);
const Main = require('./src/Main');
const MyRouter = Main.MyRouter;
const myRoutes = Main.myRoutes;
const app = express();

// serve static files
app.use('/public', express.static('./public'));

// serve everything else
app.use((req, res) => {
    match(
        { routes: myRoutes(), location: req.url },
        (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                const body = ReactDOMServer.renderToString(
                    React.createElement(
                        Provider,
                        { store },
                        React.createElement(RouterContext, renderProps)
                    )
                );
                res.status(200).send(templateFn({ body }));
            } else {
                res.status(404).send('not found');
            }
        }
    );
});

console.log('listening on port', port);
app.listen(port);
