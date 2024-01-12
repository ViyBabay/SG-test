const sortModule = (data, sortBy) => {
  if (!sortBy || sortBy.length === 0) return data;

  return data.sort((a, b) => {
    for (let key of sortBy) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
    }
    return 0;
  });
};

export default sortModule;
