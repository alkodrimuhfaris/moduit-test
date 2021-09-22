import React from 'react';
import {useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import useWindowDimensions from '../../Helpers/useWindowDimension';
import Content from './Content';
import Menu from './Menu';
import actions from '../../redux/actions/index';

export default function Layout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {question} = useParams();
  const {smO, mdO, lgO, xlO} = useWindowDimensions();

  React.useEffect(() => {
    dispatch(actions.question1.getQuestion());
    dispatch(actions.question2.getQuestion());
  }, []);

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
