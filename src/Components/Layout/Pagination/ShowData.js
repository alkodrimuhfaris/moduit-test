import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../../redux/actions';

export default function ShowData({question}) {
  const dispatch = useDispatch();
  const {dataShowed} = useSelector((state) =>
    question === 'one' ? state.question1 : state.question2,
  );
  const option = [5, 8, 10, 15, 25, 'all'];

  const changeDataShowed = (e) => {
    e.preventDefault();
    if (question === 'one') {
      dispatch(actions.question1.changeDataPerPage(e.target.value));
    } else {
      dispatch(actions.question2.changeDataPerPage(e.target.value));
    }
  };

  return (
    <div className="show-data">
      <span className="text">Show</span>
      <select onChange={changeDataShowed} className="select">
        {option.map((val, idx) => (
          <option value={val} key={idx} selected={val === dataShowed}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}
