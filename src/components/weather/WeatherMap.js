import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { key } from '../../constants/BASE_URL';

const WeatherMap = ({ city, apiKey }) => {
    const MapComponent = ({ layer, z, x, y, key }) => {
        const mapUrl = `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${key}`;

        return (
            <div>
                <h2>Map</h2>
                <img src={mapUrl} alt="Map" />
            </div>
        );
    };
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const getCityCoordinates = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
                );
                const { coord } = response.data;
                setCoordinates(coord);
            } catch (error) {
                console.error('Error fetching city coordinates:', error);
            }
        };

        getCityCoordinates();
    }, [city]);

    return (
        <div>
            {coordinates && (
                <MapComponent layer="clouds_new" z={10} x={coordinates.lon} y={coordinates.lat} key={key} />
            )}
        </div>
    );
};

export default WeatherMap;
