var React = require('react');
var ReactDOM = require('react-dom');
var MyTitle = require('./MyTitle');

var div = React.DOM.div;

var MyFirstComponent = div(
    null,
    React.createElement(MyTitle, { title: 'props work here too', color: 'red' }),
    React.createElement(MyTitle, { title: 'props are great', color: 'green' })
);
//
// // props are like parameters that are passed to a react element
//
ReactDOM.render(MyFirstComponent, document.getElementById('app'));
