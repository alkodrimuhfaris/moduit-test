export default (category = 0) => {
  const cat = [
    'Others',
    'Shoes',
    'Sport',
    'Kitchen',
    'Clothes',
    'Pants',
    'Phone',
    'Computer',
    'Food',
    'Skincare',
    'Car',
  ];
  return category >= 0 && category <= 10
    ? cat[category]
    : category > 10
    ? cat[category % 10]
    : cat[0];
};
