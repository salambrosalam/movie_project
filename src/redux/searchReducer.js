const SET_FILMS = "SET_FILMS";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

let initialState = {
    films: [],
    isFetching: false
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return{
                ...state,
                films: action.films
            }
        case TOGGLE_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setFilmsAC = (films) => {
    return {
        type: SET_FILMS,
        films
    }
}

export const setFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching
    }
}
