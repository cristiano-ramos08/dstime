import { ReactComponent as LogoRaca } from "assets/img/logo.svg";
import { ReactComponent as Logoadv } from "assets/img/time_adv.svg";
import { Partida } from  "types/partida";
import "./styles.css";


type Props = {
  jogo: Partida;
}

function PartidaCard({ jogo } : Props ) {

  return (
    <div>
      <div className="logosTime">
        <div className="logo">
          <LogoRaca />

          <Logoadv />
        </div>
        <div className="dstime-times">
          {jogo.timeRaca}
          <br />
          <div className="dstime-resultado">
            {jogo.golsRaca} X {jogo.golsAdversario}
          </div>
          {jogo.timeAdversario}
        </div>
        <h2>{jogo.dataJogo}</h2>
        <h2>{jogo.local}</h2>
       
      </div>
    </div>
  );
}

export default PartidaCard;
