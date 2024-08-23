import React from 'react';
import { Link } from 'react-router-dom';

const Fifth = () => {
  return (
    <div className="container mt-5 mb-5">

      <h4 className="d-flex align-items-center justify-content-center mt-5 mb-5">
        <span className="line flex-grow-1"></span>
        <span className="text mx-3">AS SEEN ON KARAN JOHAR</span>
        <span className="line flex-grow-1"></span>
      </h4>


      <div className="row">
        <div className="col-12">
          <Link to="/product">
            <img
              className="d-block w-100 img-fluid"
              src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
              alt="Karan Johar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
