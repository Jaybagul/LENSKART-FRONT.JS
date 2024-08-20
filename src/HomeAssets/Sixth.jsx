import React from 'react';
import { Link } from 'react-router-dom';

const Sixth = () => {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
    
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="product-card position-relative">
              <img src="src/assets/series-11.webp" className="d-block w-100" alt="Eyeglasses" />
              <div className="overlay text-center position-absolute top-50 start-50 translate-middle">
                <h2>Eyeglasses</h2>
                <p>Fashionable eyewear for every mood, every day.</p>
                <Link to="/product">
                  <button className="btn btn-dark">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="product-card position-relative">
              <img src="src/assets/0_kEYGNvP5loCU-lro.gif" alt="Digi Hooper" className="img-fluid" />
              <div className="position-absolute top-50 start-50 translate-middle text-center">
                <Link to="/product">
                  <button className="btn btn-dark" style={{ width: '17rem', height: '52px', lineHeight: '40px' }}>
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sixth;
