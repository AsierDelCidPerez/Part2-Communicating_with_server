import axios from 'axios';
import Header from './Header';
import React, {useState, useEffect} from 'react';

const Report = ({countries}) => {
    const weather = [];
    axios.get(`http://api.weatherstack.com/current?access_key=3c73bc7977e5c3113153b79012c8ed28&query=Madrid`)
    .then(response => {
        weather.push(response.data.current.temperature);
        weather.push(response.data.current.weather_icons[0]);
        weather.push(response.data.current.wind_speed);
        weather.push(response.data.current.wind_dir);
    })

    console.log(weather);

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
                {
                    axios.get(`http://api.weatherstack.com/current?access_key=3c73bc7977e5c3113153b79012c8ed28&query=${countries[0].capital}`)
                            .then(response => (<div>
                                    <h1>Weather in <b>{countries[0].capital}</b></h1>
                                    <p><b>Temperature</b>: {response.data.current.temperature}ºC</p>
                                    <img src={response.data.current.weather_icons[0]}/>
                                    <p><b>Wind</b>: {response.data.current.wind_speed} direction {response.data.current.wind_dir}</p>
                                </div>)
                            )
                }
            </div>
        )
    }
}

export default Report;