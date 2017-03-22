import * as React from 'react';
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
interface DetailsPropsType {
    shows: ShowPropType[],
    children?: any,
    location: object,
    params: { id: string },
    route: object,
    routeParams: object,
    router: object,
    routers: object[]
}

const Details = (props: DetailsPropsType) => {
    const currentShow = props.shows.find(show => show.imdbID === props.params.id);

    if (currentShow === undefined) {
        return (
            <div>
                <Header />
                <div style={{ textAlign: 'left' }} className="container">
                    That show does not exist! Please check your URL.
                </div>
            </div>
        );
    } else {
        const {
            title,
            description,
            year,
            poster,
            trailer,
            imdbID
        } = currentShow;
        const trailerUrl = `https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`;

        return (
            <div style={{ textAlign: 'left' }} className="container">
                <Header />
                <div className="video-info">
                    <h1 className="video-title">{title}</h1>
                    <h2 className="video-year">({year})</h2>
                    <img
                        className="video-poster"
                        src={`./public/img/posters/${poster}`}
                    />
                    <p className="video-description">{description}</p>
                    <div className="video-container">
                        <iframe src={trailerUrl} frameBorder="0" allowFullScreen />
                    </div>
                </div>
            </div>
        );
    }
};

export default connector(Details);
