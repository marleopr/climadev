import { faBarsStaggered, faCircleXmark, faCloud, faCloudBolt, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GetIconForClima = ({ weatherData }) => {
    const climaDict = {
        "nublado": <FontAwesomeIcon icon={faCloud} />,
        "chuva leve": <FontAwesomeIcon icon={faCloudRain} />,
        "chuva moderada": <FontAwesomeIcon icon={faCloudRain} />,
        "chuva de forte intensidade": <FontAwesomeIcon icon={faCloudRain} />,
        "chuva extrema": <FontAwesomeIcon icon={faCloudRain} />,
        "chuva muito forte": <FontAwesomeIcon icon={faCloudRain} />,
        "trovoada com chuva leve": <FontAwesomeIcon icon={faCloudBolt} />,
        "trovoada com chuva": <FontAwesomeIcon icon={faCloudBolt} />,
        "trovoada com chuva forte": <FontAwesomeIcon icon={faCloudBolt} />,
        "leve tempestade": <FontAwesomeIcon icon={faCloudBolt} />,
        "trovoada": <FontAwesomeIcon icon={faCloudBolt} />,
        "forte tempestade": <FontAwesomeIcon icon={faCloudBolt} />,
        "tempestade irregular": <FontAwesomeIcon icon={faCloudBolt} />,

        "neblina": <FontAwesomeIcon icon={faBarsStaggered} />,
        "céu limpo": <FontAwesomeIcon icon={faSun} />
    }
    const descricaoClima = weatherData.weather[0].description;

    // Verificar se a descrição existe no dicionário
    if (climaDict[descricaoClima]) {
        return climaDict[descricaoClima];
    } else {
        return <FontAwesomeIcon icon={faCircleXmark} />;
    }
}

export default GetIconForClima