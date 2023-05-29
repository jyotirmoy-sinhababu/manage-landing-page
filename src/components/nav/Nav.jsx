import React, { useState } from 'react';

import './navStyle.css';

import Logo from '../../sub-components/logo/Logo';

const Nav = () => {
  const [isNotMobileView, setIsNotMobileView] = useState(true);
  return (
    <div>
      <div>
        <Logo />
      </div>
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
      <div className='nav-mobile-btn-cnt'>
        <button>hi</button>
      </div>
    </div>
  );
};

export default Nav;
