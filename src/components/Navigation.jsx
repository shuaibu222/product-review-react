import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MyContext } from '../context/MyContext';

const Navigation = () => {
  const { product } = useContext(MyContext);

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="egg">PR</div>
          <p>Product Review</p>
        </Link>
        <nav className="nav">
          <ul>
            <Link className="nav-link" to="/">
              Products
            </Link>
            <Link className="nav-link" to="products">
              Market
            </Link>
            <Link className="nav-link" to="post">
              Post
            </Link>
          </ul>
        </nav>
        <div className="total-product">
          <FaShoppingCart />
          <p>{product.length}</p>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
