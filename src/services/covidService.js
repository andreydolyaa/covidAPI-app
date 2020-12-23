
import axios from 'axios';
import { storageService } from './storageService';
const STORAGE_KEY = 'covid';


export const covidService = {
    query,
    formatNum,
    getCountryByCode
}

async function query(filterBy = '') {
    var covid = storageService.load(STORAGE_KEY);
    if (!covid) {
        covid = await axios.get(`https://api.covid19api.com/summary`);
        covid.data.Countries.forEach(country => country.img = `https://www.countryflags.io/${country.CountryCode}/shiny/32.png`);
        covid.data.Global.NewConfirmed = formatNum(covid.data.Global.NewConfirmed)
        covid.data.Global.TotalConfirmed = formatNum(covid.data.Global.TotalConfirmed)
        covid.data.Global.NewDeaths = formatNum(covid.data.Global.NewDeaths)
        covid.data.Global.TotalDeaths = formatNum(covid.data.Global.TotalDeaths)
        covid.data.Global.NewRecovered = formatNum(covid.data.Global.NewRecovered)
        covid.data.Global.TotalRecovered = formatNum(covid.data.Global.TotalRecovered)
        covid.data.Countries.forEach(country => {
            country.NewConfirmed = formatNum(country.NewConfirmed);
            country.TotalConfirmed = formatNum(country.TotalConfirmed);
            country.NewDeaths = formatNum(country.NewDeaths);
            country.TotalDeaths = formatNum(country.TotalDeaths);
            country.NewRecovered = formatNum(country.NewRecovered);
            country.TotalRecovered = formatNum(country.TotalRecovered);
        })
        storageService.store(STORAGE_KEY, covid.data);
        return covid.data
    }
    if (filterBy) {
        console.log('service filter by :', filterBy);
        var res = covid.Countries.filter(country => country.Country.toLowerCase().includes(filterBy.toLowerCase()));
        covid.Countries = res
    }
    return covid;
}


async function getCountryByCode(code) {
    var covid = await axios.get(`https://api.covid19api.com/summary`);
    var res = covid.data.Countries.find(country => country.CountryCode === code);
    res.img = `https://www.countryflags.io/${code}/shiny/32.png`;
    res.NewConfirmed = formatNum(res.NewConfirmed);
    res.TotalConfirmed = formatNum(res.TotalConfirmed);
    res.NewDeaths = formatNum(res.NewDeaths);
    res.TotalDeaths = formatNum(res.TotalDeaths);
    res.NewRecovered = formatNum(res.NewRecovered);
    res.TotalRecovered = formatNum(res.TotalRecovered);
    return res;
}


function formatNum(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}