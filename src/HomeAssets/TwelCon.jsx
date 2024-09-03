import React from 'react';
import { Link } from 'react-router-dom';

const TwelCon = () => {
    return (
        <>
            <div className="container-fluid" style={{ width: "80%", margin: "auto" }}>
                <div className="row mt-5 mb-3 pb-3">
                    <div className="col-12">
                        <h4 className="text text-center">EYEGLASSES</h4>
                        <hr />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="src/assets/eye 2.1.webp" className="img-fluid" alt="Eyeglass 1" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="src/assets/eye 2.2.webp" className="img-fluid" alt="Eyeglass 2" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="src/assets/eye 2.3.webp" className="img-fluid" alt="Eyeglass 3" />
                        </Link>
                    </div>
                </div>
                <div className="row mt-3 pt-5">
                    <div className="col-12">
                        <h4 className="text text-center">SUNGLASSES</h4>
                        <hr />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="src/assets/sun 1.webp" className="img-fluid" alt="Sunglass 1" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="src/assets/sun 2.webp" className="img-fluid" alt="Sunglass 2" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="src/assets/sun 3.webp" className="img-fluid" alt="Sunglass 3" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12">
                        <img src="src/assets/hopper.webp" className="d-block w-100 img-fluid" alt="Additional Content" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TwelCon;
