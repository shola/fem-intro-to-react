import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

const div = React.DOM.div;

// props are like parameters that are passed to a react element
const MyFirstComponent = div(
    null,
    React.createElement(MyTitle, { title: 'props work here too', color: 'red' }),
    React.createElement(MyTitle, { title: 'props are great', color: 'green' })
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
