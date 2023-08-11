import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey, base_url, base_urlAir } from "../../constants/BASE_URL"
import { FaFrown, FaMeh, FaSadCry, FaSkullCrossbones, FaSmile } from "react-icons/fa";

const AirPollution = ({ city }) => {
    const [AirData, setAirData] = useState([]);

    const GetAirDict = (aqi) => {
        const airDict = {
            1: <p><FaSmile style={{color: "#15d500"}} /> Muito boa</p>,
            2: <p><FaMeh style={{color: "#0091ff"}} /> Boa</p>,
            3: <p><FaFrown style={{color: "#ffd000"}}/> Moderado</p>,
            4: <p><FaSadCry style={{color: "#a9a9a9"}} /> Ruim</p>,
            5: <p><FaSkullCrossbones style={{color: "#ff0000"}} /> Muito ruim</p>,
        }
        return airDict[aqi] || <p>Sem dados</p>
    }
    useEffect(() => {
        const getAirPollution = async () => {
            try {
                const res = await axios.get(`${base_url}q=${city}&appid=${apiKey}`);
                const { coord } = res.data; // Obter as coordenadas diretamente da resposta
                const { lat, lon } = coord;
                const airPollutionRes = await axios.get(`${base_urlAir}lat=${lat}&lon=${lon}&appid=${apiKey}`);
                setAirData(airPollutionRes.data.list);
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        getAirPollution();
    }, [city]);

    return (
        <span>
            {AirData.map((data, index) => (
                <span key={index}>
                    {GetAirDict(data.main.aqi)}
                </span>
            ))}
        </span>
    );
};

export default AirPollution;
