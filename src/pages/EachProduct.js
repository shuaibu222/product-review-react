import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import Reviews from './Reviews';
import { client } from '../service/sanity';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const EachProduct = () => {
  const [eachProduct, setEachProduct] = useState({});

  const { newComment, setNewComment, setComment } = useContext(MyContext);

  const { productId } = useParams();

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (newComment) {
      const newComm = {
        _type: 'comments',
        comment: newComment,
        postId: productId,
      };

      try {
        const post = await client.create(newComm);
        setNewComment('');
        setComment(post);
      } catch (error) {
        console.error('Create failed: ', error.message);
      }
    }
  };

  useEffect(() => {
    client
      .fetch(`*[_id == '${productId}']`)
      .then((data) => setEachProduct(data[0] || []))
      .catch((error) => console.error(error));
  }, [productId]);

  const { _id, name, imageLink, motto, category, overview, productLink } =
    eachProduct;

  return (
    <article className="parent-each">
      <Link to="/products">
        <BsArrowLeft className="back-icon" />
      </Link>

      <section to={`/products/${_id}`} className="product" key={_id}>
        <div className="first">
          <img src={imageLink} alt={name} />
          <div className="p-desc">
            <div className="top">
              <h2>{name}</h2>
              <p>{motto}</p>
            </div>
            <div className="categ">
              <p>{category}</p>
            </div>
          </div>
        </div>
        <div className="like">
          <a href={productLink} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </section>

      <section className="details">
        <div className="overview">
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div className="review">
          <h3>Reviews</h3>
          <Reviews
            handleCommentSubmit={handleCommentSubmit}
            productId={productId}
            name={name}
          />
        </div>
      </section>
    </article>
  );
};

export default EachProduct;
