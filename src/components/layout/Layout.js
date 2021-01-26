import React from 'react';
import Header from "../header/Header";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ProductListPage from "../../pages/ProductList/ProductListPage";

const Layout = () => {
    return (
        <div style={{height : "100vh"}}>
            <Header/>
            <BrowserRouter>
                <Route path={"/shop"} component={ProductListPage}/>
                <Redirect path={"/"} to={"/shop"} />
            </BrowserRouter>
        </div>
    );
};

export default Layout;
