import React from 'react';
import { ImStatsBars } from 'react-icons/im';

const Stats = ({ product }) => {
  return (
    <section className='stats'>
      <div className='items'>
        <div className='first-row'>
          <span className='number'>{product.length}</span>
          <span className='icon'>
            <ImStatsBars />
          </span>
        </div>
        <div className='desc'>Total Products</div>
      </div>
    </section>
  );
};

export default Stats;
