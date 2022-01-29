import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import './styles.css'

function Pagination() {

    return(
        <div className="dsmovie-pagination-container">
     
            <button className="dsmovie-pagination-button"
             disabled={true} >
                <Arrow />
            </button>
            <p>{`${1} de ${3}`}</p>
            <button className="dsmovie-pagination-button" 
            disabled={false}> 
                <Arrow className="dsmovie-flip-horizontal" />
            </button>
        </div>
   

    );
}

export default Pagination