
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './CovidPreview.scss';

export function CovidPreview({ country }) {

    useEffect(() => {

    }, [])



    return (
        <Link to={`/country/${country.CountryCode}`} style={{ textDecoration: 'none' }}>
            <li className="covid-preview">
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
            </li>
        </Link>
    )
}
