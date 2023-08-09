import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaWhatsapp } from 'react-icons/fa';
// import linkTrackLogo from "../../assets/linkEtrackLogo.png"

const Footer = () => {
    return (
        // <div style={{ marginBottom: "20px", position: "fixed", bottom: 0, width: "100%", backgroundColor: "#f9f9f9" }}>
        <div style={{ marginBottom: "20px", bottom: 0, width: "100%", textAlign: 'center' }}>
            <div style={{ margin: "20px" }} className="social-buttons">
                <a
                    href="https://github.com/marleopr"
                    className="social-button github"
                    alt="GitHub"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/marleopiber/"
                    className="social-button linkedin"
                    alt="Linkedin"
                    title="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a
                    href="https://marleo-portfolio.vercel.app/"
                    className="social-button portfolio"
                    alt="Portfólio"
                    title="Portfólio"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGlobe />
                </a>
                <a
                    href="https://whats.link/marleopr"
                    className="social-button whatsapp"
                    alt="WhatsApp"
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", textAlign: 'center' }}>
                <p style={{ margin: 0 }}>
                    Márleo Piber • Full Stack Developer © 2023 •
                    {/* Desenvolvido com a API
                    <a href={'https://linketrack.com/'} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: "100px", marginLeft: "5px" }} src={linkTrackLogo} alt='Link & Track' />
                    </a> */}
                </p>
            </div>
        </div>
    );
};

export default Footer;
