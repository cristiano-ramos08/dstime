import { ReactComponent as LogoRaca } from "assets/img/logo.svg";
//import Home from "pages/Home";
import { Link } from "react-router-dom";
import "./styles.css";
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dstime-nav-content">
          <Link to="/">
            <h1>Raca Jovem FC</h1>
          </Link>
          <Link to="/listing">Jogadores</Link>{" "}
          <Link to="/artillery">Artilharia</Link>
          <Link to="/ranking">Ranking de artilharia</Link>
          <Link to="/">Jogos</Link>
          <Link to="/">Mensalidade</Link>
          <div className="dstime-fundacao-container">
            <LogoRaca />

            <p className="dstime-fundacao">Fundado em 2005</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
