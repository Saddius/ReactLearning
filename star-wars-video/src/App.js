import React from 'react';
import { connect } from 'react-redux';

import { filmsFetchData, searchedWordReceived } from './actions/filmsActions';
import TileList from './component/TileList';
import FilmService from './service/FilmService';
import SearchBar from "./component/SearchBar";

import './style/App.css';

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

    render() {
        // const filter = this.props.films.filter(film => {
        //     return film.titleFilm.toLowerCase().includes(this.props.word);
        // });
        const filter = this.props.films;
        if (this.props.hasError){
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
