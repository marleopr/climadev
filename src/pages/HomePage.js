import { useEffect, useState } from "react";
import axios from "axios"
import { base_url, apiKey } from "../constants/BASE_URL"
import Weather from "../components/weather/Weather"
import TrackInput from "../components/loadersButtons/TrackInput"
import TrackButton from "../components/loadersButtons/TrackButton"
import TrackLoader from "../components/loadersButtons/TrackLoader"
import TrackHistory from "../components/trackHistory/TrackHistory"
import { styled } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LocationFinder from "../components/LocationFinder"
import HomeVideo from "../components/HomeVideo";
import EasterEgg from "../components/EasterEgg";

const HomePage = () => {

    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false);

    // Função auxiliar para recuperar o histórico do localStorage
    const getSearchHistoryFromLocalStorage = () => {
        const savedHistory = localStorage.getItem('searchHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    };
    const [searchHistory, setSearchHistory] = useState(getSearchHistoryFromLocalStorage());

    const handleDeleteSearch = (indexToDelete) => {
        const realIndexToDelete = searchHistory.length - 1 - indexToDelete;

        setSearchHistory((prevHistory) => {
            const updatedHistory = prevHistory.filter((item, index) => index !== realIndexToDelete)
            localStorage.setItem('searchHistory', JSON.stringify(updatedHistory))
            return updatedHistory
        })
    }
    // Salvar o histórico no localStorage sempre que for atualizado
    useEffect(() => {
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }, [searchHistory]);

    const GetWeather = async () => {
        setError(null)
        setLoading(true)
        try {
            const res = await axios.get(`${base_url}q=${city}&lang=pt_br&units=metric&appid=${apiKey}`)
            setWeatherData(res.data)
            setLoading(false)
            toast.success('Cidade encontrada!')
            if (res.data && res.data.length > 0) {
                setSearchHistory(prevHistory => [...prevHistory, { city: city, status: res.data[0].status }]);
            } else {
                setSearchHistory(prevHistory => [...prevHistory, { city: city, status: 'Status não disponível' }]);
            }
            if (res.data.length === 0) {
                return (
                    <div>
                        <h3>Dados de rastreamento para: {res.data.city}</h3>
                        {toast.error("Cidade não encontrada!")}
                    </div>
                );
            }

        } catch (error) {
            setLoading(false)
            toast.error("Cidade não encontrada!")

        }
    }

    const handleWeather = async () => {
        await GetWeather()
        setCity("")
    }
    useEffect(() => {
        if (buttonClicked) {
            handleWeather(); // Chama a função de pesquisa
            setButtonClicked(false); // Reseta buttonClicked para false após a pesquisa
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buttonClicked]);
    // Função para realizar uma nova pesquisa com o código clicado no histórico
    const handleSearchFromHistory = (city) => {
        setCity(city); // Define o código para realizar a pesquisa
        setError(null); // Limpa o estado de erro
        setWeatherData(null); // Limpa o estado de dados da API
        setButtonClicked(true);
    };

    const isCityValid = city.trim() !== '';
    const capitalizedCityName = city.toLowerCase().replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());

    <EasterEgg />

    return (
        <Main>
            <ToastContainer />
            <SearchContainer>
                <span>
                    <TrackInput type="text" placeholder="Buscar cidade..." value={capitalizedCityName} onChange={(event) => setCity(event.target.value)} />
                </span>
                <span>
                    <TrackButton onClick={handleWeather} label="Buscar" style={{ fontSize: '16px' }} disabled={!isCityValid} iconSvg={<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />} />
                </span>
                <span>
                    <LocationFinder setLoading={setLoading} setWeatherData={setWeatherData} />
                </span>
            </SearchContainer>
            <div>
                {error && <p style={{ color: 'red', width: '70%' }}>{error}</p>}
                {loading ? (
                    <TrackLoader />
                ) : (
                    <>
                        {!weatherData && <HomeVideo />}
                        {weatherData && <Weather weatherData={weatherData} />}
                        <div style={{ width: '100%' }}>
                            <TrackHistory
                                searchHistory={searchHistory}
                                handleSearchFromHistory={handleSearchFromHistory}
                                handleDeleteSearch={handleDeleteSearch}
                            />
                        </div>
                    </>
                )}
            </div>
        </Main>
    );
}
export default HomePage

const Main = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    width: 100%;
`
const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    span{
        margin: 5px;
    }
`