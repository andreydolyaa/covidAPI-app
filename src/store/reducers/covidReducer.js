const INITIAL_STATE = {
    covid: null,
    country: null
}

export function covidReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_INFO':
            return {
                ...state,
                covid: action.covid
            }
        case 'GET_COUNTRY':
            return {
                ...state,
                country: action.country
            }
        default:
            return state;
    }
}