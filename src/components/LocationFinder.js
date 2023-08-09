import React from 'react';
// import TrackButton from "../components/loadersButtons/TrackButton"
// import { FaSearchLocation } from "react-icons/fa";
import axios from "axios"
import { base_url, key } from '../constants/BASE_URL';
import { toast } from 'react-toastify';

const LocationFinder = ({ setLoading, setWeatherData }) => {
    const handleLocationWeather = async (latitude, longitude) => {
        setLoading(true);
        try {
            const res = await axios.get(
                `${base_url}lat=${latitude}&lon=${longitude}&lang=pt_br&units=metric&appid=${key}`
            );
            setWeatherData(res.data);
            toast.success("Localização encontrada com sucesso!")
        } catch (error) {
            console.error("Erro ao obter os dados do clima:", error);
            toast.error("Erro ao obter os dados do clima")
        } finally {
            setLoading(false);
        }
    }
    return (
        // <TrackButton
        //     onClick={() => {
        //         setLoading(true);
        //         if ("geolocation" in navigator) {
        //             navigator.geolocation.getCurrentPosition(
        //                 (position) => {
        //                     const { latitude, longitude } = position.coords;
        //                     handleLocationWeather(latitude, longitude);
        //                 },
        //                 (error) => {
        //                     console.error("Erro ao obter a localização:", error);
        //                     toast.error("Erro ao obter a localização")
        //                     setLoading(false);
        //                 }
        //             );
        //         } else {
        //             console.error("Geolocalização não é suportada pelo navegador.");
        //             toast.error("Geolocalização não é suportada pelo navegador.");
        //             setLoading(false);
        //         }
        //     }}
        //     label="Localização"
        //     style={{ fontSize: '16px' }}
        //     iconSvg={<FaSearchLocation />}
        // />
        <button
            className="location-button"
            alt="Usar Geolocalização"
            title="Usar Geolocalização"
            onClick={() => {
                setLoading(true);
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            handleLocationWeather(latitude, longitude);
                        },
                        (error) => {
                            console.error("Erro ao obter a localização:", error);
                            toast.error("Erro ao obter a localização")
                            setLoading(false);
                        }
                    );
                } else {
                    console.error("Geolocalização não é suportada pelo navegador.");
                    toast.error("Geolocalização não é suportada pelo navegador.");
                    setLoading(false);
                }
            }}>
            <svg viewBox="0 0 448 512"
                className="bell"
            >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" ></path>
            </svg>
        </button>
    )

};

export default LocationFinder;