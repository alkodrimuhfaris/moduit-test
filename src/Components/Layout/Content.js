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
  const {
    maxPage,
    success: getDataSuccess,
    page: currentPage,
    search: savedSearch,
  } = useSelector((state) =>
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
      history.push(
        question === 'two'
          ? {
              search: `?page=1&search=${e.target.value}`,
            }
          : {
              search: `?search=${e.target.value}`,
            },
      );
    }
  };

  React.useEffect(() => {
    if (success) {
      if (question === 'two') {
        dispatch(actions.question2.search(search));
      }
    }
  }, [search, success]);

  React.useEffect(() => {
    if (getDataSuccess) {
      if (queryPage !== currentPage) {
        if (queryPage > maxPage) {
          history.push({
            search: `?page=${maxPage}`,
          });
        }
        if (queryPage <= 0) {
          history.push(
            savedSearch && question === 'two'
              ? {
                  search: `?page=${1}&search=${savedSearch}`,
                }
              : {
                  search: `?page${1}`,
                },
          );
        }
        const page = queryPage || (queryPage > maxPage ? maxPage : 1);
        dispatch(
          question === 'one'
            ? actions.question1.changePage(page * 1)
            : actions.question2.changePage(page * 1),
        );
      }
    }
  }, [queryPage, getDataSuccess]);

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
