import React from 'react';

import '../style/App.css';

class Tile extends React.PureComponent {

    state = {
        isWatched: false
    };

    watchClick = () => {
        this.setState({
            isWatched: !this.state.isWatched
        })
    };

    render() {
        let isWatchedFilm = this.state.isWatched ? 'Seen' : 'Not Seen';
        const {titleFilm, date, openingCrawl} = this.props;
        return (
            <div className="col-sm-4 characters-column">
                <h3>{titleFilm}</h3>
                <h4>{date}</h4>
                <p>{openingCrawl}</p>
                <div className="characters">
                    <button onClick={this.watchClick}
                            className="btn btn-light float-left">{isWatchedFilm}</button>
                    <button type="button" className="btn btn-secondary float-right">Characters</button>
                </div>
            </div>
        )
    }
};

export default Tile;