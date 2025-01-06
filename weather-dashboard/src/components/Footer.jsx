import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-8 text-gray-400 text-center font-extrabold text-sm w-full ">
            <p>&copy; {new Date().getFullYear()} Weather Dashboard.</p>
            <p>
                Data provided by{' '}
                <a
                    href="https://openweathermap.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-400"
                >
                    OpenWeatherMap
                </a>
            </p>
        </footer>
    );
};

export default Footer;