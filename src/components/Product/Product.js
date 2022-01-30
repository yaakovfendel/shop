import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductContext";
import hendelShowProduct from "../../Contexts/hendelShowProduct";
import "./Product.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Link } from "react-router-dom";

export default function Product({
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
  const { goToProdact } = useContext(hendelShowProduct);
  return (
    <div className="Product-product-card">
      <h5>{category}</h5>
      <div className="Product-product-image" id={id}>
        <img src={image} alt="" />
      </div>
      <div className="Product-product-info"></div>
      <Link to={`/product/${id}`}>go to prodact page</Link>

      <h5 onClick={() => goToProdact(id)}>{title}</h5>
      <div>
        <h4>{price}</h4>

        <div>
          <h6>{ratingRate}</h6>
          <h6>{ratingCount}</h6>
        </div>
        <div className="button">
          <AddCircleIcon
            className="btn"
            onClick={() => productCounter(1, id)}
          ></AddCircleIcon>
          <h5 className="counter">{counter}</h5>
          <RemoveCircleIcon
            className="btn"
            onClick={() => counter && productCounter(0, id)}
          ></RemoveCircleIcon>
        </div>
      </div>
    </div>
  );
}

// <AddCircleIcon />
