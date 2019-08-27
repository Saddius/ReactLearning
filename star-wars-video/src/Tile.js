import React from 'react';
import './style/App.css';

const Tile = (props) => (
    <div>
        <h3 className="Tile-title">{props.titleFilm}</h3>
        <h4 className="Tile-releaseDate">{props.date}</h4>
        <p className="Tile-openingCrawl">{props.openingCrawl}</p>
    </div>
);

export default Tile;