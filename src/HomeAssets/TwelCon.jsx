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
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e10235-c7-eyeglasses_g_2375_image_pla.jpg" className="img-fluid" alt="Eyeglass 1" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e11675-c2-eyeglasses_g_0134.jpg" className="img-fluid" alt="Eyeglass 2" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-rimless-jj-e12565-c2-eyeglasses_john-jacobs-rimless-jj-e12565-c2-eyeglasses_g_3200.jpg" className="img-fluid" alt="Eyeglass 3" />
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
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-gradient-black-full-rim-wayfarer-john-jacobs-jj-tints-jj-s13227-c4-sunglasses_csvfile-1708406002394-img_7007.jpg" className="img-fluid" alt="Sunglass 1" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-s12808-c2-sunglasses_g_8841.jpg" className="img-fluid" alt="Sunglass 2" />
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <Link to="/product">
                            <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-s12808-c1-sunglasses_g_8864_image_pla.jpg" className="img-fluid" alt="Sunglass 3" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12">
                        <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-s12808-c1-sunglasses_g_8864_image_pla.jpg" className="d-block w-100 img-fluid" alt="Additional Content" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TwelCon;
