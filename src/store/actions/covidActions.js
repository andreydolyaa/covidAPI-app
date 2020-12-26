

import { covidService } from './../../services/covidService';

export function loadCovid(filterBy) {
    return async dispatch => {
        const covid = await covidService.query(filterBy);
        dispatch({ type: 'SET_INFO', covid });
    }
}

export function loadCountry(code) {
    return async dispatch => {
        const country = await covidService.getCountryByCode(code);
        dispatch({ type: 'GET_COUNTRY', country })
    }
}

export function getFullInfo(countryName) {
    return async dispatch => {
        const fullInfo = await covidService.fullInfoByCountry(countryName);
        dispatch({ type: 'FULL_INFO', fullInfo });
    }
}