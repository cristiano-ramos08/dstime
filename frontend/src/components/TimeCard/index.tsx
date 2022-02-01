import "./styles.css";
import { Raca } from  "types/raca";

type Props = {
  timeRaca: Raca;
}

function TimeCard({ timeRaca }  : Props ) {  

  return (
    <div>
      
     <img className="dstime-time-card-image" src={timeRaca.image} alt="cris" />
      <div className="dstime-card-bottom-container">
        <p>Nome: {timeRaca.nome}</p>
        <p>Gols: {timeRaca.gol}</p>
        <p>Assistencias: {timeRaca.assistencia}</p>
        <p>Posição{timeRaca.posicao}</p>
      </div>
    </div>
  );
}

export default TimeCard;
