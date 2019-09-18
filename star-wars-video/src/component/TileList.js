import React from 'react';

import Tile from "./Tile";

import '../style/App.css';

const TileList = (props) => (
        <div className="row">
            {props.filmList.map((film) => {
                return <Tile key={film.key}{...film}/>
            })}
        </div>
   );

export default TileList;