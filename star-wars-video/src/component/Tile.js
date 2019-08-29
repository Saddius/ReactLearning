import React from 'react';
import '../style/App.css';

class Tile extends React.Component {

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
        return (
            <div className="col-sm-4 characters-column">
                <h3>{this.props.titleFilm}</h3>
                <h4>{this.props.date}</h4>
                <p>{this.props.openingCrawl}</p>
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