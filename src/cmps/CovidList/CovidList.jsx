
import React, { useEffect } from 'react'
import {CovidPreview} from '../CovidPreview/CovidPreview';
import './CovidList.scss'


export function CovidList({covid}) {
    

    useEffect(() => {
        
    },[])
    return (
        <ul className="covid-list">
            {covid.map(country => <CovidPreview country={country} key={country.CountryCode}/>)}
        </ul>
    )
}
