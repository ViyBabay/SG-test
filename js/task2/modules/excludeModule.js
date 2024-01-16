function excludeModule(data, excludeConditions) {
  return data.filter((item) => {
    return excludeConditions.some((filter) => {
      return Object.keys(filter).every((key) => {
        return item[key] !== filter[key];
      });
    });
  });
}

export default excludeModule;
