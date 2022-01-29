/*
import { Raca } from "types/raca";


type Props = {
    time: Raca;
} 
*/
import "./styles.css";

function TimeCard() {
  const time = {
    id: 1,
    nome: "Cris",
    gol: 2,
    assistencia: 1,
    posicao: "Ala",
    image:
      "https://themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
  };

  return (
    <div>
      <img className="dstime-time-card-image" src={time.image} alt="cris" />
      <div className="teste">
        <p>{time.nome}</p>
      </div>
    </div>
  );
}

export default TimeCard;
