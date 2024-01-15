import filterModule from "./modules/filterModule.js";
import sortModule from "./modules/sortModule.js";
import excludeModule from "./modules/excludeModule.js";

const processBtn = document.getElementById("processBtn");
const conditionInput = document.getElementById("conditionInput");
const dataInput = document.getElementById("dataInput");

const processData = () => {
  if (dataInput.value === "" || conditionInput.value === "") {
    alert("All fields should be filled in!");
  } else {
    try {
      const data = JSON.parse(dataInput.value);
      const condition = JSON.parse(conditionInput.value);
      let result = data.data;
      if (condition.condition.include) {
        result = filterModule(result, condition.condition.include);
      }
      if (condition.condition.sortBy) {
        result = sortModule(result, condition.condition.sortBy);
      }
      if (condition.condition.exclude) {
        result = excludeModule(result, condition.condition.exclude);
        console.log(result);
      }

      document.getElementById("result").innerText = JSON.stringify(
        { result },
        null,
        2
      );
    } catch (e) {
      alert("Please enter data in JSON format");
    }
  }
};

processBtn.addEventListener("click", processData);
