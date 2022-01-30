import "./Header.css";

export default function Header({
  categories,
  update_list_by_filter,
  update_list_by_sort,
  sortArrey,
  newProducts,
}) {
  return (
    <nav className="Header-product-filter">
      <h1>go-shop</h1>
      <div className="Header-sort">
        <div className="Header-collection-sort">
          <label>Filter by:</label>
          <select
            onChange={(e) => {
              update_list_by_filter(e.target.value);
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="Header-collection-sort">
          <label>Sort by:</label>
          <select
            onChange={(e) => {
              update_list_by_sort(e.target.value, newProducts);
            }}
          >
            {sortArrey.map((sort) => (
              <option key={sort} value={sort}>
                {sort}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

// console.log(typeof select);
// console.log(select.props.children[0].props.value);
// <option>Featured</option>
// <option>Date, new to old</option>
// <option>Date, old to new</option>
// <option value="all">all</option>
// <option value="Featurd">Featurd</option>
// <option value="Rate">Best Rate</option>
// <option value="A-Z">Alphabetically, A-Z</option>
// <option value="Z-A">Alphabetically, Z-A</option>
// <option value="L-H">Price, low to high</option>
// <option value="H-L">Price, high to low</option>
