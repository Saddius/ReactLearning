import React from 'react';

import configureStore from "../store/configureStore";
import {searchedWordReceived} from "../actions/filmsActions";

const store = configureStore();

const search = ({ update }) => {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        // update({
        //     searchedWord: value
        // });
        store.dispatch(searchedWordReceived(value))
    };
    return (
        <div className="searchbar form-group">
            <input
                type="text"
                className="form-control search-form"
                placeholder="Search films by name..."
                onChange={dataSearch}
            />
        </div>
    );
};

export default search;