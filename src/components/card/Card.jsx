import React from 'react';

import './cardStyle.css';

const Card = ({ img, paraOne, paraTwo }) => {
  return (
    <div className='card-cnt'>
      <div className='card-img-cnt'>
        <img className='img' src={img} alt='avatar' />
      </div>
      <p className='card-paraOne'>{paraOne}</p>
      <p className='card-paraTwo'>{paraTwo}</p>
    </div>
  );
};

export default Card;
