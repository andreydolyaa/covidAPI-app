

import React, { useEffect, useState } from 'react'
import './Filter.scss';





export function Filter(props) {
    const [filterBy, setFilterBy] = useState('');


    const setFilter = (ev) => {
        setFilterBy(ev.target.value);
        props.onSetFilter(filterBy);
    }

    return <form className="filter">
        <label htmlFor="type">Search by country name:</label>
        <input type="text"  onChange={setFilter} placeholder="Country name..."/>
    </form>
}

