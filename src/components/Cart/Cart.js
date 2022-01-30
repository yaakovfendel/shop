import ProductCart from "../ProductCart/ProductCart";
import "./Cart.css";
export default function Cart({ cart }) {
  let total = 0;
  cart.map(({ price, counter }) => (total += price * counter));
  return (
    <div className="Product-product-cart">
      <div className="Products-products-total">total:{total}</div>
      <section className="Product-product-card-cart">
        {cart.map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            counter,
          }) => (
            <ProductCart
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              ratingRate={rating?.rate}
              ratingCount={rating?.count}
              counter={counter}
            />
          )
        )}
      </section>
    </div>
  );
}
