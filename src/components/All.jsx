import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Product from './Product';
import NotFound from './NotFound';
import Login from './Login';
import Private from './Private';
import Description from './Description';
import WishList from './WishList';
import { ProductProvider } from './Context';

const All = () => {
  return (
    <ProductProvider >
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product" element={
          <Private>
            <Product />
          </Private>
        } />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/wish/:id" element={<WishList />} /> */}
        <Route path="/singlepage/:id" element={<Description />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductProvider>
  );
}

export default All;
