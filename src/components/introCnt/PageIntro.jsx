import React from 'react';

import './pageIntroStyle.css';

import intro from '../../assests/img/illustration-intro.svg';

import Btn from '../../sub-components/btn/Btn';

const PageIntro = () => {
  return (
    <div className='page-intro-cnt'>
      <div className='page-intro-first-cnt'>
        <h1 className='page-intro-first-header'>
          Bring everyone together to build better products.
        </h1>
        <p className='page-intro-first-para'>
          {' '}
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Btn />
      </div>
      <div className='page-intro-img-cnt'>
        <img className='intro-img' src={intro} alt='intro logo' />
      </div>
    </div>
  );
};

export default PageIntro;
