var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
    render() {
        return (
            div(null, 
                h1({style: {color: this.props.color}}, this.props.title)
            )
        )
    }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
    div(null,
        React.createElement(MyTitle, {title: 'props work here too', color: 'red'}),
        MyTitleFactory({title: 'props are great', color: 'green'}),
        MyTitleFactory()
    )
)

// props are like parameters that are passed to a react element

ReactDOM.render(MyFirstComponent, document.getElementById('app'))