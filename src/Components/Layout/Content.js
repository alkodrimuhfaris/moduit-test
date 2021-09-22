import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import actions from '../../redux/actions';
import ContentTable from './ContentTable';
import Footer from './Footer';
import TopContent from './TopContent';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Content() {
  const dispatch = useDispatch();
  const {question} = useParams();
  const history = useHistory();
  const query = useQuery();
  const querySearch = query.get('search');
  const queryPage = query.get('page');
  const [search, setSearch] = React.useState('');
  const {success} = useSelector((state) => state.question2);
  const {maxPage, page: currentPage} = useSelector((state) =>
    question === 'one' ? state.question1 : state.question2,
  );

  React.useEffect(() => {
    if (search !== querySearch && question === 'two') {
      if (querySearch || querySearch === '') {
        setSearch(querySearch);
      }
    }
  }, [querySearch]);

  const handleChangeSearch = (e) => {
    if (question === 'two') {
      history.push({
        search: `?search=${e.target.value}`,
      });
    }
  };

  React.useEffect(() => {
    console.log('search value is changing');
    if (success) {
      console.log('search value is updating success');
      if (question === 'two') {
        dispatch(actions.question2.search(search));
      }
    }
  }, [search, success]);

  React.useEffect(() => {
    console.log(queryPage);
    if (queryPage !== currentPage) {
      if (queryPage > maxPage) {
        history.push({
          search: `?page=${maxPage}`,
        });
      }
      const page = queryPage || (queryPage > maxPage ? maxPage : 1);
      dispatch(
        question === 'one'
          ? actions.question1.changePage(page * 1)
          : actions.question2.changePage(page * 1),
      );
    }
  }, [queryPage]);

  return (
    <div className="content-wrapper">
      <div className="blank-content" />
      <div className="content">
        <TopContent
          question={question}
          search={search}
          handleChangeSearch={handleChangeSearch}
        />

        <ContentTable search={search} />

        <Footer />
      </div>
    </div>
  );
}
