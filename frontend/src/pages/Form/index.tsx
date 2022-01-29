import axios from "axios";
import { useState, ChangeEvent, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import { Link, useParams } from "react-router-dom";


interface NewJogador {
  id: number;
  nome: string;
  gol: number;
  assistencia: number;
  posicao: string;
}

const Form = () => {
  const { id } = useParams();
  const [model, setModel] = useState<NewJogador>({
    id: 0,
    nome: "",
    gol: 0,
    assistencia: 0,
    posicao: "",
  });

  useEffect(() => {
    if (id !== undefined) {
      //  console.log(id)
      findArtillery(id);
    }
  }, [id]);

  function updatedModel(
    e: ChangeEvent<HTMLInputElement>
  ) {
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
        await axios.put(`${BASE_URL}/artilharia/${id}`, model);
      }
       else 
        await axios.post(`${BASE_URL}/artilharia`, model);
      alert('salvo com sucesso');
       /*
      <Redirect
        to={{
        pathname: "/form"
    
      }}
     
    /> */
    } catch (e) {
        alert('fudeu');
  }
}



  async function findArtillery(id: any) {
    const response = await axios.get(`${BASE_URL}/artilharia/${id}`);
    setModel({
      id: id,
      nome: response.data.nome,
      gol: response.data.gol,
      assistencia: response.data.assistencia,
      posicao: response.data.posicao,
    });
  }

  return (
    <>
      <div className="container">
        <br />
        <div className="artillery-header">
          <h1>Cadastro de novos jogadores</h1>
          <Link to="/artillery">
            <button type="button" className="btn btn-dark btn-sm">
              Voltar
            </button>
          </Link>
        </div>
        <br />
        <div className="container">
          <form className="dsmovie-form" onSubmit={onSubmit}>
            <div className="form-group dsmovie-form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                value={model.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dsmovie-form-group">
              <label>Gol</label>
              <input
                type="number"
                className="form-control"
                name="gol"
                value={model.gol}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dsmovie-form-group">
              <label>Assistencia</label>
              <input
                type="number"
                className="form-control"
                name="assistencia"
                value={model.assistencia}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <div className="form-group dsmovie-form-group">
              <label>Posição</label>
              <input
                type="text"
                className="form-control"
                name="posicao"
                value={model.posicao}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
            </div>
            <br />
            <div className="dsmovie-form-btn-container">
              <button type="submit" className="btn btn-primary ">
                Salvar
              </button>
            </div>
          </form>
        </div>
        <br />
      </div>
    </>
  );
};
export default Form;
