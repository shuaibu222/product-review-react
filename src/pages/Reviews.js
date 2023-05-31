import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../context/MyContext';
import { client } from '../service/sanity';
import { IoTrashOutline } from 'react-icons/io5';

const Reviews = ({ handleCommentSubmit, productId, name }) => {
  const { setNewComment, newComment, comment } = useContext(MyContext);
  const [eachComment, setEachComment] = useState([]);

  const deleteComm = async (id, setEachComment) => {
    try {
      await client.delete(id);
      const updatedComments = await client.fetch(
        `*[postId == '${productId}'] | order(_createdAt desc)`
      );
      setEachComment(updatedComments || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    client
      .fetch(`*[postId == '${productId}'] | order(_createdAt desc)`)
      .then((data) => {
        setEachComment(data || []);
      })
      .catch((error) => console.error(error));
  }, [productId, newComment, comment]);
  return (
    <>
      <section className="comment">
        <label htmlFor="comment" style={{ fontWeight: 'bolder', color: 'red' }}>
          {eachComment.length} reviews.
        </label>
        <input
          type="text"
          name="comment"
          placeholder={`what do you think of ${name}?...`}
          id="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="submit"
          className="comment-btn"
          onClick={handleCommentSubmit}
        >
          comment
        </button>
      </section>
      <section className="comment-result">
        {eachComment.map((eachComm) => {
          const { _id, comment, _createdAt } = eachComm;
          const date = _createdAt.slice(0, 10);

          return (
            <section key={_id}>
              <section className="each-comment">
                <div className="text-comment">
                  <p className="comment-content">{comment}</p>
                  <p>{date}</p>
                </div>
                <div className="modify">
                  <IoTrashOutline
                    className="del"
                    onClick={() => deleteComm(_id, setEachComment)}
                  />
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default Reviews;
