import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url2, apyKey } from '../../constants/BASE_URL';
import { format } from 'date-fns';
// import TrackLoader from '../loadersButtons/TrackLoader';
import { styled } from 'styled-components';

const WeatherForecast = ({ city }) => {
    const [forecastData, setForecastData] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getWeatherForecast = async () => {
            // setLoading(true);
            try {
                const response = await axios.get(`${base_url2}q=${city}&lang=pt_br&units=metric&cnt=40&appid=${apyKey}`);
                setForecastData(response.data.list);
                // setLoading(false);
            } catch (error) {
                console.error('Erro ao obter previsão do tempo:', error);
                // setLoading(false);
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
                    <div>
                            {filteredForecast.map((forecast) => {
                                const date = new Date(forecast.dt_txt);
                                const formattedDate = format(date, 'dd/MM/yyyy');
                                return (
                                    // <span key={forecast.dt}>
                                    //     <p className="data-temp">{formattedDate}</p>
                                    //     <p className="data-temp">{forecast.main.temp.toFixed(1)}°C</p>
                                    //     <p className="description">{forecast.weather[0].description}</p>
                                    //     <img alt={forecast.weather[0].description} style={{ width: "50px" }} src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} />
                                    // </span>
                                    // <div className="cardContainer">
                                        <div className="minmaxContainer">
                                            <div className="min">
                                                <img alt={forecast.weather[0].description} style={{ width: "50px" }} src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} />
                                                <p className="maxTemp" style={{width: '70px'}}>{formattedDate}</p>
                                            </div>
                                            <div className="max">
                                                <p className="maxTemp" style={{width: '50px'}}>{forecast.main.temp.toFixed(1)}°C</p>
                                                <p className="maxTemp" style={{width: '125px'}}>{forecast.weather[0].description}</p>
                                            </div>
                                        </div>
                                    // </div>
                                );
                            })}
                        </div>
                 </div>
        </Main>
    );
};

export default WeatherForecast;

const Main = styled.div`
    /* border: solid green; */
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


// const Main = styled.div`
//     width: 98vw;
//     h1 {
//         color: #0559c0;
//         text-shadow: 0 1px 3px #0072fe;
//     }
//     h3, h4 {
//         color: #0559c0;
//     }
//     `
// const DadosContainer = styled.div`
//     margin: 0;
//     padding: 5px;
//     font-size: 12px;
//     .data-temp {
//             width: 70px;
//         }
//     .description {
//             width: 150px;
//         }
//     span {
     
//         display: flex;
//         flex-direction: row;
//         justify-content: space-evenly;
//         align-items: center;
//         text-align: center;
//     }
//     p {
//         align-items: center;
//         color: #0559c0;
//     }
// `