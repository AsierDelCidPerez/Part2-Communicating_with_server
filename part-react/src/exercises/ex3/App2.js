import Filtro from './components2/Filtro';
import React, {useState, useEffect} from 'react';
import Report from './components2/Report';
import axios from 'axios';

const App2 = () => {
    const [countries, setCountries] = useState({
        countries : [], filtred : []
    })
    const [weather, setWeather] = useState([])
    useEffect(() => {
        axios
          .get('https://restcountries.com/v2/all')
          .then(response => setCountries({
              countries: response.data, filtred: response.data
          }));
      }, [])

      useEffect(() => {
          if(countries.filtred.length === 1){
                axios.get(`http://api.weatherstack.com/current?access_key=3c73bc7977e5c3113153b79012c8ed28&query=${countries.filtred[0].capital}`).then(response =>
                    setWeather(response.data))
          }
      }, [countries.filtred]) // SOLO SE EJECUTA CUANDO CAMBIE countries.filtred
    return (
        <div>
            <Filtro countries={countries} setCountries={setCountries}/>
            <Report countries={countries.filtred} weather={weather}/>
        </div>
    )
}

export default App2;