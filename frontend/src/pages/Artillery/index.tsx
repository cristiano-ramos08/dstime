import axios from "axios";
import { useState, useEffect } from 'react';
import { BASE_URL } from "utils/requests";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import { Link } from "react-router-dom";

interface Iartilheiro {
    id: number,
    nome: string; 
    gol: string;
    assistencia: string;   
    posicao: string; 
    image: string
}
const Artillery = () => {

    const [artillery, setArtillery] = useState<Iartilheiro[]>([]);

    /*
    useEffect(() => {
        axios.get(`${BASE_URL}/artilharia`)
        .then(response => {
            setArtillery(response.data);
        });
    }, []); 
    */
    useEffect(() => {
        loadArtillery()
        
    }, []); 

    async function loadArtillery(){

         axios.get(`${BASE_URL}/artilharia`)
        .then(response => {
            setArtillery(response.data);
        });
    }   

    async function deleteArtillery(id:number) {
        await axios.delete(`${BASE_URL}/artilharia/${id}`)
        loadArtillery()   
       // alert('Jogador excluído com sucesso'); 
    } 
        
    return (  
        <>      
        <div className="container">
            <br /> 
            <div className="artillery-header">
                <h1>Lista de artilheiros</h1>
                <Link  to="/form">
                    <button type="button" className="btn btn-dark table-sm">
                        Novo jogador
                    </button>
                </Link>
            </div>
            <br />
            <table className="table table-striped table-sm">
               
                <thead>
                    <tr>
                        
                        <th>Nome</th>
                        <th>Gols</th>
                        <th>Assistências</th>
                        <th>Posicao</th>              
                    </tr>
                </thead>
                <tbody>
                    {
                        artillery.map(arti => (                      
                        <tr key={arti.id}>
                           
                            <td> { arti.nome} </td>
                            <td> { arti.gol} </td>
                            <td> { arti.assistencia} </td>
                            <td> { arti.posicao} </td>
                            <td>
                            <Link to={`/form/${arti.id}`}>
                           <button type="button" className="btn btn-primary btn-sm" >Editar</button>{' '}
                           </Link>
                           <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteArtillery(arti.id)}>Remover</button>
                            </td>
                        </tr>  
                        ))

                    }   
                   
                </tbody>
            </table>
        </div>
    </>
    );
}
export default Artillery;