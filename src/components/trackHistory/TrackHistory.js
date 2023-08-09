import { styled } from "styled-components"
import { FaSistrix, FaTrash } from 'react-icons/fa';

const TrackHistory = ({ searchHistory, handleSearchFromHistory, handleDeleteSearch }) => {

    const reversedSearchHistory = searchHistory.slice().reverse()

    return (
        <div>
            <h4 style={{ color: "#0559c0" }}>Histórico de Pesquisas:</h4>
            {reversedSearchHistory.length > 0 ?
                <HistoryContainer>
                    {reversedSearchHistory.map((item, index) => (
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
                <FaSistrix />
            }
        </div >
    )
}
export default TrackHistory
const HistoryContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    background-color: #f8fbfe;
    max-height: 20rem;
    overflow: auto;
    width: 98vw;
    color: #0559c0;
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
        border-bottom: 1px solid #f1f1f1;
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