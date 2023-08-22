import { styled } from "styled-components"
import { FaGlobeAmericas, FaSistrix, FaTrash } from 'react-icons/fa';

const TrackHistory = ({ searchHistory, handleSearchFromHistory, handleDeleteSearch }) => {

    return (
        <div>
            <h4 style={{ color: "white" }}>Histórico de Pesquisas:</h4>
            {searchHistory.length > 0 ?
                <HistoryContainer>
                    {searchHistory.map((item, index) => (
                        <ul key={index} >
                            <div>
                                <span onClick={() => handleSearchFromHistory(item.city)} >
                                    {item.city}
                                </span>
                                <StyledTrashIcon
                                    onClick={() => handleDeleteSearch(index)}
                                    aria-label="Excluir"
                                    alt="Lixeira"
                                    title="Excluir"
                                />
                            </div>
                        </ul>
                    ))}
                </HistoryContainer>
                :
                <p style={{ color: "white" }}> Você ainda não realizou nenhuma pesquisa de clima. Comece buscando por uma cidade! <br></br><br></br> <FaGlobeAmericas style={{ color: "#0072fe" }} /> <FaSistrix style={{ color: "white" }} /></p>
            }
        </div >
    )
}
export default TrackHistory

const HistoryContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    max-height: 20rem;
    overflow: auto;
    width: 98vw;
    color: white;
    span {
      &:hover{
        cursor: pointer;
        text-shadow: 0 1px 3px #0072fe;
      }
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: start;
        border-bottom: 1px solid #454545;
    }
    ul{
        margin: 10px 5px 0 5px;
        padding: 0;
    }
`
const StyledTrashIcon = styled(FaTrash)`
  margin-left: 5px;
  cursor: pointer;
  color: #0072fe; 
  &:hover {
      color: #0559c0;
  }
  &:active {
    color: #930000;
  }
`