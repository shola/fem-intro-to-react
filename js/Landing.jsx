import React from 'react';
import { Link } from 'react-router';
import MyTitle from './MyTitle';

/**
 * Render landing page
 */
const Landing = () => (
    <div className="app">
        <div className="landing">
            <MyTitle title="Welcome to my App!" />
            <input className="search" type="text" placeholder="search" />
            <Link to="/search" className="browse-all"> or Browse All</Link>
        </div>
    </div>
);

export default Landing;
