import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { TimePage } from "types/raca";
import Pagination from "components/Pagination";

/*
interface Iartilheiro {
  id: number;
  nome: string;
  gol: string;
  assistencia: string;
  posicao: string;
  image: string;
}
*/
const Artillery = () => {
  const [activePage, setActivePage] = useState(0);
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
        `${BASE_URL}/artilharia?size=12&page=${activePage}&size=20&sort=gol,desc`
      )
      .then((response) => {
        setPage(response.data);
      });
  }

  const changePage = (index: number) => {
    setActivePage(index);
  };

  async function deleteArtillery(id: number) {
    await axios.delete(`${BASE_URL}/artilharia/${id}`);
    loadArtillery();
    // alert('Jogador excluído com sucesso');
  }

  return (
    <>
      <div className="container">
        <br />

        <div className="artillery-header">
          <h1>Lista de artilheiros</h1>
          <Link to="/form">
            <button type="button" className="btn btn-dark table-sm">
              Novo jogador
            </button>
          </Link>
        </div>
        <Pagination page={page} onChange={changePage} />
        <br />
        <table className="table table-striped table-sm">
          <thead>
            <tr>
            <th>Id</th>
              <th>Nome</th>
              <th>Gols</th>
              <th>Assistências</th>
              <th>Posição</th>
             
            </tr>
          </thead>
          <tbody>
            {page.content.map((arti) => (
              <tr key={arti.id}>
                <td> {arti.id} </td>
                <td> {arti.nome} </td>
                <td> {arti.gol} </td>
                <td> {arti.assistencia} </td>
                <td> {arti.posicao} </td>
                <td>
                  <Link to={`/form/${arti.id}`}>
                    <button type="button" className="btn btn-primary btn-sm">
                      Editar
                    </button>{" "}
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteArtillery(arti.id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Artillery;
