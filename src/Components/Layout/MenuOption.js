import React from 'react';
import {Link} from 'react-router-dom';
import SvgIcon from '../ComponentLayout/SvgIcon';

export default function MenuOption({question, val, idx}) {
  const {title, route, icon} = val;
  return (
    <li
      className={`w-100 menu ${question === route ? 'selected' : ''}`}
      key={idx}
    >
      <div className="hover-stylized" />
      <Link to={`/${route}`} className="menu-option">
        <SvgIcon src={`/assets/icon/${icon}.svg`} className={['icon']} />
        <a className="text-menu" href={`#${route}`}>
          {title}
        </a>
      </Link>
    </li>
  );
}
