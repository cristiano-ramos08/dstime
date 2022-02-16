import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { TimePage } from "types/raca";
import Pagination from "components/Pagination";
import { ReactComponent as Pencil } from "assets/img/pencil.svg";

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
 // const navigate = useNavigate();
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
    axios
      .get(
        `${BASE_URL}/artilharia?size=12&page=${activePage}&size=20&sort=gol,desc`
      )
      .then((response) => {
        setPage(response.data);
      });
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

/*
  async function deleteArtillery(id: number) {
    try {
      window.confirm("Tem certeza que deseja excluir esse cara ruim de bola?")
        ? await axios.delete(`${BASE_URL}/artilharia/${id}`)
        : navigate("/artillery");
      axios
        .get(
          `${BASE_URL}/artilharia?size=12&page=${activePage}&size=20&sort=gol,desc`
        )
        .then((response) => {
          setPage(response.data);
        });
    } catch (e) {
      alert("fudeu");
    }
  }
  */

  return (
    <>
      <div className="container">
        <br />

        <div className="artillery-header">
          <h1>Lista de artilheiros</h1>
        </div>

        <br />
        <div className="table-responsive container">
          <table className="container table table-striped table-hover table-condensed">
            <thead>
              <tr className="active">
                <th>Nome</th>
                <th>Gols</th>
                <th>Assis.</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {page.content.map((arti) => (
                <tr key={arti.id}>
                  <td> {arti.nome} </td>
                  <td> {arti.gol} </td>
                  <td> {arti.assistencia} </td>

                  <td>
                    <Link to={`/form/${arti.id}`}>
                      <button
                        type="button"
                        className="btn btn-tamanho btn-primary btn-sm "
                      >
                        <Pencil />
                      </button>{" "}
                    </Link>
                  
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination page={page} onChange={changePage} />
      </div>
    </>
  );
};
export default Artillery;
