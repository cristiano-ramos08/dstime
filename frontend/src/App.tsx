import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
//import Listing from 'pages/Listing';
import Form from 'pages/Form';
import FormPartida from "pages/FormPartida";
import Home from "pages/Home";
import Listing from "pages/Listing";
import Navbar from "components/Navbar";
import Artillery from "pages/Artillery";
import Ranking from "pages/Ranking";
import Partida from "pages/Partida";

//<Route path="/form" element={<Form />} />

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        

        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/partida" element={<Partida />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/artillery" element={<Artillery />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="/formPartida" element={<FormPartida />} />

       
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
