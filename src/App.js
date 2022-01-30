import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import hendelShowProduct from "./Contexts/hendelShowProduct";

import Home from "./Home";
export default function App() {
  const [allProductsMain, setAllProductsMain] = useState([]);
  const [newProductsMain, setNewProductsMain] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      data.map((prodact) => (prodact.counter = 0));
      setAllProductsMain(data);
      setNewProductsMain(data);
    }
    fetchProducts();
  }, []);
  const goToProdact = (id) => {
    console.log(id);
  };
  console.log(newProductsMain);
  return (
    <div>
      <hendelShowProduct.Provider value={{ goToProdact }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/product/:id"
              element={<ProductPage allProductsMain={allProductsMain} />}
            ></Route>
          </Routes>
        </Router>
      </hendelShowProduct.Provider>
    </div>
  );
}

// <Route exact path="product/:id" element={<ProductPage />}></Route>
