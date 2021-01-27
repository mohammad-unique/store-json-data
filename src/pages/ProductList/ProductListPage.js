import React from 'react';
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import './style.scss'
import Header from "./components/Header";
import {HomeProvider} from "../../context/HomeContext";

const ProductListPage = () => {
    return (
        <HomeProvider>
            <div className={"page-product-list--container"}>
                <Header/>
                <Sidebar/>
                <ProductList/>
            </div>
        </HomeProvider>
    );
};

export default ProductListPage;
