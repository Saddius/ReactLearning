import React from 'react';
import './style/App.css';
import TileList from './TileList';
import FilmService from './FilmService';
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {
        filmList: []
        // {
        //     titleFilm: 'one',
        //     date: 'date1',
        //     openingCrawl: 'blabla1'
        // },
        // {
        //     titleFilm: 'two',
        //     date: 'date2',
        //     openingCrawl: 'blabla2'
        // }

    };

    constructor(props) {
        super(props);
        this.state = {
            filmList: []
        };
        this.loadData();
    }

    loadData() {
        FilmService.receiveFilmInfo()
            .then((list) => {
                this.InitialData = list;
                    this.setState({
                            filmList: this.InitialData
                        }
                    )
                }
            )
    }

    updateData(config) {
        this.setState(config);
    }

    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}

                {/*</header>*/}
                <SearchBar
                    filmList={this.InitialData}
                    update={this.updateData.bind(this)}
                />
                <TileList filmList={this.state.filmList}/>
            </div>
        );
    }
}

export default App;
