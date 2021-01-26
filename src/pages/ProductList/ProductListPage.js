import React from 'react';
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import './style.scss'
import Header from "./components/Header";
const ProductListPage = () => {
    return (
        <div className={"page-product-list--container"}>
            <Header/>
            <Sidebar/>
            <ProductList/>
        </div>
    );
};

export default ProductListPage;
