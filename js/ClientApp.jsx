import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

const MyFirstComponent = () => (
    <div>
        <MyTitle title="props work like this!!!" color="mediumaquamarine" />
        <MyTitle title="passing props to this component. nbd" />
    </div>
);

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'));
