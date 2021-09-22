export default ({
  maxPage,
  currentPage,
  setPages = (a) => a,
  setPrevElipsis = (a) => a,
  setNextElipsis = (a) => a,
}) => {
  if (maxPage <= 4) {
    const p = [];
    for (let i = 1; i <= maxPage; i++) {
      p.push(i);
    }
    setPages(p);
    setPrevElipsis(false);
    if (maxPage < 4) {
      setNextElipsis(false);
    }
  } else if (currentPage <= 3 && maxPage > 4) {
    setPages([1, 2, 3, 4]);
    setPrevElipsis(false);
    if (maxPage > 4) {
      setNextElipsis(true);
    }
  } else if (maxPage - currentPage <= 2 && maxPage > 4) {
    const p = [];
    for (let i = maxPage - 3; i <= maxPage; i++) {
      p.push(i);
    }
    setPages(p);
    setNextElipsis(false);
    if (maxPage - 4 > 1) {
      setPrevElipsis(true);
    }
  } else {
    const p = [];
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      p.push(i);
    }
    setPages(p);
    setNextElipsis(true);
    setPrevElipsis(true);
  }
};
