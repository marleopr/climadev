import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url2, key } from '../../constants/BASE_URL';
import { format } from 'date-fns';
import TrackLoader from '../loadersButtons/TrackLoader';
import { styled } from 'styled-components';

const WeatherForecast = ({ city }) => {
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getWeatherForecast = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${base_url2}q=${city}&lang=pt_br&units=metric&cnt=40&appid=${key}`);
                setForecastData(response.data.list);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao obter previsão do tempo:', error);
                setLoading(false);
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
            <DadosContainer>
                <h3>Previsão do Tempo para os Próximos Dias</h3>
                {loading ? (
                    // <p>Carregando previsão do tempo...</p>
                    <TrackLoader />
                ) : (
                    <div>
                        {filteredForecast.map((forecast) => {
                            const date = new Date(forecast.dt_txt);
                            const formattedDate = format(date, 'dd/MM/yyyy');
                            return (
                                <span key={forecast.dt}>
                                    <p>{formattedDate}</p>
                                    <h4>{forecast.main.temp.toFixed(1)}°C</h4>
                                    <p>{forecast.weather[0].description}</p>
                                </span>
                            );
                        })}
                    </div>
                )}
            </DadosContainer>
        </Main>
    );
};

export default WeatherForecast;

const Main = styled.div`
    /* border: solid black; */
    width: 98vw;
    h1 {
        color: #0559c0;
        text-shadow: 0 1px 3px #0072fe;
    }
    h3, h4 {
        color: #0559c0;
    }
    `
const DadosContainer = styled.div`
    /* border: 1px solid red; */
    margin: 0;
    padding: 5px;
    font-size: 12px;
    background-color: #f9fbff;
    span {
        /* border: 1px solid blue; */
        /* display: inline-flex; */
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    }
    p {
        /* border: 1px solid greenyellow; */
        align-items: center;
        color: #0559c0;
        /* border: solid red; */
        /* margin: 5px; */
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: space-between; */
        /* align-items: center; */
        /* text-align: center; */
    }
`