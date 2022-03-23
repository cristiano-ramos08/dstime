import { ReactComponent as Loader } from 'assets/img/Loanderr.svg';
import "./styles.css";

function Loading(){
    return (
        <div className="styles.loader_container">

        <Loader  className="loader" />
        </div>
    );
}
export default Loading;