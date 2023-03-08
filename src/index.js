import ReactDom from "react-dom";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
}from 'react-router-dom';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
ReactDom.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route index element={<Cart/>}/> */}
            <Route  path='/Cart'  element={<Cart/>}/>
            <Route path='/Login'element={<Login/>}/>
            <Route path='/Product'element={<Product/>}/>
            <Route path='/ProductList'element={<ProductList/>}/>
            <Route path='/Register'element={<Register/>}/>
        </Routes>
    </BrowserRouter>,document.getElementById('root')
)

