import './styled.css'
const TrackButton = ({ onClick, label, disabled, iconSvg, style }) => {
    const handleClick = () => {
        onClick();
    };
    const SvgIcon = ({ icon, color }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill={color}>
                {icon}
            </svg>
        );
    };

    return (
        <button className="contactButton" onClick={handleClick} disabled={disabled} style={style} >
            {label}
            <div className="iconButton">
                <SvgIcon icon={iconSvg} color="#ffffff" />
            </div>
        </button>
    )
}
export default TrackButton