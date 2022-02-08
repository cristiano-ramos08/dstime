import axios from "axios";
import { useState, ChangeEvent, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import { Link, useParams, useNavigate } from "react-router-dom";
//import "./styles.css";

interface NewJogador {
  id: number;
  timeRaca: string;
  timeAdversario: string;
  dataJogo: string;
  local: string;
  golsRaca: number;
  golsAdversario: number;
}

const FormPartida = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState<NewJogador>({
    id: 0,
    timeRaca: "Raça Jovem",
    timeAdversario: "",
    dataJogo: "",
    local: "",
    golsRaca: 0,
    golsAdversario: 0,
  });

  useEffect(() => {
    if (id !== undefined) {
      //  console.log(id)
      findArtillery(id);
    }
  }, [id]);

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (id !== undefined) {
        console.log(id);
        console.log(model);
        await axios.put(`${BASE_URL}/partida/${id}`, model);
      } else await axios.post(`${BASE_URL}/partida`, model);
      navigate("/partida");
      alert("salvo com sucesso");
    } catch (e) {
      alert("fudeu");
    }
  }

  async function findArtillery(id: any) {
    const response = await axios.get(`${BASE_URL}/partida/${id}`);
    setModel({
      id: id,
      timeRaca: response.data.timeRaca,
      timeAdversario: response.data.timeAdversario,
      dataJogo: response.data.dataJogo,
      local: response.data.local,
      golsRaca: response.data.golsRaca,
      golsAdversario: response.data.golsAdversario,
    });
  }

  return (
    <>
      <div className="container">
        <br />
        <div className="artillery-header">
          <h1>Cadastro de jogos</h1>
          <Link to="/partida">
            <button type="button" className="btn btn-dark table-sm">
              Voltar
            </button>
          </Link>
        </div>
        <br />
        <div className="container">
          <form className="dsmovie-form" onSubmit={onSubmit}>
            <div className="form-group dstime-form-group">
              <label>Raça Jovem</label>

              <input
                type="text"
                className="form-control"
                name="timeRaca"
                value={model.timeRaca}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Time adversário</label>
              <input
                type="text"
                className="form-control"
                name="timeAdversario"
                value={model.timeAdversario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Data jogo</label>
              <input
                type="text"
                className="form-control"
                name="dataJogo"
                value={model.dataJogo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Local</label>
              <input
                type="text"
                className="form-control"
                name="local"
                value={model.local}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Gols raça</label>
              <input
                type="number"
                className="form-control"
                name="golsRaca"
                value={model.golsRaca}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Gols adversário</label>
              <input
                type="number"
                className="form-control"
                name="golsAdversario"
                value={model.golsAdversario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>

            <br />
            <div className="dstime-form-btn-container">
              <button type="submit" className="btn btn-success">
                Salvar
              </button>{" "}
              <Link to="/partida">
                <button className="btn btn-danger">Cancelar</button>
              </Link>
            </div>
          </form>
        </div>
        <br />
      </div>
    </>
  );
};
export default FormPartida;
