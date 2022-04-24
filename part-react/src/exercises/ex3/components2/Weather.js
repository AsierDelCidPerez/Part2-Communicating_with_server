const Weather = ({weather}) => {
    return (
        <div>
        <h1>Weather in <b>{weather.location.name}</b></h1>
        <p><b>Temperature</b>: {weather.current.temperature}ºC</p>
        <img src={weather.current.weather_icons[0]}/>
        <p><b>Wind</b>: {weather.current.wind_speed} direction {weather.current.wind_dir}</p>
    </div>
    )
}

export default Weather;