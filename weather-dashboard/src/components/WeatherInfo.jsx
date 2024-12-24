import React from 'react';

const WeatherInfo = ({ data, unit }) => {
    const { name, main, weather, wind, visibility } = data;
    const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    

    return (
        <div className="mt-6 bg-[url('./images/sky3.jpg')] text-black p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-full">

            <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold mt-2">{name}</h2>    
            <img src={weatherIcon} alt={weather[0].description}/>

            </div>
                <h2> Now </h2>
                <p className="text-xl capitalize font-bold"  >{weather[0].description}</p>
                 <div className="mt-4 space-y-2">
                <p className="text-lg">🌡️ Temperature: {main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
                <p className="text-lg">💧 Humidity: {main.humidity}%</p>
                <p className="text-lg">🌬️ Wind Speed: {wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
                <p className="text-lg">👁️ Visibility: {visibility / 1000} km</p>
                <p className="text-lg">☔ Precipitation: {main.pressure} hPa </p>      
            </div>
        </div>
    );
};

export default WeatherInfo;