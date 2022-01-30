import { useContext } from "react";
// import "./Product.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
export default function ProductPage({ allProductsMain }) {
  //   const { productCounter, goToProdact } = useContext(ProductsContext);
  const { id } = useParams();
  console.log(id);
  const product = allProductsMain.find((product) => product.id == id);
  console.log(product);
  return (
    <div className="Product-product-card">
      <h5>{product.category}</h5>
      <div className="Product-product-image" id={id}>
        <img src={product.image} alt="" />
      </div>
      <div className="Product-product-info"></div>

      <div>
        <h4>{product.price}</h4>

        <div>
          <h6>{product.ratingRate}</h6>
          <h6>{product.ratingCount}</h6>
        </div>
      </div>
    </div>
  );
}

// <AddCircleIcon />

// <h5 onClick={() => goToProdact(id)}>{title}</h5>
//   <div className="button">
//     <AddCircleIcon
//       className="btn"
//       onClick={() => productCounter(1, id)}
//     ></AddCircleIcon>
//     <h5 className="counter">{counter}</h5>
//     <RemoveCircleIcon
//       className="btn"
//       onClick={() => counter && productCounter(0, id)}
//     ></RemoveCircleIcon>
