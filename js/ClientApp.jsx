import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

const App = () => (
    <div className="app">
        <div className="landing">
            <MyTitle title="My Video App" />
            <input className="search" type="text" placeholder="search" />
            <button className="browse-all"> or Browse All</button>
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
