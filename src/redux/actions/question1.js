import services from '../../Helpers/services';

export default {
  getQuestion: () => ({
    type: 'QUESTION1',
    payload: services().get('frontend/web/question/one'),
  }),
  toggleOrder: () => ({
    type: 'QUESTION1_TOGGLE_ORDER',
  }),
  changePage: (payload = 0) => ({
    type: 'QUESTION1_CHANGE_PAGE',
    payload,
  }),
  changeDataPerPage: (payload = 5) => ({
    type: 'QUESTION1_CHANGE_DATA_PER_PAGE',
    payload,
  }),
};
