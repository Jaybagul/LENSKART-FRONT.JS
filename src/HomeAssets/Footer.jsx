import React from 'react';


const Footer = () => {
    return (
        <>
            <div className="footer py-5">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-6">Buy The Best Eyewear From Lenskart</h1>
                            <p className="mt-3">
                                Lenskart is the leading e-commerce portal for eyewear in India. It has revolutionised the eyewear industry in the country with its omni-channel approach. From an ever-growing number of offline stores across major cities in the country to innovative integration of technology while purchasing online, Lenskart caters to every customer with several deals and offers.
                            </p>
                            <p>
                                A one-stop online solution for purchasing eyewear and its accessories, Lenskart delivers them right at your doorstep with convenient methods of payment. Sunglasses as well as eyeglasses are available for men and women in a diverse array of styles and trendy colors. If you want to try out
                                <a href="#" className="text-primary">Contact Lenses</a>, pick the ones of your choice from the extensive variety of coloured contact lenses from our online store.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container-fluid mb-5">
                    <div className="row justify-content-between">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <h3>Services</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-decoration-none">Store Locator</a></li>
                                        <li><a href="#" className="text-decoration-none">Buying Guide</a></li>
                                        <li><a href="#" className="text-decoration-none">Frame Size</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h3>About Us</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-decoration-none">We Are Hiring</a></li>
                                        <li><a href="#" className="text-decoration-none">Refer and Earn</a></li>
                                        <li><a href="#" className="text-decoration-none">About Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h3>Help</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-decoration-none">FAQ's</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-3">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_960_720.png"
                                width="125"
                                className="img-fluid"
                                alt="Google Play"
                            />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="container-fluid mb-3">
                    <div className="row text-center">
                        <div className="col-md-6 d-flex justify-content-center mb-2">
                            <a href="#" className="mx-2 text-decoration-none">T & C</a>
                            <span className="mx-2">|</span>
                            <a href="#" className="mx-2 text-decoration-none">Privacy</a>
                            <span className="mx-2">|</span>
                            <a href="#" className="mx-2 text-decoration-none">Disclaimer</a>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <span className="mx-2">Version 1.0.0</span>
                            <span className="mx-2">||</span>
                            <span className="mx-2">Follow Us</span>
                            <div className="social-icons ms-3">
                                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width="24" className="m-2" /></a>
                                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="24" className="m-2" /></a>
                                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" alt="Twitter" width="24" className="m-2" /></a>
                                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Message-cloud-icon.svg" alt="Chat" width="24" className="m-2" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="text-center mb-3">
                    <span>@CopyRight Made By <a href="#" className="text-lightcyan font-weight-bold">Jayesh Bagul</a></span>
                </div>
                <hr />
            </div>
        </>
    );
};

export default Footer;
