import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import "./desc.css";
import "./accordian.css";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './../HomeAssets/Footer';
import { Link } from 'react-router-dom';
import { ProductContext } from './Context';
import ProductNav from './ProductNav';

const Description = () => {
    const { handleCategoryChange } = useContext(ProductContext);
    const [singledata, setsingledata] = useState({
        image: [],
        size: '',
        price: '',
        product: '',
        description: ''
    });
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    let { id } = useParams();
    const { image, size, price, product, description } = singledata;

    const descriptionData = () => {
        axios.get(`https://lenskart-backend-js.onrender.com/products/${id}`)
            .then((res) => {
                setsingledata(res.data);
                handleCategoryChange(res.data.category);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const cartdata = () => {
        const cartItem = {
            productId: id,
            quantity: quantity,
            product: product,
            size: size,
            price: price,
            image: image[1]
        };

        axios.post(`https://lenskart-backend-js.onrender.com/cart`, cartItem)
            .then((res) => {
                console.log(res.data);
                alert('Product added to cart!');
                navigate("/product");
            })
            .catch((err) => {
                console.error(err);
                alert('Failed to add product to cart.');
            });
    };

    useEffect(() => {
        descriptionData();
    }, [id]);

    return (
        <>
            <Link to={"/product"} style={{ textDecoration: 'none' }}>
                <ProductNav handleCategoryChange={handleCategoryChange} /> </Link>
            <div className="container mt-5 mb-5 pt-5" style={{ width: "100%", margin: "auto" }}>

                <div className="row images m-0 p-0">
                    <div className="col-lg-9 col-md-12 m-0 p-0">
                        <div className="row border-row justify-content-center">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[0]} className='rounded w-100 d-block m-1' id='img1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[1]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[3]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[4]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[5]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[6]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[7]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[8]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[9]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5 pic border border-light p-0 m-2">
                                <img src={image[10]} className='rounded w-100 d-block m-1' alt="" />
                            </div>
                        </div>

                        <div id="carouselExampleControls" className="carousel  my-carousel" data-bs-ride="carousel">
                            <div className="carousel-inner inner-slide">
                                <div className="carousel-item active  item-nav">
                                    <img src={image[0]} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item item-nav ">
                                    <img src={image[2]} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item  item-nav">
                                    <img src={image[4]} className="d-block w-100" alt="..." />
                                </div>
                            </div>

                            <button className="carousel-control-next" style={{ backgroundColor: "none" }} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-12 m-0 p-0">
                        <div className="info-desc">
                            <h2>LensKart air</h2>
                            <h1>{product}</h1>
                            <p>Size: {size}</p>
                            <p className="price" style={{ color: "#39bbc6", fontSize: "22px" }}>{price}</p>
                            <p className="description">{description}</p>
                            <div className="main-code">
                                <div className="code-details">
                                    <div className="offer">With 100% UV Protection</div>
                                    <div className="offer-details">Get it for ₹1500 with coupon: SINGLE</div>
                                </div>
                            </div>
                            <div className="row mt-2 mb-2">
                                <button className="buy-now mt-2 mb-2">BUY IT NOW <br />(with 1 year warranty)</button>
                                <Link to={`/cart/${id}`}><button className="cart mt-2 mb-2 ps-4 pe-4" onClick={cartdata}>ADD CART <br />(with 1 year warranty)</button> </Link>
                            </div>
                        </div>
                        <div className="sec-text mt-2">
                            <div className="sub-text">
                                <div>Limited Period Offer</div>
                                <div>Get Free BLU Screen or Progressive Lenses!</div>
                            </div>
                            <img alt="stepper" src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/TickIconWithBlueBgRound.svg" />
                        </div>
                        <img src="https://static5.lenskart.com/media/uploads/BottomSheetTopEye.png" className="img-fluid mt-2" alt="" />

                        <div className="help mt-2">
                            <h3>Need Help? Call 020 1234567</h3>
                        </div>

                        <div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Technical Information
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Product id : {id}</p>
                                            <p>Model : {product}</p>
                                            <p>Size:{size}</p>
                                            <p>Price:{price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Visit nerby store
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <img src="https://lh5.googleusercontent.com/p/AF1QipNxpqhUHLm2i23dwGHishWF-YGODXzB4FmJgBlu=w408-h306-k-no" className='d-block w-100 rounded' alt="" /> <br />
                                            <a style={{ textDecoration: 'none' }} href="https://www.google.com/maps/place/Lenskart.com/@21.145575,72.8015611,12z/data=!4m10!1m2!2m1!1slenskart!3m6!1s0x3be051006e3427ad:0x46f7db9968c6980b!8m2!3d21.1406521!4d72.884247!15sCghsZW5za2FydCIDiAEBWgoiCGxlbnNrYXJ0kgEIb3B0aWNpYW7gAQA!16s%2Fg%2F11ldfzmqtx?entry=ttu">Your Nerby Store Locate here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Check deleivery option
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <input type="text" placeholder='Enter Your Piincode' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <iframe width="350" height="246" src="https://www.youtube.com/embed/4BwaUYIJtHc?list=TLGGrSEULkch8BUwNzA4MjAyNA&autoplay=1&mute=1" title="Hustlr Video Dark Night" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
                            </div>
                            <img src="https://static1.lenskart.com/media/desktop/img/Dec22/hustlr/1.png" className='d-block' style={{ width: "140%" }} alt="" />
                            <img src={image[3]} className='d-block' style={{ width: "140%" }} alt="" />
                            <img src="https://static1.lenskart.com/media/desktop/img/Dec22/hustlr/nick/dk-5.jpg" className='d-block' style={{ width: "140%" }} alt="" />
                            <img src={image[6]} className='d-block' style={{ width: "140%" }} alt="" />
                            <img src={image[5]} className='d-block' style={{ width: "140%" }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Description;
