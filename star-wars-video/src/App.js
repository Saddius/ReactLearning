import React from 'react';
import { connect } from 'react-redux';

import {filmListUpdate, filmsFetchData, searchedWordReceived} from './actions/filmsActions';
import TileList from './component/TileList';
import FilmService from './service/FilmService';
import SearchBar from "./component/SearchBar";
import configureStore from "./store/configureStore";

import './style/App.css';

const store = configureStore();

class App extends React.PureComponent {

    // state = {
    //     filmList: [],
    //     searchedWord:'',
    //     hasError: false
    // };

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const url = 'https://swapi.co/api/films/';
        this.props.fetchData(url)
    }

    updateData = (config) => {
        this.setState(config);
    };

    watchClick = (titleFilm) => {
        const watchedFilms = this.props.films.map(film => {
            if (film.titleFilm === titleFilm) {
                film.isWatched = !film.isWatched;
            }
            return film;
        });
        store.dispatch(filmListUpdate(watchedFilms));
        this.forceUpdate();
    };

    render() {
        let filter;
        if(this.props.word) {
            filter = this.props.films.filter(film => {
                return film.titleFilm.toLowerCase().includes(this.props.word);
            });
        } else {
            filter = this.props.films;
        }
        // const filter = this.props.films;
        if (this.props.hasError){
            return <p>ERROR</p>;
        }
        return (
            <div className="App">
                <SearchBar
                    update={this.updateData}
                />
                <div className="container">
                    <TileList filmList={filter} watchClick={this.watchClick}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        films: state.films,
        hasErrored: state.itemsHasErrored,
        word: state.searchedWord
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(filmsFetchData(url))
    };
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
