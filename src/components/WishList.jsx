import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WishList = () => {
    const { id } = useParams();
    const [wishItem, setWishItem] = useState([]);

    const fetchWishData = () => {
        axios.get('https://lenskart-backend-js.onrender.com/wish')
            .then((res) => {
                setWishItem(res.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchWishData();
    }, [id]);

    const deleteItem = (itemId) => {
        axios.delete(`https://lenskart-backend-js.onrender.com/wish/${itemId}`)
            .then((res) => {
                console.log(res);
                alert("Remove This Item !");
                fetchWishData();
            })
            .catch((err) => console.log(err));
    };

    if (!wishItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h3 className='text-black text-center' style={{ fontFamily: 'poppins', fontWeight: '400' }}>WISHLIST <i className="bi bi-suit-heart"></i></h3>
                <div className="col-md-8 offset-md-3 m-auto">
                    {wishItem.map((el) => (
                        <div key={el.id} className="card mb-3" style={{ backgroundColor: '#ffffff' }}>
                            <img src={el.image} className="card-img-top" alt={el.product} />
                            <div className="card-body">
                                <h5 className="card-title">{el.product}</h5>
                                <p className="card-text"><strong>Price:</strong> {el.price}</p>
                                <p className="card-text"><strong>Size:</strong> {el.size}</p>
                                <p className="card-text"><strong>Colors:</strong> {el.colors}</p>
                                <button className="btn btn-danger" onClick={() => deleteItem(el.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WishList;
