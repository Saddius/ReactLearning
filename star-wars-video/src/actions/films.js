export function filmListData(filmList) {
    return{
        type:'FILM_LIST_UPDATED',
        filmList
    }
}

export function searchedWordReceived(searchedWord){
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
    
}
