
import './CovidApp.scss';
import React, { useEffect, useState } from 'react';
import { loadCovid } from '../../store/actions/covidActions.js';
import { useDispatch, useSelector } from 'react-redux';
import { CovidList } from './../../cmps/CovidList/CovidList';
import { Filter } from '../../cmps/Filter/Filter';

export function CovidApp(props) {
    const [filterBy, setFilterBy] = useState(null);


    const dispatch = useDispatch();
    const covid = useSelector(state => state.covidReducer.covid);


    useEffect(() => {
        dispatch(loadCovid(filterBy));
    }, [filterBy])


    
    const onSetFilter = (filterBy) => {
        console.log('FILTER BY J:' , filterBy);
        setFilterBy(filterBy)
    }

    return (
        <div>
            {covid &&
                <div className="global-stats">
                    <div>
                        <h3>New cases confirmed today: {covid.Global.NewConfirmed}</h3>
                        <h3>Total cases confirmed worldwide: {covid.Global.TotalConfirmed}</h3>
                    </div>
                    <div>
                        <h3>Deaths confirmed today: {covid.Global.NewDeaths}</h3>
                        <h3>Total deaths worldwide: {covid.Global.TotalDeaths}</h3>
                    </div>
                    <div>
                        <h3>Recovered today: {covid.Global.NewRecovered}</h3>
                        <h3>Total Recovered: {covid.Global.TotalRecovered}</h3>
                    </div>
                </div>}

            <Filter {...props} onSetFilter={onSetFilter}/>
            {covid && <CovidList covid={covid.Countries} />}
        </div>
    )
}

