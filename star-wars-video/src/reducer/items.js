export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasError;

        default:
            return state;
    }
}

export function films(state = [], action) {
    switch (action.type) {
        case 'FILM_FETCH_DATA_SUCCESS':
        case 'FILMS_UPDATE':
            return action.films;

        default:
            return state;
    }
}

// export function films(state = [], action) {
//     switch (action.type) {
//         case 'FILMS_UPDATE':
//             return action.films;
//
//         default:
//             return state;
//     }
// }

export function word(state = '', action) {
    switch (action.type) {
        case 'SEARCHED_WORD_RECEIVED':
            return action.searchedWord;

        default:
            return state;
    }
}