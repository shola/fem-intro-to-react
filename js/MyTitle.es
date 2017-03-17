import React from 'react';
import ReactDOM from 'react-dom';
const div = React.DOM.div;
const h1 = React.DOM.h1;

// props are like parameters that are passed to a react element
const MyTitle = React.createClass({
    render() {
        return div(null, h1({ style: { color: this.props.color } }, this.props.title));
    }
});

export default MyTitle;
