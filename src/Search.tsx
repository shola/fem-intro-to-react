import * as React from 'react';
import data from '../public/data.js';
import ShowCard from './ShowCard';

interface ShowPropsType {
    title: string,
    imdbID: string,
    poster: string,
    year: string,
    description: string,
    trailer: string
}

interface ShowStateType {
    searchTerm: string
}

/**
 * Private helper that decides which shows should be displayed on the search page
 */
function _showFilterer(state: ShowStateType) {
    // return function _showCheck(show: ShowPropsType): boolean {
    return function _showCheck(show: ShowPropsType) {
        const searchSpace = `${show.title} ${show.description}`.toUpperCase();
        const searchFor = state.searchTerm.toUpperCase();

        return searchSpace.indexOf(searchFor) >= 0;
    };
}

/**
 * Render the search page, now with a little bit of state.
 */

class Search extends React.Component<ShowPropsType, ShowStateType> {
    constructor() {
        super();
        this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
        this.state = {
            searchTerm: ''
        };
    }
    handleSearchTermEvent(e: any) {
        this.setState({ searchTerm: e.target.value });
    }
    render() {
        return (
            <div className="container">
                <header className="header">
                    <h1 className="brand">svideo</h1>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search"
                        value={this.state.searchTerm}
                        onChange={this.handleSearchTermEvent}
                    />
                </header>
                <div className="shows">
                    {data.shows.filter(_showFilterer(this.state)).map(ShowCard)}
                </div>
            </div>
        );
    }
}

export default Search;