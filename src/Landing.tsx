import * as React from 'react';
import { Link } from 'react-router';
import MyTitle from './MyTitle';

/**
 * Render landing page
 */
const Landing = () => (
    <div className="home-info">
        <MyTitle title="Welcome to my App!" />
        <input className="search" type="text" placeholder="search" />
        <Link to="/search" className="browse-all"> or Browse All</Link>
    </div>
);

export default Landing;
