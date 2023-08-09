const TrackInput = ({ value, onChange, placeholder }) => {
    return (
        <input type="text" placeholder={placeholder} name="text" className="input" value={value} onChange={onChange}></input>
    )
}
export default TrackInput