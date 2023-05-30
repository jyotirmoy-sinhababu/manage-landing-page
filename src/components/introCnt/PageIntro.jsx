import React from 'react';

import intro from '../../assests/img/illustration-intro.svg';

import Btn from '../../sub-components/btn/Btn';

const PageIntro = () => {
  return (
    <div>
      <div>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          {' '}
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Btn />
      </div>
      <div>
        <img className='intro-img' src={intro} alt='intro logo' />
      </div>
    </div>
  );
};

export default PageIntro;
