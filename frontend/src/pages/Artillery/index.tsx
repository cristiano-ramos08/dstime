import axios from "axios";
import { BASE_URL } from "utils/requests";
function Artillery(){

    //
    axios.get(`${BASE_URL}/artilharia`)
    .then(response => {
        console.log(response.data);
    })

    return (  
        <>        
        <div className="container">
        <br /> 
            <table className="table table-striped table-sm">
               
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Gol</th>
                        <th>Assistência</th>
                        <th>Posicao</th>
                
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cris</td>
                        <td>14</td>
                        <td>5</td>
                        <td>Ala</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Diego</td>
                        <td>14</td>
                        <td>5</td>
                        <td>Ala</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Leandro</td>
                        <td>14</td>
                        <td>5</td>
                        <td>Ala</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
    );
}
export default Artillery;