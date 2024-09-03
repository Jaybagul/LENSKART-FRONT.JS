import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import Eyeglass1 from 'src/assets/eyeglass1.webp';
import Eyeglass2 from 'src/assets/eyeglass2.webp';
import Eyeglass3 from 'src/assets/eyeglass3.webp';
import Sunglass1 from 'src/assets/sunglass1.webp';
import Sunglass2 from 'src/assets/sunglass2.webp';
import Sunglass3 from 'src/assets/sunglass3.webp';
import AdditionalImage from 'src/assets/eleventh.webp';

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
          {[Eyeglass1, Eyeglass2, Eyeglass3].map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <Link to="/product">
                <img
                  src={img}
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
          {[Sunglass1, Sunglass2, Sunglass3].map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <Link to="/product">
                <img
                  src={img}
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
              src={AdditionalImage}
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
