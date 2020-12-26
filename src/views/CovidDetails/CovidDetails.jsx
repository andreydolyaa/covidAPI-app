

import React, { useEffect } from 'react';
import { loadCountry, getFullInfo } from '../../store/actions/covidActions.js';
import { useDispatch, useSelector } from 'react-redux';
import './CovidDetails.scss';
import { Link } from 'react-router-dom';
import { Chart } from './../../cmps/Chart/Chart';


export function CovidDetails(props) {

    const country = useSelector(state => state.covidReducer.country);
    const fullInfo = useSelector(state => state.covidReducer.fullInfo);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadCountry(props.match.params.id));
        dispatch(getFullInfo(country.Country));
        console.log('@@#@$@%@%',country);
    }, [])

    useEffect(() => {
        dispatch(loadCountry(props.match.params.id));
    },[country])


    return (
        <div>
            <Link to="/"><button>Back to main page</button></Link>
            {country && fullInfo &&
                <div className="covid-details">
                    <div className="flag">
                        <img src={country.img} />
                        <p className="country-name">{country.Country}</p>
                    </div>
                    <div>
                        <p>New cases (24h): <span className="red">{country.NewConfirmed}</span></p>
                        <p>Total Confirmed: <span className="red">{country.TotalConfirmed}</span></p>
                        <p>Recent Deaths (24h): <span className="purple">{country.NewDeaths}</span></p>
                        <p>Total Deaths: <span className="purple">{country.TotalDeaths}</span></p>
                        <p>Recoverd Today: <span className="green">{country.NewRecovered}</span></p>
                        <p>Total Recovered: <span className="green">{country.TotalRecovered}</span></p>
                    </div>
                    {fullInfo && country &&
                        <div className="details-chart">
                            <Chart country={country} fullInfo={fullInfo} />
                        </div>
                    }
                </div>
            }
        </div>
    )
}


