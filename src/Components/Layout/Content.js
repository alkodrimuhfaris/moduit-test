import React from 'react';
import {useParams} from 'react-router-dom';

export default function Content() {
  const {question} = useParams();

  return (
    <div className="content-wrapper">
      <div className="blank-content" />
      <div className="content">
        <h3 className="font-weight-bold text-main-text top-content">
          Question {question === 'one' ? 1 : 2}
        </h3>

        <footer className="footer">
          <p className="footer-text">
            Copyright © 2019{' '}
            <span className="span-text">PT Moduit Digital Indonesia</span>. All
            rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
