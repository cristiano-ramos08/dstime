import {ReactComponent as LogoRaca} from 'assets/img/logo.svg';
//import Home from "pages/Home";
import { Link } from "react-router-dom";
import './styles.css'
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dstime-nav-content">
                    <Link  to="/">
                       <h1>Raca Jovem FC</h1>
                    </Link>
                    
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