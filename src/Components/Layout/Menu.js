import React from 'react';
import {useParams} from 'react-router-dom';
import SvgIcon from '../ComponentLayout/SvgIcon';
import MenuOption from './MenuOption';

export default function Menu() {
  const {question} = useParams();

  const menu = [
    {title: 'Question 1', route: 'one', icon: 'Q1'},
    {title: 'Question 2', route: 'two', icon: 'Q2'},
  ];

  return (
    <div className="menu-wrapper shadow">
      <SvgIcon src="/assets/logo/logo.svg" className={['logo-icon']} />
      <ul className="menu-container">
        {menu.map((val, idx) => (
          <MenuOption question={question} val={val} idx={idx} />
        ))}
      </ul>
    </div>
  );
}
