import React from 'react';

import './pageCntStyle.css';

const PageCnt = () => {
  return (
    <div className='pageCnt-main-cnt'>
      <div className='pageCnt-first-cnt'>
        <h2 className='pageCnt-first-header'>What’s different about Manage?</h2>
        <p className='pageCnt-first-para'>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{' '}
        </p>
      </div>
      <div className='pageCnt-second-cnt'>
        <div className='pageCnt-second-txtCnt'>
          <div className='pageCnt-second-txt-numTxt'>
            <p className='pageCnt-second-txt-numTxt'>01</p>
          </div>
          <div className='pageCnt-second-txt-data'>
            <p className='pageCnt-second-txt-paraOne'>
              Track company-wide progress
            </p>
            <p className='pageCnt-second-txt-paraTwo'>
              {' '}
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className='pageCnt-second-txtCnt'>
          <div className='pageCnt-second-txt-numTxt'>
            <p className='pageCnt-second-txt-numTxt'>02</p>
          </div>
          <div className='pageCnt-second-txt-data'>
            <p className='pageCnt-second-txt-paraOne'>
              Advanced built-in reports
            </p>
            <p className='pageCnt-second-txt-paraTwo'>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        <div className='pageCnt-second-txtCnt'>
          <div>
            <p className='pageCnt-second-txt-numTxt'>03</p>
          </div>
          <div>
            <p className='pageCnt-second-txt-paraOne'>
              Everything you need in one place
            </p>
            <p className='pageCnt-second-txt-paraTwo'>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCnt;
