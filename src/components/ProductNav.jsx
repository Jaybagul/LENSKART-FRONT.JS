import React, { useState } from 'react';
import "./productnav.css";

const ProductNav = ({ handleCategoryChange }) => {
    const [showEyeDiv, setShowEyeDiv] = useState(false);

    const toggleEyeDiv = () => {
        setShowEyeDiv(!showEyeDiv);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light mb-3" style={{ backgroundColor: "#f8f9fa", width: '100%', padding: '0%' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => handleCategoryChange('eyeglasses')} aria-current="page" href="#">EYEGLASSES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleCategoryChange('screen glasses')} href="#">SCREEN GLASSES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleCategoryChange('kids glasses')} href="#">KIDS GLASSES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleCategoryChange('contact glasses')} href="#">CONTACT LENSES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleCategoryChange('Sunglasses')} href="#">SUNGLASSES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="home" onClick={toggleEyeDiv} href="#">HOME EYE-TEST</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">STORE LOCATOR</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-primary me-2" type="button">3D Try On</button>
                            <button className="btn btn-outline-primary me-2" type="button">Blu</button>
                            <button className="btn btn-dark" type="button">Gold Max</button>
                        </div>
                    </div>
                </div>
            </nav>

            {showEyeDiv && (
                <div className="eye-test-div" style={{ backgroundColor: "grey", zIndex: '999' }}>
                    <div className="container" id="eye" style={{ backgroundColor: '#fbf9f7' }}>
                        <div className="row">
                            <div className="col-12 col-md-6 mb-3 mb-md-0">
                                <img src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png" className="d-block w-100" alt="Home Eye Test" />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="text">
                                    <h2 className="text-heading">Get your eyes checked at home</h2>
                                    <p className="text-details">A certified refractionist will visit you with <br />
                                        latest eye testing machines & 100 trial frames</p>
                                    <button className="btn btn-primary text-btn">BOOK APPOINTMENT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductNav;
