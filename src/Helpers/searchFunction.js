const searchFunc = {
  searchFunction: (data = [], searchVal = '') => {
    const modData = data.map((x) => ({...x}));
    const searchResult = [];
    if (searchVal || searchVal !== '') {
      modData.forEach((x) => {
        const {title} = x;
        const val = searchFunc.deepSearch(title, searchVal);
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
  deepSearch: (title = '', searchVal = '') => {
    const searchArr = searchVal.split('');
    const titleAr = title.split('');
    const shouldBold = [];
    if (searchArr.length > titleAr.length) {
      console.log('this is too long');
      return null;
    }
    for (let key = 0; key < titleAr.length; key++) {
      if (shouldBold.length) {
        if (
          shouldBold[shouldBold.length - 1].end > key &&
          titleAr.length - (shouldBold[shouldBold.length - 1].end + 1) >=
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
  microSearch: ({title = '', key = 0, searchArr = []}) => {
    const titleAr = title.split('');
    const el = titleAr[key];
    const bold = {
      start: 0,
      end: 0,
    };
    if (el.toLowerCase() === searchArr[0].toLowerCase()) {
      for (let keyTitle = 0; keyTitle < searchArr.length; keyTitle++) {
        const searchArEl = searchArr[keyTitle];
        console.log('searchArEl')
        if (titleAr.length < key + searchArr.length) {
          break;
        }
        if (
          searchArEl.toLowerCase() !== titleAr[key + keyTitle].toLowerCase()
        ) {
          console.log(keyTitle);
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
};

export default searchFunc.searchFunction;
