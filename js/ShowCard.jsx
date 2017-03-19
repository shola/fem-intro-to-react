// @flow

import React from 'react';
import { ShowPropsType, ShowStateType } from './ShowTypes';

/**
 * We must add keys to components that will need to render in different places
 * in the DOM. React knows how to re-use keyed components, instead of 
 * creating new ones and wasting resources.
 */
const ShowCard = (props: ShowPropsType): React.Element<any> => {
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
