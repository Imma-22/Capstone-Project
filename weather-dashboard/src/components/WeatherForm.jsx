import React, { useState, useEffect} from 'react';
import axios from 'axios';

const WeatherForm = ({ setWeatherData, setForecastData, unit, setUnit, weatherData}) => {
    const [city, setCity] = useState('');
   
    const fetchWeather = async (query, isGeolocation = false) => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b4c21772facbea596afec499f7b7c60&units=metric`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1b4c21772facbea596afec499f7b7c60&units=metric`;
        
       
        try {
            const params = isGeolocation
                ? { lat: query.lat, lon: query.lon, units: unit, appid: apiKey }
                : { q: query, units: unit, appid: apiKey };

            const [weatherResponse, forecastResponse] = await Promise.all([
                axios.get(weatherUrl, { params }),
                axios.get(forecastUrl, { params }),
            ]);

            setWeatherData(weatherResponse.data);
            setForecastData(forecastResponse.data);
        } catch (error) {
            alert('City not found!');
        }
    };

    useEffect(() => {
        if (weatherData) {
            const interval = setInterval(() => {
                fetchWeather(weatherData.name); // Update weather data every 5 minutes
            }, 300000); // 5 minutes

            return () => clearInterval(interval); // Clear interval on component unmount
        }
    }, [weatherData]);


    const handleSearch = () => {
        if (city.trim() !== '') fetchWeather(city);

    };

    
    const handleGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather({ lat: latitude, lon: longitude }, true);
                },
                () => alert('Geolocation access denied.')
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    };

    const toggleUnit = () => {
        setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
      
    };
   
    return (
        <div className=" mt-2 p-2 rounded-lg  flex flex-col items-center space-y-4 flex-grow w-full">
            <div className=" space-x-4 sm:grid-cols-2">
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-2 rounded-md border-none py-2 px-5 outline-none focus:ring-2 focus:ring-indigo-300 text-black"
                />

                <button
                    onClick={handleSearch}
                    className="bg-blue-300 px-6 py-2 rounded-md hover:bg-blue-400 transition"
                >
                    Search
                </button>

                <button
                    onClick={handleGeolocation}
                    className="bg-blue-300 px-7 py-2 rounded-md hover:bg-blue-400 transition"
                >
                    Current Location
                </button>
                
                <button
                    onClick={toggleUnit}
                    className="mt-4 mb-4 bg-blue-300 px-4 py-2 rounded-md hover:bg-blue-400 transition"
                 >
                Switch to {unit === 'metric' ? '°F' : '°C'}
                </button>
        
            </div>
            
        </div>
        
    );
};

export default WeatherForm;