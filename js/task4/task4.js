const loadQuestions = async () => {
  const filePath = "../../data/task4.json";

  try {
    const response = await fetch(filePath);
    return await response.json();
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
};

const createPath = (config, currentPath, currentQuestion, paths) => {
  if ("options" in currentQuestion) {
    for (let option of currentQuestion.options) {
      for (let key in option) {
        let newPath = [...currentPath, { [currentQuestion.text]: key }];
        createPath(config, newPath, config.questions[option[key] - 1], paths);
      }
    }
  } else {
    paths.push(currentPath);
  }
};

const testQuestionnaire = async () => {
  const config = { questions: await loadQuestions() };

  const paths = [];
  createPath(config, [], config.questions[0], paths);

  return {
    paths: {
      number: paths.length,
      list: paths,
    },
  };
};

const result = await testQuestionnaire();

document.getElementById("result").innerText = JSON.stringify(
  { result },
  null,
  2
);
console.log(JSON.stringify(result, null, 2));
