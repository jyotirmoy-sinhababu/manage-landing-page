import React from 'react';

const Card = ({ img, paraOne, paraTwo }) => {
  return (
    <div>
      <div>
        <img src={img} alt='avatar' />
      </div>
      <p>{paraOne}</p>
      <p>{paraTwo}</p>
    </div>
  );
};

export default Card;
