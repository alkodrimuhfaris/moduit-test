import React from 'react';
import {ReactSVG} from 'react-svg';

export default function SvgIcon({
  src = '/assets/logo/logo.svg',
  className = ['icons-logo'],
}) {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        className.forEach((val) => {
          svg.classList.add(val);
        });
        svg.classList.add('ver-1');
        // svg.setAttribute("style", "fill: white");
      }}
      src={src}
    />
  );
}
