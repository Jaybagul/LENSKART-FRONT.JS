import React from 'react';
import { Link } from 'react-router-dom';

const Thirteen = () => {
    return (
        <>
            <div className="container-fluid" style={{ width: '80%', margin: 'auto' }}>
                <div className="row mt-5 mb-3 pb-3">
                    <div className="col-12">
                        <h4 className="text text-center">COLOR CONTACT LENSES</h4>
                        <hr />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpg" className="img-fluid" alt="Contact Lens 1" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-gray-premium-zero-power-monthly_gray_kiara_01_09_2023.jpg" className="img-fluid" alt="Contact Lens 2" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-silver-gray-premium-zero-power-monthly_silver_grey_kiara_01_09_2023.jpg" className="img-fluid" alt="Contact Lens 3" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 mb-3">
                <div className="row">
                    <div className="col-12">
                        <img src="src/assets/contact.jpg" className="d-block w-100 img-fluid" alt="Contact Information" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Thirteen;
