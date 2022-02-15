import "./styles.css";

import { useState } from "react";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => void setIsNavCollapsed(!isNavCollapsed);

  return (
    <header id="header" className="fixed-top">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container d-flex align-items-center">
          <a className="dstime-nav-content  mr-auto" href="/">
            RAÇA JOVEM
          </a>
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarsExample09"
          >
            <a className="nav-link" href="/listing">
              Jogadores
            </a>
            <a className="nav-link" href="/artillery">
              Artilharia
            </a>
            <a className="nav-link" href="/ranking">
              Ranking de artilharia
            </a>
            <a className="nav-link" href="/partida">
              Partidas
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
