import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { client } from './service/sanity';
import Shared from './pages/Shared';
import Stats from './pages/Stats';
import Post from './pages/Post';
import ProductPage from './pages/ProductPage';
import Error from './pages/Error';
import EachProduct from './pages/EachProduct';
import { MyContext } from './context/MyContext';

function App() {
  const [name, setName] = useState('');
  const [motto, setMotto] = useState('');
  const [productLink, setProductLink] = useState('');
  const [category, setCategory] = useState('');
  const [overview, setOverview] = useState('');
  const [imageLink, setImageLink] = useState('');
  // values holder
  const [product, setProduct] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [comment, setComment] = useState({});
  const [eachComment, setEachComment] = useState([]);
  // handle success and errors
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (name && productLink && category && overview && imageLink && motto) {
      const newProduct = {
        _type: 'product',
        name,
        motto,
        productLink,
        overview,
        imageLink,
        category,
      };

      try {
        const post = await client.create(newProduct);
        console.log(`Document ID: ${post._id}`);
        setSuccessMessage('Product created successfully!');
      } catch (error) {
        console.error('Create failed: ', error.message);
        setErrorMessage('An error occurred while creating the product.');
      }

      setName('');
      setOverview('');
      setProductLink('');
      setImageLink('');
      setMotto('');
    }
    console.log('hello');
  }

  useEffect(() => {
    client
      .fetch(`*[_type == "product"] | order(_createdAt desc)`)
      .then((data) => setProduct(data || []))
      .catch((error) => console.error(error));
  }, [product]);

  return (
    <MyContext.Provider
      value={{
        newComment,
        setNewComment,
        comment,
        setComment,
        eachComment,
        setEachComment,
        product,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shared />}>
            <Route index element={<Stats product={product} />} />
            <Route
              path='post'
              element={
                <Post
                  name={name}
                  setName={setName}
                  productLink={productLink}
                  setProductLink={setProductLink}
                  overview={overview}
                  setOverview={setOverview}
                  imageLink={imageLink}
                  setImageLink={setImageLink}
                  motto={motto}
                  setMotto={setMotto}
                  handleSubmit={handleSubmit}
                  category={category}
                  setCategory={setCategory}
                  errorMessage={errorMessage}
                  successMessage={successMessage}
                />
              }
            />
            <Route
              path='products'
              element={<ProductPage product={product} />}
            />

            <Route path='products/:productId' element={<EachProduct />} />

            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
