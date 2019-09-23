import FilmService from "../service/FilmService";
import {films} from "../reducer/items";

export function filmListData(films) {
    return {
        type: 'FILM_FETCH_DATA_SUCCESS',
        films
    }
}

export function searchedWordReceived(searchedWord) {
    return {
        type: 'SEARCHED_WORD_RECEIVED',
        searchedWord
    }
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasError: bool
    };
}

export function filmsFetchData(url) {
    return (dispatch) => {
        FilmService.receiveFilmInfo(url)
            .then((list) => {
                    dispatch(filmListData(list))
                }
            )
            .catch(() => {
                return dispatch(itemsHasErrored(true))
            })
    }
}
