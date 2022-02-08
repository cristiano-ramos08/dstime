import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { PartidaPage } from 'types/partida';
//import "./styles.css";


type Props = {
  page: PartidaPage;
  onChange: Function;
}


function PaginationPartida({ page, onChange } : Props) {

    return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          className="dsmovie-pagination-button"
          disabled={page.first} onClick={() => onChange(page.number - 1)} >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="dsmovie-pagination-button" 
          disabled={page.last} onClick={() => onChange(page.number + 1)} >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default PaginationPartida;
