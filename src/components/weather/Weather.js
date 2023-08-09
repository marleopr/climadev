import { faTemperatureArrowDown, faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAlignJustify, FaThermometer, FaWind } from "react-icons/fa";
import { styled } from "styled-components"
// import { FaCloud } from "react-icons/fa"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark, faCloud } from '@fortawesome/free-solid-svg-icons';

const Weather = ({ weatherData }) => {
    return (
        <Main>
            <h3>O tempo agora em {weatherData.name}</h3>
            {weatherData.weather.map((item) => (
                <div key={item.id}>
                    <img
                        src={`http://openweathermap.org/img/w/${item.icon}.png`}
                        alt={item.description}
                        style={{ width: '70px' }}
                    />
                    <p>{item.description}</p>
                </div>
            ))}
            <h1>{weatherData.main.temp.toFixed(1)}°C</h1>
            <DadosContainer>
                <p><FaThermometer /> Umidade: {weatherData.main.humidity}%</p>
                <span>
                    <p><FontAwesomeIcon icon={faTemperatureArrowDown} style={{ color: "#0091ff", }} /> Mínima: {weatherData.main.temp_min.toFixed(1)}°C</p>
                    {/* <p> | </p> */}
                    <p><FontAwesomeIcon icon={faTemperatureArrowUp} style={{ color: "#ff0000", }} /> Máxima: {weatherData.main.temp_max.toFixed(1)}°C</p>
                </span>
                {weatherData.rain && weatherData.rain["1h"] && (
                    <p>Chuva na última hora: {weatherData.rain["1h"]} mm</p>
                )}
                <p><FaAlignJustify /> Velocidade do vento: {(weatherData.wind.speed * 3.6).toFixed(1)} km/h</p>
                <p><FaWind /> Rajada: {(weatherData.wind.gust * 3.6).toFixed(1)} km/h</p>
            </DadosContainer>
        </Main>
    )
}
export default Weather

const Main = styled.div`
    /* border: solid black; */
    width: 98vw;
    h1 {
        color: #0559c0;
        text-shadow: 0 1px 3px #0072fe;
    }
    h3 {
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
        display: inline-flex;
    }
    p {
        margin: 5px;
    }
`