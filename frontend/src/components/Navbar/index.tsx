import {ReactComponent as LogoRaca} from 'assets/img/logo.svg';
import './styles.css'
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dstime-nav-content">
                    <h1>Raca Jovem FC</h1>

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