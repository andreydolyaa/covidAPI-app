import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import './Chart.scss'

export function Chart({ country, fullInfo }) {

    useEffect(() => {
        console.log('full info', fullInfo);
    }, [])

    var dataCases = {
        labels: fullInfo.map(data => data.Date),
        datasets: [{
            label: `${country.Country}'s Progress from day one`,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: fullInfo.map(data => data.Confirmed)
        }]
    }
    var dataRecovered = {
        labels: fullInfo.map(data => data.Date),
        datasets: [{
            label: `${country.Country}'s recovery progress from day one`,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: fullInfo.map(data => data.Recovered),
            responsive:true
        }]
    }

    return (
        <div className="charts">
            {country && fullInfo &&
                <div>
                    <p>{country.Country}</p>
                    <Line data={dataCases} className="char"/>
                </div>
            }
            {country && fullInfo &&
                <div>
                    <Line data={dataRecovered} className="char"/>
                </div>
            }
        </div>
    )
}


