import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url2, apiKey } from '../../constants/BASE_URL';
import { format } from 'date-fns';
import { styled } from 'styled-components';

const WeatherForecast = ({ city }) => {
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        const getWeatherForecast = async () => {
            try {
                const response = await axios.get(`${base_url2}q=${city}&lang=pt_br&units=metric&cnt=40&appid=${apiKey}`);
                setForecastData(response.data.list);
            } catch (error) {
                console.error('Erro ao obter previsão do tempo:', error);
            }
        };

        getWeatherForecast();
    }, [city]);
    const filteredForecast = forecastData.filter((forecast, index) => {
        // Filtra os registros de previsão para exibir apenas os próximos 5 dias (40 / 8 = 5)
        return index % 8 === 0;
    });
    return (
        <Main>
            <div className="card">
                <h3>Previsão do Tempo para os Próximos Dias</h3>
                <div style={{ marginBottom: '60px' }}>
                    {filteredForecast.map((forecast, index) => {
                        const date = new Date(forecast.dt_txt);
                        const formattedDate = format(date, 'dd/MM/yyyy');
                        return (
                            <div className="minmaxContainer" key={index}>
                                <div className="min">
                                    <img alt={forecast.weather[0].description} style={{ width: "50px" }} src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} />
                                    <p className="maxTemp" style={{ width: '70px' }}>{formattedDate}</p>
                                </div>
                                <div className="max">
                                    <p className="maxTemp" style={{ width: '50px' }}>{forecast.main.temp.toFixed(1)}°C</p>
                                    <p className="maxTemp" style={{ width: '125px' }}>{forecast.weather[0].description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Main>
    );
};

export default WeatherForecast;

const Main = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px;
    h3 {
        color: white;
        margin-top: 20px;
    }
`