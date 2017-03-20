import * as React from 'react';

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

const ShowCard = (props: ShowPropsType) => {
    const {
        title,
        imdbID,
        poster,
        year,
        description
    } = props;
    return (
        <div className="show-card" key={imdbID}>
            <img className="show-card-img" src={`public/img/posters/${poster}`} />
            <div className="show-card-text">
                <h3 className="show-card-title">{title}</h3>
                <h4 className="show-card-year">({year})</h4>
                <p className="show-card-description">{description}</p>
            </div>
        </div>
    );
};

export default ShowCard;
