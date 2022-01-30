import "./Products.css";
import Product from "../Product/Product";

export default function Products({ newProducts }) {
  return (
    <div>
      <section className="Products-products">
        {newProducts.map(
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
            <Product
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
