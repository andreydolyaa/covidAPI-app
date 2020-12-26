const INITIAL_STATE = {
    covid: null,
    country: '',
    fullInfo:null
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
            case 'FULL_INFO':
                return{
                    ...state,
                    fullInfo:action.fullInfo
                }
        default:
            return state;
    }
}