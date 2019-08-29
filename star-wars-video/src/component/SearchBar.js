import React from 'react';

export default ({ filmList, update }) => {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filter = filmList.filter(film => {
            return film.titleFilm.toLowerCase().includes(value);
        });

        update({
            filmList: filter
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