import { useState } from "react";
import homeVideo from "../assets/homeVideo.mp4"
const HomeVideo = () => {
    const [controlsVisible, setControlsVisible] = useState(true);

    const handleMouseEnter = () => {
        setControlsVisible(false);
    };

    const handleMouseLeave = () => {
        setControlsVisible(false);
    };

    const handleTouch = () => {
        setControlsVisible(!controlsVisible);
    };
    return (
        <div>
            <video
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100%',
                    maxWidth: '30rem',
                    maxHeight: '15rem',
                    height: '300px'
                }}
                controls={controlsVisible}
                autoPlay
                muted
                loop
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouch}
            >
                <source src={homeVideo} type="video/mp4" />
                {/* Adicione mais <source> para formatos de vídeo diferentes, se necessário */}
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    );
};

export default HomeVideo;
