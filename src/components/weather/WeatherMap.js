import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MapComponent = ({ layer, z, x, y, apiKey }) => {
    const mapUrl = `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${apiKey}`;

    return (
        <div>
            <h2>Map</h2>
            <p>Coordinates: {x}, {y}</p>
            <img src={mapUrl} alt="Map" />
        </div>
    );
};
const WeatherMap = ({ city, apiKey }) => {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const getCityCoordinates = async () => {
            try {
                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                );
                const { coord } = res.data;
                console.log(res.data)
                setCoordinates(coord);
            } catch (error) {
                console.error('Error fetching city coordinates:', error);
                console.log(error)
            }
        };

        getCityCoordinates();
    }, [apiKey, city]);

    return (
        <div>
            {coordinates && (
                <MapComponent layer="precipitation_new" z={10} x={coordinates.lon} y={coordinates.lat} apiKey={apiKey} />
            )}
        </div>
    );
};

export default WeatherMap;
