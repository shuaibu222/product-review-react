import React from 'react';
import { Link } from 'react-router-dom';
import { IoTrashOutline } from 'react-icons/io5';
import { HiExternalLink } from 'react-icons/hi';
import { deleteComm } from '../utils/delete';

const ProductPage = ({ product }) => {
  return (
    <article className='product-parent'>
      <h1>Products</h1>
      <section className='products'>
        {product.map((productList) => {
          const { _id, name, imageLink, motto, category } = productList;
          return (
            <div key={_id} className='product'>
              <div className='first'>
                <img src={imageLink} alt={name} />
                <div className='p-desc'>
                  <div className='top'>
                    <Link to={`/products/${_id}`} className='product-click'>
                      {name}
                      <span>
                        <HiExternalLink />
                      </span>
                    </Link>
                    <p>{motto}</p>
                  </div>
                  <div className='categ'>
                    <p>{category}</p>
                  </div>
                </div>
              </div>

              <IoTrashOutline className='del' onClick={() => deleteComm(_id)} />
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default ProductPage;
