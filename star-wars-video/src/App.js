import React from 'react';

import TileList from './component/TileList';
import FilmService from './service/FilmService';
import SearchBar from "./component/SearchBar";

import './style/App.css';

class App extends React.PureComponent {

    state = {
        filmList: [],
        searchedWord:'',
        hasError: false
    };

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const url = 'https://swapi.co/api/films/';
        FilmService.receiveFilmInfo(url)
            .then((list) => {
                    this.setState({
                            filmList: list
                        }
                    )
                }
            )
            .catch(() => this.setState({hasError: true}))
    }

    updateData = (config) => {
        this.setState(config);
    };

    render() {
        const filter = this.state.filmList.filter(film => {
            return film.titleFilm.toLowerCase().includes(this.state.searchedWord);
        });
        if (this.state.hasError){
            return <p>ERROR</p>;
        }
        return (
            <div className="App">
                <SearchBar
                    update={this.updateData}
                />
                <div className="container">
                <TileList filmList={filter}/>
                </div>
            </div>
        );
    }
}

export default App;
