import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { TimePage } from "types/raca";

const RankingGols = () => {
  const [activePage] = useState(0);
  const [page, setPage] = useState<TimePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    number: 0,
    size: 12,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    loadArtillery();
  }, [activePage]);

  async function loadArtillery() {
    axios
      .get(
        `${BASE_URL}/artilharia?size=3&page=${activePage}&size=20&sort=gol,desc`
      )
      .then((response) => {
        setPage(response.data);
      });
  }
  return (
    <>
      <div className="dsartilharia">
        <br />
        <div className="artillery-header">
          <h1>Gols</h1>
        </div>

        <br />
        <table className="container larg table table-striped">
          <thead>
            <tr>
             
              <th>Nome</th>
              <th>Gols</th>
            </tr>
          </thead>
          <tbody>
            {page.content.map((arti) => (
              <tr key={arti.id}>
               
                <td width="20%"> {arti.nome} </td>
                <td width="30%"> {arti.gol} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RankingGols;
