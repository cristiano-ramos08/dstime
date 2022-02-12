import RankingAssistencias from "components/RankingAssistencias";
import RankingGols from "components/RankingGols";
import "./styles.css";

function Ranking() {
  return (
    <>
     <br />
      <div className="ranking">    
        <RankingAssistencias />   
        <RankingGols />
        
      </div>
    </>
  );
}

export default Ranking;
