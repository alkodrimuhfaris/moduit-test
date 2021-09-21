import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import useWindowDimensions from '../../Helpers/useWindowDimension';
import Content from './Content';
import Menu from './Menu';

export default function Layout(props) {
  const history = useHistory();
  const {question} = useParams();
  const {smO, mdO, lgO, xlO} = useWindowDimensions();

  React.useEffect(() => {
    if (question !== 'one' && question !== 'two') {
      history.push('one');
    }
  }, [question]);

  return (
    <div
      className={`${smO ? 'sm' : mdO ? 'md' : lgO ? 'lg' : xlO ? 'xl' : 'xl'}`}
    >
      <div className="parent">
        <Menu />
        <Content />
      </div>
    </div>
  );
}
