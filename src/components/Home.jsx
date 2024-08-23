import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.css';
import './first.css';
import ThirdCon from '../HomeAssets/ThirdCon';
import FourthCon from '../HomeAssets/FourthCon';
import Fifth from '../HomeAssets/Fifth';
import Sixth from '../HomeAssets/Sixth';
import Eighth from '../HomeAssets/Eighth';
import Nineth from '../HomeAssets/NinethcON';
import TenthCon from '../HomeAssets/TenthCon';
import Eleventh from '../HomeAssets/Eleventh';
import TwelCon from '../HomeAssets/TwelCon';
import Thirteen from '../HomeAssets/Thirteen';
import Fourteen from '../HomeAssets/Fourteen';
import Footer from '../HomeAssets/Footer';
import { Link } from 'react-router-dom';

const Home = ({ handleCategoryChange }) => {
  const [value, setValue] = useState([]);

  const DataFetch = () => {
    axios
      .get('https://lenskart-backend-js.onrender.com/glasses')
      .then((response) => {
        console.log('Data fetched successfully:', response.data);
        setValue(response.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        alert('Error fetching data: ' + err.message);
      });
  };

  useEffect(() => {
    DataFetch();
  }, []);

  return (
    <>
      {/* First Content - Carousel */}
      <div className="container mt-0 mb-1 homecategory" style={{ zIndex: '999' }}>
        <div className="row g-4">
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <Link to={"/product"}>
              <div className="card" style={{ width: "100%" }}>
                <img src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png" className="card-img-top" alt="Eyeglasses" />
                <div className="card-body text-center">
                  <p className="card-text" style={{ textDecoration: "none" }} onClick={() => handleCategoryChange('Eyeglasses')}>Eyeglasses</p>
                  {/* <div className="text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos optio, expedita error quis voluptatem maxime non minus! Modi illo temporibus quo obcaecati consequuntur optio distinctio? Hic aspernatur illum officia saepe?</p>
                  </div> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <Link to={"/product"}>
              <div className="card" style={{ width: "100%" }}>
                <img src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png" className="card-img-top" alt="Sunglasses" />
                <div className="card-body text-center">
                  <p className="card-text" style={{ textDecoration: "none" }}>Sunglasses</p>
                </div>
              </div> 
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
          <Link to={"/product"}>
            <div className="card" style={{ width: "100%" }}>
              <img src="https://static1.lenskart.com/media/desktop/img/Apr22/d2.png" className="card-img-top" alt="Screen Glasses" />
              <div className="card-body text-center">
                <p className="card-text" style={{ textDecoration: "none" }}>Screen Glasses</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
          <Link to={"/product"}>
            <div className="card" style={{ width: "100%" }}>
              <img src="https://static1.lenskart.com/media/desktop/img/Apr22/d.png" className="card-img-top" alt="Contact Lenses" />
              <div className="card-body text-center">
                <p className="card-text" style={{ textDecoration: "none" }}>Contact Lenses</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
          <Link to={"/product"}>
            <div className="card" style={{ width: "100%" }}>
              <img src="https://static1.lenskart.com/media/desktop/img/Apr22/e2.png" className="card-img-top" alt="Power Sunglasses" />
              <div className="card-body text-center">
                <p className="card-text" style={{ textDecoration: "none" }}>Power Sunglasses</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
          <Link to={"/product"}>
            <div className="card" style={{ width: "100%" }}>
              <img src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg" className="card-img-top" alt="Progressive Lenses" />
              <div className="card-body text-center">
                <p className="card-text" style={{ textDecoration: "none" }}>Progressive Lenses</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div >
      <Link to={"/product"}>
        <div className="conatiner">
          <div className="row">
            <img class="mySlides" src="https://static1.lenskart.com/media/desktop/img/h24/aug/Eyeconic%20independence/home-banners/Web%20Banner%201920x520%20(2).jpg" style={{ width: "100%" }} />
          </div>
        </div>
      </Link>




      <ThirdCon />
      <FourthCon />
      <Fifth />
      <Sixth />
      <Eighth />
      <Nineth />
      <TenthCon />
      <Eleventh />
      <TwelCon />
      <Thirteen />
      <Fourteen />
      <Footer />
    </>
  );
};

export default Home;
