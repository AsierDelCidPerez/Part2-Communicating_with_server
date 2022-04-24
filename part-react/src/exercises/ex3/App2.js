import Filtro from './components2/Filtro';
import React, {useState, useEffect} from 'react';
import Report from './components2/Report';
import axios from 'axios';

const App2 = () => {
    const [countries, setCountries] = useState({
        countries : [], filtred : []
    })
    useEffect(() => {
        axios
          .get('https://restcountries.com/v2/all')
          .then(response => setCountries({
              countries: response.data, filtred: response.data
          }));
      }, [])
    return (
        <div>
            <Filtro countries={countries} setCountries={setCountries}/>
            <Report countries={countries.filtred}/>
        </div>
    )
}

export default App2;