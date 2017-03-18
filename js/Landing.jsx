// @flow
import React from 'react';
import MyTitle from './MyTitle';

function Landing(): React.Element<any> {
    return (
        <div className="app">
            <div className="landing">
                <MyTitle title="Welcome to my App!" />
                <input className="search" type="text" placeholder="search" />
                <button className="browse-all"> or Browse All</button>
            </div>
        </div>
    );
}

export default Landing;
