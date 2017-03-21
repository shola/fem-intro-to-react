import * as React from 'react';
import data from '../public/data.js';
import ShowCard from './ShowCard';
import Header from './Header';
import { connector } from './Store';

// TODO: clean up these types
interface ShowPropsType {
    title: string,
    imdbID: string,
    poster: string,
    year: string,
    description: string,
    trailer: string,
    route: any,
    shows: any,
    searchTerm: string
}

/**
 * Private helper that decides which shows should be displayed on the search page
 */
function _showFilterer(props: ShowPropsType) {
    return function _showCheck(show: ShowPropsType) {
        const searchSpace = `${show.title} ${show.description}`.toUpperCase();
        const searchFor = props.searchTerm.toUpperCase();

        return searchSpace.indexOf(searchFor) >= 0;
    };
}

const Search = (props: ShowPropsType) => (
    <div className="container">
        <Header showSearch={true} />
        <div className="shows">
            {data.shows.filter(_showFilterer(props)).map(ShowCard)}
        </div>
    </div>
);

export default connector(Search);
