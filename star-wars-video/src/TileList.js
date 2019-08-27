import React from 'react';
import './style/App.css';
import Tile from "./Tile";

const TileList = (props) => (
        <div className="Tile-list">
            {props.filmList.map((film) => {
                return <Tile key={film.key}{...film}/>
            })}
        </div>
   );

export default TileList;