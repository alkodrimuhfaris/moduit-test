import React from 'react';
import {useParams} from 'react-router-dom';
import useWindowDimensions from '../../Helpers/useWindowDimension';
import SvgIcon from '../ComponentLayout/SvgIcon';
import MenuOption from './MenuOption';

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const {question} = useParams();

  const menu = [
    {title: 'Question 1', route: 'one', icon: 'Q1'},
    {title: 'Question 2', route: 'two', icon: 'Q2'},
  ];

  const {md} = useWindowDimensions();

  React.useEffect(() => {
    if (!md) {
      setOpen(false);
    }
  }, [md]);

  return (
    <div className="menu-wrapper shadow">
      <SvgIcon src="/assets/logo/logo.svg" className={['logo-icon']} />
      {!md ? null : (
        <div className="burger-wrapper">
          <button
            type="button"
            onClick={() => setOpen((x) => !x)}
            className={`burger-button ${open ? 'open' : ''}`}
          >
            {[1, 2, 3].map((val) => (
              <span
                key={val}
                className={`child-${val} ${open ? 'open' : ''}`}
              />
            ))}
          </button>
        </div>
      )}
      <ul className={`menu-container ${open ? 'open' : ''}`}>
        {menu.map((val, idx) => (
          <MenuOption key={idx} question={question} val={val} idx={idx} />
        ))}
      </ul>
    </div>
  );
}
