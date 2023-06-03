import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ items, filterItems, filterSet, activeStyle }) => {
  // const [categories, setCategories] = useState(items);
  return (
    <article className="products">
      <section className="p-first-row">
        <form className="product-search">
          <input
            type="text"
            placeholder="Search"
            name="hero-search-input"
            id="hero-search-input"
          />
        </form>
        <div className="product-filter">
          <h1>Featured products of all time</h1>
          <div className="filters-p">
            {filterSet.map((category, i) => {
              return (
                <p
                  key={i}
                  onClick={() => filterItems(category)}
                  className={activeStyle === category ? 'filter-active' : ''}
                >
                  {category}
                </p>
              );
            })}
          </div>
        </div>
      </section>
      <section className="products-grid">
        {items.map((productList) => {
          const { _id, name, imageLink, category, overview } = productList;
          return (
            <div key={_id} className="product-card">
              <img src={imageLink} alt={name} />
              <div className="card-desc">
                <div className="top">
                  <p className="product-click">{name}</p>
                  <p>{category}</p>
                  <p>{overview.slice(0, 100) || []}</p>
                </div>
                <Link to={`/products/${_id}`}>
                  <button className="more">Learn More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default ProductPage;
