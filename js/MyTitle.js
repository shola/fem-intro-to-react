var React = require('react');
var ReactDOM = require('react-dom');
var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
    render() {
        return div(null, h1({ style: { color: this.props.color } }, this.props.title));
    }
});

// var MyTitleFactory = React.createFactory(MyTitle);

module.exports = MyTitle;
