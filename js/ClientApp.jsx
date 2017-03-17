import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

// TODO: remove for next lesson
// props are like parameters that are passed to a react element
//
// this is my first stateless component! all it can do is render, no need
// to use React.createElement until the life cycle management parts are needed
const MyFirstComponent = () => (
    <div>
        <MyTitle title="props work like this" color="mediumaquamarine" />
        <MyTitle title="passing props to this component. nbd" color="rebeccapurple" />
    </div>
);

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'));

// TODO: remove for next lesson
// These statesments are equivalent. Calling a stateless component's creator is the same as creating a jsx stateless component.
// ReactDOM.render(MyFirstComponent(), document.getElementById('app'));
