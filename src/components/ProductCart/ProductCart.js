import { useContext } from "react/cjs/react.development";
import ProductsContext from "../../Contexts/ProductContext";
import "./ProductCart.css";
export default function ProductCart({
  id,
  title,
  price,
  description,
  category,
  image,
  ratingRate,
  ratingCount,
  counter,
}) {
  const { productCounter } = useContext(ProductsContext);
  return (
    <div className="cart">
      <h5>{title}</h5>
      <img
        className="Product-product-image imgcart"
        id={id}
        src={image}
        alt=""
      />
      <h4>
        total:
        {price * counter}
        <br />
        <br />
        <br />
        <br />
        <br />
        amount:
        {counter}
      </h4>
      <div>
        <button className="btn" onClick={() => productCounter(1, id)}>
          +
        </button>
        <button
          className="btn"
          onClick={() => (counter ? productCounter(0, id) : console.log(""))}
        >
          -
        </button>
      </div>
    </div>
  );
}
