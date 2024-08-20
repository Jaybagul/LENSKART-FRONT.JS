import React from 'react';
import { Link } from 'react-router-dom';

const Eleventh = () => {
  return (
    <>
      {/* Eyeglasses and Sunglasses Section */}
      <div className="container mb-5" style={{ margin: 'auto', width: '80%' }}>

        {/* Eyeglasses Section */}
        <div className="row mt-5 mb-3">
          <div className="col-12">
            <h4 className="text">EYEGLASSES</h4>
            <hr />
          </div>
          {['eyeglass 1', 'eye glass 2', 'eye glass 3'].map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <Link to="/product">
                <img
                  src={`src/assets/${img}.webp`}
                  className="img-fluid"
                  alt={`Eyeglass ${index + 1}`}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Sunglasses Section */}
        <div className="row mt-5 pt-2">
          <div className="col-12">
            <h4 className="text">SUNGLASSES</h4>
            <hr />
          </div>
          {['sun 1', 'sun 2', 'sun 3'].map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <Link to="/product">
                <img
                  src={`src/assets/${img}.webp`}
                  className="img-fluid"
                  alt={`Sunglass ${index + 1}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Image Section */}
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-12">
            <img
              src="src/assets/eleventh.webp"
              className="img-fluid d-block w-100"
              alt="Additional Content"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Eleventh;
