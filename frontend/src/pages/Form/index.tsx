import axios from "axios";
import { useState, ChangeEvent, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./styles.css";

interface NewJogador {
  id: number;
  nome: string;
  gol: number;
  assistencia: number;
  posicao: string;
  image: string;
}

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState<NewJogador>({
    id: 0,
    nome: "",
    gol: 0,
    assistencia: 0,
    posicao: "",
    image: "",
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
   // try {
      if (id !== undefined) {
        console.log(id);
        console.log(model);
        await axios.put(`${BASE_URL}/artilharia/${id}`, model);
      } else await axios.post(`${BASE_URL}/artilharia`, model);
      navigate("/artillery");
     // alert("salvo com sucesso");
    //} catch (e) {
    //  alert("fudeu");
    //}
  }

  async function findArtillery(id: any) {
    const response = await axios.get(`${BASE_URL}/artilharia/${id}`);
    setModel({
      id: id,
      nome: response.data.nome,
      gol: response.data.gol,
      assistencia: response.data.assistencia,
      posicao: response.data.posicao,
      image: response.data.image,
    });
  }

  return (
    <>
      <div className="container">
        <br />
        <div className="artillery-header">
          <h1>Cadastro de jogador</h1>
          <Link to="/artillery">
            <button type="button" className="btn btn-center btn-dark table-sm">
              Voltar
            </button>
          </Link>
        </div>
        <br />
        <div className="container">
          <form className="dsmovie-form" onSubmit={onSubmit}>
            <div className="form-group dstime-form-group">
              <label>Nome</label>

              <input
                type="text"
                className="form-control"
                name="nome"
                value={model.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Gol</label>
              <input
                type="number"
                className="form-control"
                name="gol"
                value={model.gol}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Assistencia</label>
              <input
                type="number"
                className="form-control"
                name="assistencia"
                value={model.assistencia}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Posição</label>
              <input
                type="text"
                className="form-control"
                name="posicao"
                value={model.posicao}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                
              />
            </div>
            <div className="form-group dstime-form-group">
              <label>Imagem</label>
              <input
                type="file"
                className="form-control"
                name="image"
                //value={model.image}
                //onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <br />
            <div className="dstime-form-btn-container">
              <button type="submit" className="btn btn-success btn-sm">
                Salvar
              </button>{" "}
              <Link to="/artillery">
                <button className="btn btn-danger btn-sm">Cancelar</button>
              </Link>
            </div>
          </form>
        </div>
        <br />
      </div>
    </>
  );
};
export default Form;
