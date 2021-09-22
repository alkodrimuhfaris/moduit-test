export default (data = [], sort = 'asc') => {
  const modData = data.map((x) => ({...x}));
  const asc = modData
    .map((x) => ({...x}))
    .sort((a, b) => a.title.localeCompare(b.title));
  const dsc = [];
  if (sort === 'asc') {
    return asc;
  }
  asc.forEach((x, idx) => {
    const newX = asc[asc.length - idx - 1];
    dsc.push({...newX});
    return {...newX};
  });
  return dsc;
};
