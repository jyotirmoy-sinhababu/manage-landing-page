import React from 'react';

import './landingStyle.css';

import Nav from '../../components/nav/Nav';
import PageIntro from '../../components/introCnt/PageIntro';
import PageCnt from '../../components/pageCnt/PageCnt';
import Card from '../../components/card/Card';
import Btn from '../../sub-components/btn/Btn';

import ali from '../../assests/img/avatar-ali.png';
import anisha from '../../assests/img/avatar-anisha.png';
import richard from '../../assests/img/avatar-richard.png';
import shanai from '../../assests/img/avatar-shanai.png';
import Footer from '../../components/footer/Footer';
import LastComp from '../../components/lastComp/LastComp';

const LandingPage = () => {
  return (
    <>
      <Nav />
      <PageIntro />
      <PageCnt />
      <div className='landingPage-header-cnt'>
        <h1>What they've said</h1>
      </div>
      <div className='landing-card-cnt'>
        <Card
          img={ali}
          paraOne={'Ali Bravo'}
          paraTwo={
            ' We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.'
          }
        />
        <Card
          img={anisha}
          paraOne={' Richard Watts'}
          paraTwo={
            ' Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'
          }
        />
        <Card
          img={richard}
          paraOne={' Richard Watts'}
          paraTwo={
            'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to'
          }
        />
        <Card
          img={shanai}
          paraOne={'Shanai Gough'}
          paraTwo={
            'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.'
          }
        />
      </div>
      <div className='landing-btn-cnt'>
        <Btn />
      </div>
      <LastComp />
      <Footer />
    </>
  );
};

export default LandingPage;
