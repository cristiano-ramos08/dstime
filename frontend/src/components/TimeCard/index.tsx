import "./styles.css";
import { ReactComponent as Bola } from 'assets/img/bola.svg';
import { ReactComponent as Assistencia } from 'assets/img/cartola.svg';
import { Raca } from  "types/raca";

type Props = {
  timeRaca: Raca;
}

function TimeCard({ timeRaca }  : Props ) {  
  return (
    <div>
     <img className="dstime-time-card-image" src={timeRaca.image} alt="jogador" />
      <div className="dstime-card-bottom-container">
        <h2>{timeRaca.nome}</h2>
        <p><Bola /> {timeRaca.gol}</p>
        <p><Assistencia /> {timeRaca.assistencia}</p>
        <h2>{timeRaca.posicao}</h2>
      </div>
    </div>
  );
}

export default TimeCard;
