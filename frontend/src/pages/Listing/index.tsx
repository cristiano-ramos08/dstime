import axios from "axios";
import Pagination from "components/Pagination";
import TimeCard from "components/TimeCard";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import { TimePage } from 'types/raca';
import { Link } from "react-router-dom";

//import { Link } from "react-router-dom";

function Listing() {
  
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<TimePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    number: 0,
    size: 12,    
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/artilharia?size=12&page=${pageNumber}&size=20&sort=gol,desc`)
      .then((response) => {
        const data = response.data as TimePage;
        setPage(data);
      });
  }, [pageNumber]);
  

  const changePage = (index: number) => {
    setPageNumber(index);
  };
  
  return (
    <>
      <br />
     
         

      <div className="container">
      <Link to="/form">
            <button type="button" className="btn btn-center btn-dark table-sm">
              Novo jogador
            </button>
          </Link>
          <br />
      <br />
        <div className="row">
          {page.content.map(item => (
            <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <TimeCard timeRaca={item} />
            </div>
            )
          )}
        </div>
        <Pagination page={page} onChange={changePage} />
      </div>
    </>
  );
}

export default Listing;
