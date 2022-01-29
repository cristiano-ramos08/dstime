import Pagination from "components/Pagination";
import TimeCard from "components/TimeCard";
//import { Link } from "react-router-dom";

function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <TimeCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <TimeCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <TimeCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <TimeCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <TimeCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
