import React, { useEffect, useState } from 'react';
import { client } from '../service/sanity';
import { Link } from 'react-router-dom';

const Stats = () => {
  const [filtered, setFiltered] = useState([]);
  const [searchFiltered, setSearchFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      const query = `*[_type == "product" && name match "${searchQuery}*"]`;
      client
        .fetch(query)
        .then((data) => setSearchFiltered(data || []))
        .catch((error) => console.error(error));
    } else {
      client
        .fetch(`*[_type == "product"] | order(_createdAt desc)[0..3]`)
        .then((data) => {
          const uniqueProducts = [];
          const seenNames = new Set();

          for (const product of data) {
            if (!seenNames.has(product.name)) {
              uniqueProducts.push(product);
              seenNames.add(product.name);
            }
          }
          setFiltered(uniqueProducts || []);
        })

        .catch((error) => console.error(error));
    }
  }, [searchQuery]);

  return (
    <article className="hero">
      <section className="first-row">
        <div className="intro">
          <h1>Market your product</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cupiditate adipisci earum voluptatibus vitae.
          </p>
        </div>
        <form className="hero-search">
          <input
            type="text"
            placeholder="Search"
            name="hero-search-input"
            id="hero-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="search-list">
            {searchFiltered.map((prod) => {
              const { _id, name } = prod;
              return (
                <Link
                  to={`/products/${_id}`}
                  className="search-result"
                  key={_id}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </form>
      </section>
      <section className="hero-width">
        <section className="second-row">
          <div className="filters">
            <p className="latest">Latest Product</p>
          </div>
          <div className="some-product">
            {filtered.map((prod) => {
              const { imageLink, _id, name } = prod;
              return (
                <Link to={`/products/${_id}`} className="card" key={_id}>
                  <img src={imageLink} alt={name} />
                  <div className="desc-card">
                    <p>{name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </section>
    </article>
  );
};

export default Stats;
