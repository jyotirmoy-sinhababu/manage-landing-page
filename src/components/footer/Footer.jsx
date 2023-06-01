import React, { useState } from 'react';

import './footerStyle.css';

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
    <div className='footer-cnt'>
      <div className='footer-1st-cnt'>
        <div className='footer-logo-cnt'>
          <Logo />
        </div>
        <div className='footer-created-by'>
          <p className='footer-createdBy-txt'>
            created by JYOTIRMOY @FRONTED MENTOR CHALLENGES
          </p>
        </div>
      </div>
      <div className='footer-btn-cnt'>
        <button className='footer-btn'>Home</button>
        <button className='footer-btn'>Pricing</button>
        <button className='footer-btn'>Products</button>
        <button className='footer-btn'> About Us</button>
      </div>
      <div className='footer-btn-cnt'>
        <button className='footer-btn'>Careers</button>
        <button className='footer-btn'>Community</button>
        <button className='footer-btn'>Privacy Policy</button>
      </div>
      <div className='footer-frm-cnt'>
        <form
          className='frm'
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
          <button className='frm-btn' type='submit'>
            Go
          </button>
        </form>
        <div className='footer-err-cnt'>
          {!submittedData ? (
            <p className='footer-err-txt'>{submittedData}</p>
          ) : (
            <p>{err}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
