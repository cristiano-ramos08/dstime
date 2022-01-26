import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Home from "pages/Home";
import Listing from "pages/Listing";
import Navbar from "components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

