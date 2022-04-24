import axios from 'axios';
const Filtro = ({countries, setCountries}) => {
    const updateReport = event => 
    setCountries({
        ...countries, filtred : countries.countries.filter(country => country.name.toLowerCase().match(event.target.value.toLowerCase()))
    })


    return (
        <div>
            <label>find countries: <input type="text" onChange={updateReport}/></label>
        </div>
    )
}

export default Filtro;