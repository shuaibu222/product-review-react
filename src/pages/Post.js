import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { VscError } from 'react-icons/vsc';

const AddPage = ({
  name,
  setName,
  productLink,
  setProductLink,
  category,
  setCategory,
  overview,
  setOverview,
  imageLink,
  setImageLink,
  motto,
  setMotto,
  handleSubmit,
  errorMessage,
  successMessage,
}) => {
  return (
    <section className='post-parent'>
      <section className='post'>
        <div className='add-style'>
          <h1>Post a product</h1>
        </div>

        <form className='form'>
          <fieldset>
            <label htmlFor='title'>Name: </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              name='text'
              id='title'
            />
          </fieldset>
          <fieldset>
            <label htmlFor='title'>Motto: </label>
            <input
              type='text'
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              name='text'
              id='title'
            />
          </fieldset>
          <fieldset>
            <label htmlFor='link'>Link: </label>
            <input
              type='url'
              name='url'
              id='link'
              value={productLink}
              onChange={(e) => setProductLink(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor='link'>Category: </label>
            <select
              name='category'
              id='category'
              className='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='default'>select category</option>
              <option value='productivity'>productivity</option>
              <option value='video streaming'>video streaming</option>
              <option value='artificial inteligence'>
                artificial inteligence
              </option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor='textarea'>Overview: </label>
            <textarea
              name='textarea'
              id='textarea'
              cols='30'
              rows='5'
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              // placeholder='e.g. Opay product is...'
            ></textarea>
          </fieldset>
          <fieldset>
            <label htmlFor='img-url'>Image-link: </label>
            <input
              type='url'
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              name='url'
              id='img-url'
            />
          </fieldset>
        </form>
        <button type='submit' className='submit-btn' onClick={handleSubmit}>
          Post Product
        </button>
      </section>
      <section className='message'>
        {successMessage && (
          <div className='success'>
            <p>{successMessage}</p>
            <span>
              <IoIosCheckmarkCircleOutline />
            </span>
          </div>
        )}
        {errorMessage && (
          <>
            <p>{errorMessage}</p>
            <span>
              <VscError />
            </span>
          </>
        )}
      </section>
    </section>
  );
};

export default AddPage;
