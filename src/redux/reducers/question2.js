import searchFunction from '../../Helpers/searchFunction';
import sortArray from '../../Helpers/sortArray';

const initialState = {
  loading: false,
  success: false,
  error: false,

  order: 'asc',

  data: [],
  showData: [],
  page: 1,
  offset: 0,
  dataShowed: 5,
  maxPage: 1,
  totalData: 0,
  search: '',
  searchData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'QUESTION2_PENDING': {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }
    case 'QUESTION2_REJECTED': {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }
    case 'QUESTION2_FULFILLED': {
      const {data: dataRaw} = action.payload;

      const data = sortArray(dataRaw, state.order);
      const totalData = data.length;
      const {offset, dataShowed} = state;

      const searchData = searchFunction(data, state.search);

      const maxPage =
        dataShowed === 'all' ? 1 : Math.ceil(totalData / dataShowed);

      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData = data.slice(offset, endData);

      return {
        ...state,
        loading: false,
        success: true,
        error: false,

        rawData: data,
        data: searchData,
        showData,
        maxPage,
        totalData,
      };
    }
    case 'QUESTION2_TOGGLE_ORDER': {
      const order = state.order === 'asc' ? 'dsc' : 'asc';
      const {offset, dataShowed, totalData, rawData: oldData, search} = state;

      const rawData = sortArray(oldData, order);

      const data = searchFunction(rawData, search);

      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData = data.slice(offset, endData);

      return {
        ...state,
        order,
        rawData,
        data,
        showData,
      };
    }
    case 'QUESTION2_CHANGE_PAGE': {
      const {data, dataShowed, maxPage} = state;

      let page = action.payload;
      page = page < maxPage ? page : maxPage;
      const totalData = data.length;
      const offset = (page - 1) * dataShowed;
      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData = data.slice(offset, endData);

      return {
        ...state,
        page,
        offset,
        showData,
      };
    }
    case 'QUESTION2_CHANGE_DATA_PER_PAGE': {
      const dataShowed = action.payload;
      const {data, totalData} = state;
      const page = 1;
      const offset = 0;

      const maxPage = Math.ceil(totalData / dataShowed);

      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData =
        dataShowed === 'all'
          ? data.map((x) => ({...x}))
          : data.slice(offset, endData);

      return {
        ...state,
        page,
        offset,
        dataShowed,
        maxPage,
        showData,
      };
    }
    case 'QUESTION2_SEARCH': {
      const search = action.payload;
      const {order, dataShowed, rawData: oldData} = state;
      const page = 1;
      const offset = page - 1;

      const rawData = sortArray(oldData, order);

      const data = rawData.length ? searchFunction(rawData, search) : [];
      const totalData = data.length;
      const maxPage = Math.ceil(totalData / dataShowed);

      const endData =
        dataShowed === 'all'
          ? totalData
          : offset + dataShowed < totalData
          ? offset + dataShowed
          : totalData;
      const showData = data.slice(offset, endData);

      return {
        ...state,
        search,
        page,
        offset,
        order,
        rawData,
        data,
        showData,
        totalData,
        maxPage,
      };
    }
  }
};
