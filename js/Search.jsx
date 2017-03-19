import React from 'react';
import data from '../public/data';
import ShowCard from './ShowCard';

/**
 * Render the search page
 */
const Search = () => (
    <div className="container">
        <div className="shows">
            {data.shows.map(ShowCard)}
        </div>
    </div>
);

export default Search;
