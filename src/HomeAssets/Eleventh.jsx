import React from 'react';
import { Link } from 'react-router-dom';

const Eleventh = () => {
  return (
    <>

      <div className="container mb-5" style={{ margin: 'auto', width: '80%' }}>


        <div className="row mt-5 mb-3">
          <div className="col-12">
            <h4 className="text">EYEGLASSES</h4>
            <hr />
          </div>
          {[
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688470121-img_7893.jpg',
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688470121-img_7893.jpg',
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688470121-img_7893.jpg'
          ].map((img, index) => (
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


        <div className="row mt-5 pt-2">
          <div className="col-12">
            <h4 className="text">SUNGLASSES</h4>
            <hr />
          </div>
          {[
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-brown-full-rim-rectangle-square-vincent-chase-online-the-metal-edit-vc-s12593-p-c3-polarized-sunglasses_csvfile-1687346118685-g_2547.jpg',
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/black-green-full-rim-wayfarer-vincent-chase-athleisure-vc-s14525-c2-sunglasses_g_8300.jpg',
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/black-grey-full-rim-wayfarer-shape-vincent-chase-style-cast-pc-vc-s11290-c3-polarized-sunglasses_vincent-chase-vc-s11290-c3-sunglasses_sunglasses__j_7431_1_5july23.jpg'
          ].map((img, index) => (
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
              src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
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
