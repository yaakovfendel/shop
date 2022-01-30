import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import ProductsContext from "./Contexts/ProductContext";

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  // useEffect(() => {
  //   return fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllProducts(data);
  //       setNewProducts(data);
  //     });
  // }, []);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      data.map((prodact) => (prodact.counter = 0));
      setAllProducts(data);
      setNewProducts(data);
    }
    fetchProducts();
  }, []);
  const update_list_by_filter = (category) => {
    let tempfilterarr =
      category !== "all categories"
        ? allProducts.filter((product) => product.category === category)
        : allProducts;
    update_list_by_sort(sortTemp, tempfilterarr);
  };
  const [sortTemp, setSortTemp] = useState("all");
  const [cart, setCart] = useState(allProducts.filter((p) => p.counter > 0));

  const update_list_by_sort = (sort, arryProducts) => {
    setSortTemp(sort);
    setNewProducts(
      sort === `Price, low to high`
        ? arryProducts
            .sort((a, b) =>
              a.price > b.price ? 1 : b.price > a.price ? -1 : 0
            )
            .map((v) => {
              return v;
            })
        : sort === `Price, high to low`
        ? arryProducts
            .sort((a, b) =>
              a.price > b.price ? 1 : b.price > a.price ? -1 : 0
            )
            .reverse()
            .map((v) => {
              return v;
            })
        : sort === `Alphabetically, A-Z`
        ? arryProducts
            .sort((a, b) =>
              a.title > b.title ? 1 : b.title > a.title ? -1 : 0
            )
            .map((v) => {
              return v;
            })
        : sort === `Alphabetically, Z-A`
        ? arryProducts
            .sort((a, b) =>
              a.title > b.title ? 1 : b.title > a.title ? -1 : 0
            )
            .reverse()
            .map((v) => {
              return v;
            })
        : sort === `Best Rate`
        ? arryProducts
            .sort((a, b) =>
              a.rating.rate > b.rating.rate
                ? 1
                : b.rating.rate > a.rating.rate
                ? -1
                : 0
            )
            .reverse()
            .map((v) => {
              return v;
            })
        : arryProducts
            .sort((a, b) =>
              a.rating.count > b.rating.count
                ? 1
                : b.rating.count > a.rating.count
                ? -1
                : 0
            )
            .reverse()
            .map((v) => {
              return v;
            })
    );
  };
  const [sortArrey, setsortArrey] = useState([
    `all`,
    `Featurd`,
    `Best Rate`,
    `Alphabetically, A-Z`,
    `Alphabetically, Z-A`,
    `Price, low to high`,
    `Price, high to low`,
  ]);
  const categories = allProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  categories.unshift("all categories");

  const productCounter = (count, id) => {
    count
      ? setAllProducts(
          allProducts.map((product) => {
            product.id === id && product.counter++;
            return product;
          })
        )
      : setAllProducts(
          allProducts.map((product) => {
            product.id === id && product.counter--;
            return product;
          })
        );
    setNewProducts(newProducts);
    setCart(allProducts.filter((p) => p.counter > 0));
  };

  return (
    <>
      <Header
        categories={categories}
        sortArrey={sortArrey}
        update_list_by_filter={update_list_by_filter}
        update_list_by_sort={update_list_by_sort}
        newProducts={newProducts}
      />
      <ProductsContext.Provider value={{ productCounter: productCounter }}>
        <div className="cart-products">
          <div className="all-cart">
            <Cart cart={cart} />
          </div>
          <div className="all-products">
            <Products newProducts={newProducts} />
          </div>
        </div>
      </ProductsContext.Provider>
    </>
  );
}

export default Home;
