import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 bg-gray-600 text-white text-center w-full">
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