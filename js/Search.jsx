import React from 'react';
import data from '../public/data';
import ShowCard from './ShowCard';

/**
 * Render the search page
 */
const Search = () => (
    <div className="container">
        <header className="header">
            <h1 className="brand">svideo</h1>
            <input className="search-input" type="text" placeholder="Search" />
        </header>
        <div className="shows">
            {data.shows.map(ShowCard)}
        </div>
    </div>
);

export default Search;
