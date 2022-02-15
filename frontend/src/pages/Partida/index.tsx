import Pagination from "components/PaginationPartida";
import { useState, useEffect } from "react";
import { PartidaPage } from "types/partida";
import { BASE_URL } from "utils/requests";
import PartidaCard from "components/PartidaCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactComponent as PencilBlack } from 'assets/img/pencil_black.svg';
import { ReactComponent as Excluir } from 'assets/img/excluir.svg';

function Partida() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<PartidaPage>({
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
  /*
  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/partida?size=12&page=${pageNumber}&size=20&sort=dataJogo,desc`
      )
      .then((response) => {
        const data = response.data as PartidaPage;
        setPage(data);
      });
  }, [pageNumber]);
*/
  useEffect(() => {
    loadArtillery();
  }, [pageNumber]);

  async function loadArtillery() {
    axios
      .get(
        `${BASE_URL}/partida?size=12&page=${pageNumber}&size=20&sort=dataJogo,desc`
      )
      .then((response) => {
        setPage(response.data);
      });
  }

  const changePage = (index: number) => {
    setPageNumber(index);
  };

  async function deleteArtillery(id: number) {
    await axios.delete(`${BASE_URL}/partida/${id}`);
    loadArtillery();
    // alert('Jogador excluído com sucesso');
  }
  return (
    <>
      
      

      <div className="container">
        <Link to="/formPartida">
          <button type="button" className="btn btn-dark table-sm">
            Novo Jogo
          </button>
          <br />
        </Link>              
          
        <br />
        <div className="row">
          {page.content.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <PartidaCard jogo={item} />
              <Link to={`/formPartida/${item.id}`}>
                <button type="button" className="btn btn- btn-sm">
                <PencilBlack />
                </button>{" "}
              </Link>
              <button
                    type="button"
                    className="btn btn-ranger btn-sm"
                    onClick={() => deleteArtillery(item.id)}
                  >
                    <Excluir />
                  </button>
            </div>
          ))}
        </div>
      </div>
      <Pagination page={page} onChange={changePage} />
    </>
  );
}
export default Partida;