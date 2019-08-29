import React from 'react';
import './style/App.css';
import TileList from './component/TileList';
import FilmService from './service/FilmService';
import SearchBar from "./component/SearchBar";

class App extends React.Component {
    state = {
        filmList: []
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
                <SearchBar
                    filmList={this.InitialData}
                    update={this.updateData.bind(this)}
                />
                <div className="container">
                <TileList filmList={this.state.filmList}/>
                </div>
            </div>
        );
    }
}

export default App;
