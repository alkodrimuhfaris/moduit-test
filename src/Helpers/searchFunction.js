const searchFunc = {
  searchFunction: (data = [], searchVal = '') => {
    const modData = data.map((x) => x);
    const searchResult = [];
    if (searchVal !== '') {
      modData.forEach((x) => {
        const {title} = x;
        const val = searchFunc.deepSearch({title, searchVal});
        if (val) {
          const newData = {
            ...x,
            title: val,
          };
          searchResult.push(newData);
        }
      });
      return searchResult;
    }
    return modData.map((x) => {
      const {title} = x;
      return {
        ...x,
        title: `<p>${title}</p>`,
      };
    });
  },
  microSearch: ({title = '', key = 0, searchArr = []}) => {
    const titleAr = title.split('');
    const el = titleAr[key];
    const bold = {
      start: 0,
      end: 0,
    };
    if (el === searchArr[0] && titleAr.length - (key + 1) >= searchArr.length) {
      for (let keyTitle = 0; keyTitle < searchArr.length; keyTitle++) {
        const searchArEl = searchArr[keyTitle];
        if (searchArEl !== titleAr[key + keyTitle]) {
          break;
        } else if (keyTitle === searchArr.length - 1) {
          bold.start = key;
          bold.end = key + keyTitle;
          return bold;
        }
      }
    }
    return null;
  },
  deepSearch: (title = '', searchVal = '') => {
    const searchArr = searchVal.split('');
    const titleAr = title.split('');
    const shouldBold = [];
    if (searchVal.length > title.length) {
      return null;
    }
    for (let key = 0; key < searchArr.length; key++) {
      if (shouldBold.length > 0) {
        if (
          shouldBold[shouldBold.length].end > key &&
          titleAr.length - (shouldBold[shouldBold.length].end + 1) >=
            searchArr.length
        ) {
          const bold = searchFunc.microSearch({title, key, searchArr});
          if (bold) {
            shouldBold.push(bold);
          }
        }
      } else {
        const bold = searchFunc.microSearch({title, key, searchArr});
        if (bold) {
          shouldBold.push(bold);
        }
      }
    }
    if (shouldBold.length) {
      shouldBold.forEach((x) => {
        titleAr[x.start] = `<strong>${titleAr[x.start]}`;
        titleAr[x.end] = `${titleAr[x.end]}</strong>`;
      });
      const resultTitle = titleAr.join('');
      return `<p>${resultTitle}</p>`;
    }
    return null;
  },
};

export default searchFunc.searchFunction;
