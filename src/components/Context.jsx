import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [category, setCategory] = useState('')

    const handleCategoryChange = (val) => {
        setCategory(val);
    }

    return (
        <ProductContext.Provider value={{ category, setCategory, handleCategoryChange }}>
            {children}
        </ProductContext.Provider>
    );
};
