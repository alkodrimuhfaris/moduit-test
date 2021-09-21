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
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'QUESTION1_PENDING': {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }
    case 'QUESTION1_REJECTED': {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }
    case 'QUESTION1_FULFILLED': {
      const {data: dataRaw} = action.payload;

      const data =
        state.order === 'asc'
          ? dataRaw.sort((a, b) => a.title > b.title)
          : dataRaw.sort((a, b) => a.title < b.title);
      const totalData = data.length;
      const {offset, dataShowed} = state;

      const maxPage = Math.ceil(totalData / dataShowed);

      const endData =
        offset + dataShowed > totalData ? offset + dataShowed : totalData;
      const showData = data.slice(offset, endData);

      return {
        ...state,
        loading: false,
        success: true,
        error: false,

        data,
        showData,
        maxPage,
        totalData,
      };
    }
    case 'QUESTION1_TOGGLE_ORDER': {
      const order = state.order === 'asc' ? 'dsc' : 'asc';
      const {offset, dataShowed, totalData, data: oldData} = state;
      const data =
        order === 'asc'
          ? oldData.sort((a, b) => a.title > b.title)
          : oldData.sort((a, b) => a.title < b.title);

      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData = data.slice(offset, endData);

      return {
        order,
        data,
        showData,
      };
    }
    case 'QUESTION1_CHANGE_PAGE': {
      const {data, dataShowed, maxPage} = state;

      let page = action.payload;
      page = page < maxPage ? page : maxPage;
      const totalData = data.length;
      const offset = (page - 1) * dataShowed;
      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData = data.slice(offset, endData);

      return {
        page,
        offset,
        showData,
      };
    }
    case 'QUESTION1_CHANGE_DATA_PER_PAGE': {
      const dataShowed = action.payload;
      const {data, totalData} = state;
      const page = 1;
      const offset = 0;

      const maxPage = Math.ceil(totalData / dataShowed);

      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData =
        dataShowed === 'all' ? data.map((x) => x) : data.slice(offset, endData);

      return {
        page,
        offset,
        dataShowed,
        maxPage,
        showData,
      };
    }
  }
};
