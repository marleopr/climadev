
import { styled } from "styled-components";
import climaLogo from "../assets/climaDev.png"
import DownloadButton from "../components/loadersButtons/DownloadButton";

const Header = () => {

    const handleReloadHomePage = () => {
        window.location.reload();
    };
    return (
        <div>
            <div style={{ cursor: "pointer", alignItems: "center" }} onClick={() => handleReloadHomePage()}>
                <ImgLogo src={climaLogo} alt="Logo ClimaDev" />
            </div>
            <DownloadButton />
        </div>
    )
}
export default Header;
const ImgLogo = styled.img`
    width: 300px;
    height: 60px;
    margin: 10px;
`