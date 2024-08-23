import React from 'react';
import { Link } from 'react-router-dom';

const ThirdCon = () => {
  return (
    <div>
      <h4 className="flex-container mt-5 mb-5 text-center" style={{ zIndex: "0" }}>
        <span className="line"></span>
        <span className="text-black">PREMIUM EYEWEAR</span>
        <span className="line"></span>
      </h4>

      <div id="carouselExampleInterval" className="carousel slide mt-3">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <Link to="/product">
              <img src="https://static1.lenskart.com/media/desktop/img/republic/hustlr-ace/Hustlr_Ace_Desktop_Banner.gif" className="d-block w-100" alt="Premium Eyewear 1" />
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Link to="/product">
              <img src="https://static1.lenskart.com/media/desktop/img/2024/feb/IN/Sobhita/Desktop.png" className="d-block w-100" alt="Premium Eyewear 2" />
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <Link to="/product">
              <img src="https://static5.lenskart.com/media/uploads/Web_Banner_Refresh.jpg" className="d-block w-100" alt="Premium Eyewear 3" />
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <Link to="/product">
              <img src="https://static1.lenskart.com/media/desktop/img/oct9/hd-acetate/Option%201%20static.jpg" className="d-block w-100" alt="Premium Eyewear 4" />
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <Link to="/product">
              <img src="https://static1.lenskart.com/media/desktop/img/sep22/jj-titanium/Web-Banner.gif" className="d-block w-100" alt="Premium Eyewear 5" />
            </Link>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ThirdCon;
