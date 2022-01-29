import { Raca } from "types/raca";


type Props = {
    time: Raca;
} 

function TimeCard( {time } : Props) {


    return(

        <div>
            <img className="dsmovie-movie-card-image" src={time.image} alt={time.nome} />
            <div className="dsmovie-card-bottom-container">
                <h3>{time.nome}</h3>
               
               
            </div>
        </div>

    );

}

export default TimeCard;