import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import ForecastInfo from './components/ForecastInfo';
import Footer from './components/Footer';



const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
    const [darkMode, setDarkMode] = useState(false);
    
    

    useEffect(() => {
      // Change theme based on weather condition (light/dark mode)
      if (weatherData) {
          const condition = weatherData.weather[0].main.toLowerCase();
          setDarkMode(condition.includes('rain') || condition.includes('cloud') || condition.includes('thunder'));
      }
  

  }, [weatherData]);
  
   
    return (       

      <div
      
            className={`min-h-screen flex flex-col items-end p-4 ${
                darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white' : "bg-gradient-to-r from-slate-100 to-blue-300 text-gray-700"
            } transition-colors duration-500`}
         >
       
             <div className="flex space-x-1">                
                    <span>Light</span>
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className="toggle-switch"
                    />
                    <span>Dark</span>
                 </div>

         <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mt-16  mb-4 text-center"> Weather Dashboard </h1>           
        </div>      
            <WeatherForm 
            setWeatherData={setWeatherData}
            setForecastData={setForecastData} 
            unit={unit} 
            setUnit={setUnit}
             />   

            {weatherData && <WeatherInfo data={weatherData} unit={unit} />}
            {forecastData && <ForecastInfo data={forecastData} unit={unit} />}
            
            <Footer /> {/* Use the Footer component */}

     </div>   
       
        
    );
};

export default App;