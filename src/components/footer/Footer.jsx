import React, { useState } from 'react';

import Logo from '../../sub-components/logo/Logo';

const Footer = () => {
  const [email, setEmail] = useState();

  const [submittedData, setSubmittedData] = useState();
  const [err, setErr] = useState();

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  console.log(email);

  const handleSubmit = () => {
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setSubmittedData('Submitted!');
    } else setErr('Please submit valid email address');
  };

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            onChange={(e) => {
              onChange(e);
            }}
            className='input-field'
            type='email'
            required
            placeholder='please enter your email'
          />
          <button type='submit'>Go</button>
        </form>
        <div>{!submittedData ? <p>{submittedData}</p> : <p>{err}</p>}</div>
      </div>
    </div>
  );
};

export default Footer;
