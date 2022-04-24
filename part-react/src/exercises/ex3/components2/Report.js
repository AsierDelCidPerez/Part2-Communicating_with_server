import axios from 'axios';
import Header from './Header';
import Weather from './Weather'

const Report = ({countries, weather}) => {
    if(countries.length >= 10){
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }else if(countries.length > 1){
        return (
            <div>
                {
                    countries.map((country, i) => <p key={i}>{country.name}</p>)
                }
            </div>
        )
    }else if(countries.length === 1){
        return (
            <div>
                <Header text={countries[0].name}/>
                <p>Capital: {countries[0].capital}</p>
                <p>Population: {countries[0].population}</p>
                <Header text="languages"/>
                <ul>
                    {
                        countries[0].languages.map((language, i) => <li key={i}>{language.name}</li>)
                    }
                </ul>
                <img src={countries[0].flags.png}/>
                <Weather weather={weather} />

            </div>
        )
    }else{
        return <p>No se hanm encontrado resultados {countries.length}</p>
    }
}

export default Report;