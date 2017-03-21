import * as React from 'react';
import Header from './Header';
import data from '../public/data.js';
const showData = data.shows;

const Details = () => {
    const { id } = this.props.params;
    const currentShowData = showData.filter(show => show.imdbID === id);

    if (currentShowData.length < 1) {
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
        } = currentShowData[0];
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

export default Details;
