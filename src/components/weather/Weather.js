import { faTemperatureArrowDown, faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCloudShowersHeavy, FaExclamationTriangle, FaMoon, FaSun, FaTachometerAlt, FaTint, FaWind } from "react-icons/fa";
import { styled } from "styled-components"
import WeatherForecast from "./WeatherForecast";
// import WeatherMap from "./WeatherMap";
// import { FaCloud } from "react-icons/fa"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark, faCloud } from '@fortawesome/free-solid-svg-icons';

const Weather = ({ weatherData }) => {

    const convertUnixTimestampTo24Hour = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

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
            <p>Sensação térmica: {weatherData.main.feels_like.toFixed(1)}°C</p>
            <DadosContainer>
                <p><FaTint /> Umidade: {weatherData.main.humidity}%</p>
                <p><FaTachometerAlt /> Pressão: {weatherData.main.pressure}hPa</p>
                <span>
                    <p><FontAwesomeIcon icon={faTemperatureArrowDown} style={{ color: "#0091ff", }} /> Mínima: {weatherData.main.temp_min.toFixed(1)}°C</p>
                    {/* <p> | </p> */}
                    <p><FontAwesomeIcon icon={faTemperatureArrowUp} style={{ color: "#ff0000", }} /> Máxima: {weatherData.main.temp_max.toFixed(1)}°C</p>
                </span>
                {weatherData.rain && weatherData.rain["1h"] && (
                    <p><FaCloudShowersHeavy /> Chuva na última hora: {weatherData.rain["1h"]} mm</p>
                )}
                {weatherData.snow && weatherData.snow["1h"] && (
                    <p><FaCloudShowersHeavy /> Neve na última hora: {weatherData.snow["1h"]} mm</p>
                )}
                <p><FaWind /> Velocidade do vento: {(weatherData.wind.speed * 3.6).toFixed(1)} km/h</p>
                {/* <p><FaExclamationTriangle /> Rajada: {(weatherData.wind?.gust * 3.6).toFixed(1)} km/h</p> */}
                {weatherData.wind && weatherData.wind.gust && (
                    <p><FaExclamationTriangle /> Rajada: {(weatherData.wind.gust * 3.6).toFixed(1)}km/h</p>
                )}
                <span>
                    <p> <FaSun style={{ color: "orange" }} /> {convertUnixTimestampTo24Hour(weatherData.sys.sunrise)} </p>
                    <p> <FaMoon style={{ color: "#0091ff" }} /> {convertUnixTimestampTo24Hour(weatherData.sys.sunset)} </p>
                </span>
            </DadosContainer>
            {weatherData && <WeatherForecast city={weatherData.name} />}
            <div>
                {/* <WeatherMap city={weatherData.name} /> */}
            </div>
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