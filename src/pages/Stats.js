import React, { useEffect, useState } from 'react';
import { client } from '../service/sanity';
import { FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Stats = () => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "product"] | order(_createdAt desc)[0..3]`)
      .then((data) => setFiltered(data || []))
      .catch((error) => console.error(error));
  }, [filtered]);

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
          />
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
                    <div>
                      <FaComments />
                      <span>10</span>
                    </div>
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
