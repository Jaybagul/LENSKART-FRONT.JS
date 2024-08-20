import React from 'react';

const Seventh = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card product-card">
            <img src="src/assets/series-11.webp" className="card-img-top" alt="Product 2" />
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">Description of Product 2.</p>
              <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
