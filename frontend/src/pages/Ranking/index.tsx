import RankingAssistencias from "components/RankingAssistencias";
import RankingGols from "components/RankingGols";
import "./styles.css";

function Ranking() {
  return (
    <>
     <br />
      <div className="ranking">       
        <RankingGols />
        <RankingAssistencias />
      </div>
    </>
  );
}

export default Ranking;
