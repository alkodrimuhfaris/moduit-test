import services from '../../Helpers/services';

export default {
  getQuestion: () => ({
    type: 'QUESTION2',
    payload: services().get('frontend/web/question/one'),
  }),
  toggleOrder: () => ({
    type: 'QUESTION2_TOGGLE_ORDER',
  }),
  changePage: (payload = 0) => ({
    type: 'QUESTION2_CHANGE_PAGE',
    payload,
  }),
  changeDataPerPage: (payload = 5) => ({
    type: 'QUESTION2_CHANGE_DATA_PER_PAGE',
    payload,
  }),
  search: (payload = '') => ({
    type: 'QUESTION2_SEARCH',
    payload,
  }),
};
