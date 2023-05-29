import React, { useState } from 'react';

import './navStyle.css';

const Nav = () => {
  const [isNotMobileView, setIsNotMobileView] = useState(true);
  return (
    <div>
      <div></div>
      {isNotMobileView ? (
        <div>
          {' '}
          <div className='nav-first-btn-cnt'>
            <button className='nav-btn'>Features</button>
            <button className='nav-btn'>Pricing</button>
            <button className='nav-btn'>Resources</button>
            <button className='nav-btn'>Resources</button>
          </div>
          <div></div>
        </div>
      ) : null}
      <div>
        <button>hi</button>
      </div>
    </div>
  );
};

export default Nav;
