import homeVideo from "../assets/homeVideo.mp4"
const HomeVideo = () => {
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
                controls
                autoPlay
                muted
                loop
                onMouseEnter={(e) => e.target.controls = false} // Ocultar controles ao passar o mouse
                onMouseLeave={(e) => e.target.controls = false} // Ocultar controles ao remover o mouse
            >
                <source src={homeVideo} type="video/mp4" />
                {/* Adicione mais <source> para formatos de vídeo diferentes, se necessário */}
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    );
};

export default HomeVideo;
