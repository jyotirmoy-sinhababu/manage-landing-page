import React, { useState } from 'react';

import Logo from '../../sub-components/logo/Logo';

const Footer = () => {
  const [email, setEmail] = useState();

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  console.log(email);
  return (
    <div>
      <div>
        <div>
          <Logo />
        </div>
        <div>
          <p>created by JYOTIRMOY @FRONTED MENTOR CHALLENGES</p>
        </div>
      </div>
      <div>
        <button>Home</button>
        <button>Pricing</button>
        <button>Products</button>
        <button> About Us</button>
      </div>
      <div>
        <button>Careers</button>
        <button>Community</button>
        <button>Privacy Policy</button>
      </div>
      <div>
        <form>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            className='input-field'
            type='email'
            placeholder='please enter your email'
          />
          <button>Go</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
