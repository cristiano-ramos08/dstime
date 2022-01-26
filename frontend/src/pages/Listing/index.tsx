import { Link } from "react-router-dom";

function Listing (){
    
    return (
        <>
        <div>
             <h1>Listing</h1>

            <Link className="btn btn-primary btn-lg" to="/artillery">

                Artilharia
            </Link>
        </div>
        
        </>
    );
}

export default Listing;