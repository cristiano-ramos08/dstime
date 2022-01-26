//import Footer from "components/Footer";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Artilharia</h1>
                    <p className="lead">Site oficial do time de futsal Raça Jovem FC</p>
                    <hr />
                    <p>Esta aplicação foi desenvolvida para facilitar a inclusão de novos jogadores, a marcação de gols e assistencias para a artilharia</p>
                    <Link className="btn btn-primary btn-lg" to="/listing">

                        Jogadores
                    </Link>
                </div>
            </div>
           
        </> 
    );
}

export default Home;