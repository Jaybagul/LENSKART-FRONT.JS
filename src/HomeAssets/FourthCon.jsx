import React from 'react';
import { Link } from 'react-router-dom';
import "./Forth.css"

const FourthCon = () => {
  return (
    <>
      <div class="container mt-5 pt-4 pb-4">
        <div class="flex-container">
          <div class="heading-container text-center text-black">
            <h1>WEAR THE TREND</h1>
            <p>Our hottest collections</p>
          </div>
          <div class="products-container">
            <div id="trendCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">

                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 product-card">
                      <img src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png" alt="Round Glasses" />
                      <h5>Round</h5>
                      <Link to={"/product"}>
                        <button>Explore</button>
                      </Link>
                    </div>

                    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 product-card">
                      <img src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg" alt="Cat-Eye Glasses" />
                      <h5>Cat-Eye</h5>
                      <Link to={"/product"}>
                        <button>Explore</button>
                      </Link>
                    </div>

                    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 product-card">
                      <img src="https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg" alt="Clubmaster Glasses" />
                      <h5>Clubmaster</h5>
                      <Link to={"/product"}>
                        <button>Explore</button>
                      </Link>
                    </div>

                    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 product-card">
                      <img src="https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg" alt="Transparent Glasses" />
                      <h5>Transparent</h5>
                      <Link to={"/product"}>
                        <button>Explore</button>
                      </Link>
                    </div>
                  </div>
                </div>


                <div class="carousel-item">
                  <div class="row">
                    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 product-card">
                      <img src="https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg" alt="Round Glasses" />
                      <h5>Round</h5>
                      <Link to={"/product"}>
                        <button>Explore</button>
                      </Link>
                    </div>

                    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 product-card">
                      <img src="https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg" alt="Cat-Eye Glasses" />
                      <h5>Cat-Eye</h5>
                      <Link to={"/product"}>
                        <button>Explore</button>
                      </Link>
                    </div>

                    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 product-card">
                      <img src="https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg" alt="Clubmaster Glasses" />
                      <h5>Clubmaster</h5>
                      <Link to={"/product"}>
                        <button>Explore</button>
                      </Link>
                    </div>

                    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 product-card">
                      <img src="https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg" alt="Transparent Glasses" />
                      <h5>Transparent</h5>
                      <Link to={"/product"}>
                        <button>Explore</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#trendCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#trendCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid mt-5 mb-5">
        <h4 className="text-center mb-4">
          <span className="line"></span>
          <span className="text-black mx-3">AS SEEN ON SHARK TANK</span>
          <span className="line"></span>
        </h4>
        <div className="row">
          <div className="col-12">
            <Link to="/product">
              <img src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif" className="d-block w-100"
                alt="As Seen on Shark Tank"
                style={{ borderRadius: '8px' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthCon;
