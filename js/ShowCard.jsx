// @flow
import React from 'react';

type Props = {
    title: string, // required props with a required value
    imdbID: string,
    poster: string,
    year: string,
    description: string, // optional props with optional values
    trailer?: ?string
};

/**
 * We must add keys to components that will need to render in different places
 * in the DOM. React knows how to re-use keyed components, instead of 
 * creating new ones and wasting resources.
 */
const ShowCard = (props: Props): React.Element<any> => {
    const {
        title,
        imdbID,
        poster,
        year,
        description
    } = props;
    return (
        <div className="show" key={imdbID}>
            <div className="show-card">
                <img className="show-img" src={`public/img/posters/${poster}`} />
                <div className="show-text">
                    <h3 className="show-title">{title}</h3>
                    <h4 className="show-year">({year})</h4>
                    <p className="show-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;
