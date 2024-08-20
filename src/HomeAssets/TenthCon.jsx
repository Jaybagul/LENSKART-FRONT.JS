import React from 'react';

const TenthCon = () => {
  return (
    <>
      <h4 className="flex-container mt-5 mb-5 text-center">
        <span className="line"></span>
        <span className="text m-0 p-0" style={{ margin: '0%' }}>BUY IT YOUR WAY</span>
        <span className="line"></span>
      </h4>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-2">
            <img src="src/assets/1 Cont.webp" className="d-block w-100 img-fluid" alt="Image 1" />
          </div>
          <div className="col-md-6 col-sm-12 p-2">
            <img src="src/assets/2 Cont.webp" className="d-block w-100 img-fluid" alt="Image 2" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-sm-12 p-2">
            <img src="src/assets/thire Con.webp" className="d-block w-100 img-fluid" alt="Image 3" />
          </div>
          <div className="col-md-6 col-sm-12 p-2">
            <img src="src/assets/for info.webp" className="d-block w-100 img-fluid" alt="Image 4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TenthCon;
