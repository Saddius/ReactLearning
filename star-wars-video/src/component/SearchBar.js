import React from 'react';

export default ({ update }) => {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        update({
            searchedWord: value
        });
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