
import axios from "axios";
import { useState, ChangeEvent } from 'react';
import { BASE_URL } from 'utils/requests';
import { Link } from "react-router-dom";

interface NewJogador {
    nome: string;
    gol: string;
    assistencia: string;
    posicao: string; 
}

const Form = () => {

    const [model, setModel] = useState<NewJogador>({
        nome: '',
        gol: '',
        assistencia: '',
        posicao: ''
    })

    function updatedModel (e: ChangeEvent<HTMLInputElement>){
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit (e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        const response = await axios.post(`${BASE_URL}/artilharia`, model)
        console.log(response)

    }

    return (  
        <>      
        <div className="container">
            <br /> 
            <div className="artillery-header">
                <h1>Cadastro de novos jogadores</h1>
                <Link  to="/artillery">
                    <button type="button" className="btn btn-dark btn-sm">Voltar</button>
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
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label>Gol</label>
                        <input 
                        type="number" 
                        className="form-control"
                        name="gol"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                    </div>  
                    <div className="form-group dsmovie-form-group">
                        <label>Assistencia</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="assistencia"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label>Posição</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="posicao"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                    </div>  
                    <br />           
                      <div className="dsmovie-form-btn-container">
                <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
            </div>
        </form >
            </div>
            <br />
       </div>
    </>
    );
}
export default Form;

