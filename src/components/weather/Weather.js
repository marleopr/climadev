import { faTemperatureArrowDown, faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCloudShowersHeavy, FaExclamationTriangle, FaMoon, FaSun, FaTachometerAlt, FaTint, FaWind } from "react-icons/fa";
import { styled } from "styled-components"
import WeatherForecast from "./WeatherForecast";

const Weather = ({ weatherData }) => {

    const convertUnixTimestampTo24Hour = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <Main>
            <CardContainer>
                <Main>
                    <div className="cardContainer">
                        <div className="card">
                            <p className="city">{weatherData.name}</p>
                            {weatherData.weather.map((item) => (
                                <div key={item.id}>
                                    <p className="weather">{item.description}</p>
                                    <img
                                        src={`http://openweathermap.org/img/w/${item.icon}.png`}
                                        alt={item.description}
                                        style={{ width: '70px', padding: '0' }}
                                    />
                                </div>
                            ))}
                            <p className="temp" >{weatherData.main.temp.toFixed(1)}°C</p>
                            <p className="minTemp">Sensação térmica: {weatherData.main.feels_like.toFixed(1)}°C</p>

                            <div className="minmaxContainer">
                                <div className="min">
                                    <p className="maxTemp"><FontAwesomeIcon icon={faTemperatureArrowDown} style={{ color: "#0091ff" }} /> Min</p>
                                    <p className="maxTemp"><FontAwesomeIcon icon={faTemperatureArrowUp} style={{ color: "#ff0000" }} /> Max</p>
                                    <p className="maxTemp"><FaTint style={{ color: "#0091ff" }} /> Umidade</p>
                                    <p className="maxTemp"><FaTachometerAlt style={{ color: "white" }} /> Pressão</p>
                                    {weatherData.rain && weatherData.rain["1h"] && (
                                        <p className="maxTemp" style={{ width: '125px' }}><FaCloudShowersHeavy /> Chuva na última hora</p>)}
                                    {weatherData.snow && weatherData.snow["1h"] && (
                                        <p className="maxTemp" style={{ width: '125px' }}><FaCloudShowersHeavy /> Neve na última hora</p>)}
                                    <p className="maxTemp"><FaWind style={{ color: "white" }} /> Velocidade do vento</p>
                                    {weatherData.wind && weatherData.wind.gust && (
                                        <p className="maxTemp"><FaExclamationTriangle style={{ color: "#ff0000" }} /> Rajada</p>)}

                                    <p className="maxTemp"><FaSun style={{ color: "orange" }} /> Amanhecer</p>
                                    <p className="maxTemp"><FaMoon style={{ color: "#0091ff" }} /> Anoitecer</p>
                                </div>
                                <div className="max">
                                    <p className="maxTemp">{weatherData.main.temp_min.toFixed(1)}°C</p>
                                    <p className="maxTemp">{weatherData.main.temp_max.toFixed(1)}°C</p>
                                    <p className="maxTemp">{weatherData.main.humidity}%</p>
                                    <p className="maxTemp">{weatherData.main.pressure}hPa</p>
                                    {weatherData.rain && weatherData.rain["1h"] && (
                                        <p className="maxTemp" >{weatherData.rain["1h"]} mm</p>)}
                                    {weatherData.snow && weatherData.snow["1h"] && (
                                        <p className="maxTemp">{weatherData.snow["1h"]} mm</p>)}
                                    <p className="maxTemp">{(weatherData.wind.speed * 3.6).toFixed(1)} km/h</p>
                                    {weatherData.wind && weatherData.wind.gust && (
                                        <p className="maxTemp">{(weatherData.wind.gust * 3.6).toFixed(1)} km/h</p>)}
                                    <p className="maxTemp"> {convertUnixTimestampTo24Hour(weatherData.sys.sunrise)} </p>
                                    <p className="maxTemp">{convertUnixTimestampTo24Hour(weatherData.sys.sunset)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main >
                {weatherData && <WeatherForecast city={weatherData.name} />}
            </CardContainer>
            {/* MAPAS EM PROCESSO DE IMPLEMENTAÇÃO */}
            {/* <div>
                <WeatherMap city={weatherData.name} apiKey={apyKey} />
            </div> */}
        </Main>
    )
}
export default Weather

const Main = styled.div`
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    @media screen and (max-device-width: 480px) {
    flex-direction: column;
  }
`