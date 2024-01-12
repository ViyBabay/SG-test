const filterModule = (data, filters) => {
  if (!filters) return data;

  return data.filter((item) => {
    return filters.some((filter) => {
      return Object.keys(filter).every((key) => {
        return item[key] === filter[key];
      });
    });
  });
};

export default filterModule;
