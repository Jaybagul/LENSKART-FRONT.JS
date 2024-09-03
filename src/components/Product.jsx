import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Product.css";
import { Link, useNavigate } from 'react-router-dom';
import ProductNav from './ProductNav';

const Product = () => {
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState({});
  const [size, setSize] = useState([]);
  const [colors, setColors] = useState([]);
  const [price, setPrice] = useState([]);

  const navigate = useNavigate()

  const fetchData = () => {
    axios.get(`https://lenskart-backend-js.onrender.com/products`, {
      params: {
        _page: page,
        _limit: 12,
        _sort: 'price',
        _order: order,
        q: search,
        category: category,
        size: size,
        colors: colors,
        price: price
      }
    })
      .then((res) => {
        setValue(res.data);
        console.log(res)
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchData();
  }, [page, order, search, category, size, colors, price]);

  const Wishdata = (el) => (e) => {

    e.preventDefault()

    const wishitem = {
      image: el.image[5],
      id: el.id,
      price: el.price,
      size: el.size,
    }

    axios.post("https://lenskart-backend-js.onrender.com/wish", wishitem)
      .then((res) => {
        console.log(res)
        alert('Product added to wishlist!');


      })
      .catch((err) => console.log(err))
  }


  const searchOn = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setOrder(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleCheckboxChange = (setter) => (e) => {
    const { value, checked } = e.target;
    setter((prev) => checked ? [...prev, value] : prev.filter(v => v !== value));
  };

  return (
    <>
      <div className="main" style={{ backgroundColor: '##f8f9fa', height: "100vh" }}>
        <div className="container">
        </div>

        <div className="container mt-0" style={{ zIndex: "0" }}>
          <div className="row align-items-center">
            <div className="col-12 col-md-12 p-0 m-0">
              <ProductNav handleCategoryChange={handleCategoryChange} />
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0 d-flex align-items-center justify-content">
              <input type="checkbox" id="viewFramesToggle" />
              <label htmlFor="viewFramesToggle" className="ms-2 mb-0"></label>
              <span className="ms-2 text-black">View Glasses</span>
            </div>
            <div className="col-12 col-md-3 mt-3 mt-md-0 d-flex justify-content-end">
              <input
                style={{ width: "100%" }}
                onChange={searchOn}
                id="exampleFormControlInput1"
                type="text"
                placeholder="What're you searching for?"
                className="form-control form-control-underlined"
              />
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0">
              <select className="form-select" onChange={handleSortChange} defaultValue="asc">
                <option value="select " className='active'>Select Your Option</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-light mt-3" style={{ border: '10px solid #ededed', borderRight: "transparent", borderLeft: "transparent", borderBottom: "transparent" }}>
          <div className="row">
            <img src="https://static1.lenskart.com/media/desktop/img//h24/aug/Eyeconic%20independence/PLP%20banners/desktop/plp-ce-desk-sun.png" alt="" />
          </div>

          <div className="row">
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0" >
              <div className="container mt-5">
                <div className="accordion" id="accordionExample">
                  <div className="card-ac">
                    <p>Color <i className="bi bi-palette-fill"></i></p>
                    <div className="card-body">
                      <input type="checkbox" onChange={handleCheckboxChange(setColors)} value="Black" /> <label>Black</label> <br />
                      <input type="checkbox" onChange={handleCheckboxChange(setColors)} value="Black-Grey" /> <label>Black-Grey</label> <br />
                      <input type="checkbox" onChange={handleCheckboxChange(setColors)} value="Brown" /> <label>Brown</label> <br />
                      <input type="checkbox" onChange={handleCheckboxChange(setColors)} value="Gunmetal" /> <label>Gunmetal</label> <br />
                      <input type="checkbox" onChange={handleCheckboxChange(setColors)} value="Yellow Gold" /> <label>Yellow Gold</label><br />
                      <input type="checkbox" onChange={handleCheckboxChange(setColors)} value="Silver Blue" /> <label>Silver Blue</label> <br />
                    </div>
                  </div>
                  <div className="card-ac">
                    <p>Frame Size <i className="bi bi-arrows-angle-expand"></i></p>
                    <div className="card-body">
                      <input type="checkbox" onChange={handleCheckboxChange(setSize)} value="Medium" /> <label>Medium</label> <br />
                      <input type="checkbox" onChange={handleCheckboxChange(setSize)} value="Wide" /> <label>Wide</label> <br />
                      <input type="checkbox" onChange={handleCheckboxChange(setSize)} value="Extra Wide" /> <label>Extra Wide</label> <br />
                    </div>
                    {/* <div>
                      <iframe width="250" className='d-sm-none d-none d-md-none d-lg-block d-xl-block' height="880" src="https://www.youtube.com/embed/7-2UGgn_NEo?list=TLGGliIMeX9RHP0wNzA4MjAyNAa&autoplay=1&mute=1" title="Active Athleisure Sunglasses" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div> */}
                  </div>

                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 col-lg-10 m-sm-auto mt-5 pt-4" >
              <div className="container">
                <div className="row" style={{ display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(  290px, 1fr))", gap: "18px", textAlign: 'left' }}>
                  {value.map((el) => (
                    <div key={el.id} className="card p-0 m-0 m-auto" style={{ backgroundColor: '#ffffff' }}>
                      <div style={{ float: 'right' }}>
                        <Link to={`/wish/${el.id}`}>
                          <a href="" type='button' onClick={Wishdata(el)} style={{ float: "right", width: "30%", paddingLeft: '35px' }}><i className="bi bi-suit-heart" style={{ fontSize: '25px', color: 'black' }}></i></a>
                        </Link></div>
                      <Link to={`/singlepage/${el.id}`}>
                        <img src={el.image[0]} className="card-img-top product1" style={{ border: 'none' }} alt={el.product} />
                      </Link>

                      <div className="card-body mb-4" style={{ backgroundColor: '#ffffff' }}>
                        <div className="btn rounded border m-0" style={{ borderRadius: '15px', backgroundColor: '#f5f5ff', padding: '0px 8px', float: "left" }}>
                          {el.rating}<i className="bi bi-star-fill" style={{ color: '#b8e7f1', padding: '0px 2px' }}></i>{el.reviews}
                        </div>
                        <div className="product-body" style={{ textAlign: "left" }}>
                          <h5 className="title">{el.product}</h5>

                          <p className="size">Size: {el.size}.zero power</p>


                          <p className="card-text" style={{ color: 'black', display: 'none' }}>{el.description}</p>
                          <p className="card-text"><del>₹{el.price}</del> <span className="price">₹{el.discounted_price}</span></p>
                        </div>
                        {/* <Link to={`/singlepage/${el.id}`}> */}
                        {/* <button className="btn btn-primary p-1">Buy Now</button> */}
                        {/* </Link> */}
                      </div>
                      <div className="discount-info p-1 m-0">
                        Get For ₹1500. Coupon: <span>SINGLE</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-2" style={{ textAlign: 'center', width: '100%', display: 'block' }}>
            <button className='btn btn-light' disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <span className='m-2 text-black'>{page}</span>
            <button className='btn btn-light' onClick={() => setPage(page + 1)}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
