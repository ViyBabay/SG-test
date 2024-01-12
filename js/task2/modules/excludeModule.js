function excludeModule(data, excludeConditions) {
  console.log(excludeConditions);
  //   return data.filter((item) =>
  //     excludeConditions.some((condition) =>
  //       Object.keys(condition).some((key) => item[key] !== condition[key])
  //     )
  //   );
  return data.filter((item) => {
    console.log(item);
    return excludeConditions.some((filter) => {
      console.log(filter);
      return Object.keys(filter).every((key) => {
        console.log(key);
        return item[key] !== filter[key];
      });
    });
  });
}

export default excludeModule;
