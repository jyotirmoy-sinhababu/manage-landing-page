import React, { useState } from 'react';

import './navStyle.css';
import { GoThreeBars } from 'react-icons/go';

import Logo from '../../sub-components/logo/Logo';
import Btn from '../../sub-components/btn/Btn';

const Nav = () => {
  const [isNotMobileView, setIsNotMobileView] = useState(true);
  return (
    <div className='nav-cnt'>
      <div className='nav-logo-cnt'>
        <Logo />
      </div>
      {isNotMobileView ? (
        <div className='nav-main-btn-cnt'>
          {' '}
          <div className='nav-first-btn-cnt'>
            <button className='nav-btn'>Features</button>
            <button className='nav-btn'>Pricing</button>
            <button className='nav-btn'>Resources</button>
            <button className='nav-btn'>Resources</button>
          </div>
          <div>
            <Btn />
          </div>
        </div>
      ) : (
        <div className='nav-mobile-cnt'>
          <button className='nav-btn'>Features</button>
          <button className='nav-btn'>Pricing</button>
          <button className='nav-btn'>Resources</button>
          <button className='nav-btn'>Resources</button>
        </div>
      )}
      <div className='nav-mobile-btn-cnt'>
        <button className='nav-mobile-btn'>
          <GoThreeBars />
        </button>
      </div>
    </div>
  );
};

export default Nav;
