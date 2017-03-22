import * as React from 'react';
import data from '../public/data.js';
import ShowCard from './ShowCard';
import Header from './Header';
import { connector } from './Store';

interface ShowPropType {
    title: string,
    imdbID: string,
    poster: string,
    year: string,
    description: string,
    trailer: string,
    route: any,
    shows: any
}

interface SearchPropsType {
    shows: ShowPropType[],
    searchTerm: string
}

const Search = (props: SearchPropsType) => (
    <div className="container">
        <Header showSearch={true} />
        <div className="shows">
            {props.shows
                .filter(show => {
                    const searchSpace = `${show.title} ${show.description}`.toUpperCase();
                    const searchFor = props.searchTerm.toUpperCase();
                    return searchSpace.indexOf(searchFor) >= 0;
                })
                .map(ShowCard)}
        </div>
    </div>
);

export default connector(Search);
