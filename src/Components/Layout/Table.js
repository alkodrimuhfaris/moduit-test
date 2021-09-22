import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import actions from '../../redux/actions';
import TableContainer from './Table/TableContainer';

export default function Table() {
  const dispatch = useDispatch();
  const {question} = useParams();
  const {
    showData,
    // page,
    // dataShowed,
    // maxPage,
    // search,
    order,
  } = useSelector((state) =>
    question === 'one' ? state.question1 : state.question2,
  );

  const changeOrder = () => {
    if (question === 'one') {
      dispatch(actions.question1.toggleOrder());
    } else {
      dispatch(actions.question2.toggleOrder());
    }
  };

  return (
    <div className="table-wrapper">
      <TableContainer
        changeOrder={changeOrder}
        order={order}
        showData={showData}
        question={question}
      />
    </div>
  );
}
