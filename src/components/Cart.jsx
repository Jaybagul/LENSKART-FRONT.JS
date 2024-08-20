import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Cart = () => {
    const { id } = useParams();
    console.log(id);

    const [cartData, setCartData] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        getData();
    }, [id]);

    const getData = () => {
        axios.get(`https://lenskart-backend-js.onrender.com/cart`)
            .then(response => {
                setCartData(response.data);
                const initialQuantities = {};
                response.data.forEach(item => {
                    initialQuantities[item.id] = 1;
                });
                setQuantities(initialQuantities);
            })
            .catch(err => console.log(err));
    };

    const increaseQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 1) + 1
        }));
    };

    const decreaseQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(1, (prevQuantities[productId] || 1) - 1)
        }));
    };

    const deleteHandle = (id) => {
        axios.delete(`http://localhost:3000/cart/${id}`)
            .then(response => {

                getData();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container bg-light m-auto ms-4">
            <button type="button" className="btn mb-3 me-5" style={{ float: 'right' }} data-dismiss="modal">
                <i className="bi bi-x-circle" style={{ fontSize: "20px" }}></i>
            </button>
            <h1 style={{ fontSize: '20px', textAlign: "left" }} className='mt-2 ps-5 text-black'>CART PRODUCTS</h1>
            {cartData.map((item, index) => (
                <div className="card" style={{ width: '17rem' }} key={index}>
                    <Link to={"/product"}>
                        <img src={item.image} className="card-img-top" alt={`Product`} />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Product ID: {item.productId}</h5>
                        <p className="card-text">Price: ₹{item.price * (quantities[item.id] || 1)}</p>
                        <p className="card-text">Product: {item.product}</p>
                        <div className="btn" onClick={() => decreaseQuantity(item.id)} disabled={quantities[item.id] === 1}>
                            <i className="bi bi-dash"></i>
                        </div>
                        <span style={{ margin: '0 10px' }}>{quantities[item.id]}</span>
                        <button className='btn' onClick={() => increaseQuantity(item.id)}>
                            <i className="bi bi-plus"></i>
                        </button>
                        <br />
                        <a href="#" type='button' onClick={() => deleteHandle(item.id)} className="btn btn-primary">
                            Remove Item
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
