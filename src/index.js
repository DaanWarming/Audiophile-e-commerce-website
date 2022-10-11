import React, { createContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js"
import HeadPhones from "./Pages/HeadPhones/HeadPhones.js"
import indexStyles from "../src/index.css"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import Speakers from "./Pages/Speakers/Speakers"
import EarPhones from './Pages/Earphones/Earphones.js';
import XX99Two from "./Pages/ProductPages/HeadPhones/XX99Two"
import XX99One from './Pages/ProductPages/HeadPhones/XX99One.js';
import XX59 from './Pages/ProductPages/HeadPhones/XX59.js';
import ZX9 from './Pages/ProductPages/Speakers/ZX9.js';
import ZX7 from './Pages/ProductPages/Speakers/ZX7.js';
import YX1 from './Pages/ProductPages/Earphones/YX1.js';
import Checkout from './Pages/Checkout/Checkout.js';
import { flushSync } from 'react-dom';

export const ShoppingContext = createContext();

export default function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  let localCart = localStorage.getItem("shoppingCart");

  useEffect(() => {
    localCart = JSON.parse(localCart)
    if (localCart) setShoppingCart(localCart)
  }, []) 

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
  }, [shoppingCart]) 


  return (
    <HashRouter>
      <ScrollToTop />
        <ShoppingContext.Provider value={{shoppingCart, setShoppingCart}}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="HeadPhones" element={<HeadPhones />} />
          <Route path="Speakers" element={<Speakers />} />
          <Route path="Earphones" element={<EarPhones />} />
          <Route path="xx99-mark-two-headphones" element={<XX99Two />} />
          <Route path="xx99-mark-one-headphones" element={<XX99One />} />
          <Route path="xx59-headphones" element={<XX59 />} />
          <Route path="zx9-speaker" element={<ZX9 />} />
          <Route path="zx7-speaker" element={<ZX7 />} />
          <Route path="yx1-earphones" element={<YX1 />} />
          <Route path="Checkout" element={<Checkout />} />
        </Routes>
      </ShoppingContext.Provider>
    </HashRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
