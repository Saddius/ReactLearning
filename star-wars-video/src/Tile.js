import React from 'react';
import './style/App.css';

const Tile = (props) => (
    <div className="col-sm-4 characters-column">
        <h3>{props.titleFilm}</h3>
        <h4>{props.date}</h4>
        <p>{props.openingCrawl}</p>
        <div className="characters">
            <button type="button" className="btn btn-secondary float-right">Characters</button>
        </div>
    </div>
);

export default Tile;