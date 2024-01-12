import filterModule from "./modules/filterModule.js";
import sortModule from "./modules/sortModule.js";

// const data = {
//   data: [
//     { name: "John", email: "john2@mail.com" },
//     { name: "John", email: "john1@mail.com" },
//     { name: "Jane", email: "jane@mail.com" },
//   ],
// };

const processBtn = document.getElementById("processBtn");
const conditionInput = document.getElementById("conditionInput");
const dataInput = document.getElementById("dataInput");

processBtn.addEventListener("click", processData);

console.dir(dataInput);
console.dir(conditionInput);

function processData() {
  if (dataInput.value === "") {
    console.log("empty");
  } else {
    const data = JSON.parse(dataInput.value);
    const condition = JSON.parse(conditionInput.value);
    console.log(data);
    console.log(condition);
    try {
      // Обробка даних
      let result = [];
      if (condition.condition.include) {
        result = filterModule(data.data, condition.condition.include);
      }
      if (condition.condition.sortBy) {
        result = sortModule(result, condition.condition.sortBy);
      }

      // Виведення результату
      document.getElementById("resultOutput").innerText = JSON.stringify(
        { result },
        null,
        2
      );
    } catch (e) {
      document.getElementById("resultOutput").innerText =
        "Помилка у обробці даних: " + e.message;
    }
  }
}
