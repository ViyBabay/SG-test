const loadJSON = async (filePath) => {
  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
};

const questions = await loadJSON("../../data/task4.json");

const traverseQuestions = (config, currentPath, currentQuestion, paths) => {
  if ("options" in currentQuestion) {
    for (let option of currentQuestion.options) {
      console.log("this is option >>>", option);
      for (let key in option) {
        console.log("key >>>", key);
        let newPath = [...currentPath, { [currentQuestion.text]: key }];
        console.log("new path >>>", newPath);
        console.log("options key >>>", option[key]);
        traverseQuestions(0
          config,
          newPath,
          config.questions[option[key] - 1],
          paths
        );
      }
    }
  } else {
    paths.push(currentPath);
  }
};

const testQuestionnaire = (config) => {
  const paths = [];
  traverseQuestions(config, [], config.questions[0], paths);

  return {
    paths: {
      number: paths.length,
      list: paths,
    },
  };
};

const config = {
  questions,
};

const result = testQuestionnaire(config);

console.log(JSON.stringify(result, null, 2));
