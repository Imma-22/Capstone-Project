import React from 'react';

const ForecastInfo = ({ data, unit }) => {
    // Group data by day
    const groupedData = data.list.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[0];
        acc[date] = acc[date] || [];
        acc[date].push(item);
        return acc;
    }, {});

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-2/3 lg:w-full">
            {Object.entries(groupedData).map(([date, entries]) => (
                <div
                    key={date}
                    className="bg-gradient-to-r from-slate-100 to-sky-500 text-black p-4 rounded-lg shadow-lg"
                >
                    <h3 className="font-bold mb-2">{date}</h3>
                    {entries.slice(0, 3).map((entry) => {
                        const weatherIcon = `https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`;
                        return(
                        <div key={entry.dt} className="mb-4 flex items-center">
                             <div className="mr-4">
                            <p>{entry.dt_txt.split(' ')[1]}</p>
                            <img src={weatherIcon} alt={entry.weather[0].description} className="w-15 h-10" />
                             </div>
                             <div>
                             <p className="capitalize">{entry.weather[0].description}</p>
                            <p className="w-15 h-10">🌡️ {entry.main.temp}°{unit === 'metric' ? 'C' : 'F'} </p>
                            
                        </div>
                        </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default ForecastInfo;