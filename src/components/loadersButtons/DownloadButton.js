import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DownloadButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        // Verificar se o evento beforeinstallprompt foi acionado no passado
        const isAppInstalled = localStorage.getItem("isAppInstalled");
        if (isAppInstalled) {
            setIsInstalled(true);
        } else {
            window.addEventListener("beforeinstallprompt", (event) => {
                event.preventDefault();
                setDeferredPrompt(event);
            });
        }
    }, []);

    const handleInstallApp = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    toast.success("Usuário aceitou a instalação");
                    // Salvar no localStorage para indicar que o aplicativo foi instalado
                    localStorage.setItem("isAppInstalled", true);
                    setIsInstalled(true);
                } else {
                    toast.error("Usuário recusou a instalação");
                }
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <>
            {!isInstalled && (
                <button className="buttonDownload" onClick={handleInstallApp}>
                    Baixe o App
                </button>
            )}
        </>
    );
};

export default DownloadButton;
