const convertBtn = document.getElementById("convertBtn");

const loadUnitsData = async () => {
  const filePath = "data/task1.json";

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return data.units;
  } catch (error) {
    console.error("Error loading units data:", error);
    return null;
  }
};

const addUnitsItems = (units, selectId) => {
  const select = document.getElementById(selectId);

  for (const unit in units) {
    const option = document.createElement("option");
    option.value = unit;
    option.text = unit;
    select.add(option);
  }
};

loadUnitsData().then((conversionTable) => {
  if (conversionTable) {
    addUnitsItems(conversionTable, "unit");
    addUnitsItems(conversionTable, "convertTo");
  }
});

const convertDistanceFunction = (
  distanceValue,
  distanceUnit,
  convertTo,
  conversionTable
) => {
  const convertedValue =
    (distanceValue * conversionTable[distanceUnit]) /
    conversionTable[convertTo];
  const roundedValue = Math.round(convertedValue * 100) / 100;

  return { unit: convertTo, value: roundedValue };
};

const convertDistance = () => {
  const distanceValue = parseFloat(document.getElementById("distance").value);
  const fromUnit = document.getElementById("unit").value;
  const toUnit = document.getElementById("convertTo").value;

  loadUnitsData().then((conversionTable) => {
    if (conversionTable) {
      const result = convertDistanceFunction(
        distanceValue,
        fromUnit,
        toUnit,
        conversionTable
      );
      document.getElementById("result").innerText = JSON.stringify(
        { result },
        null,
        2
      );
    }
  });
};

convertBtn.addEventListener("click", convertDistance);
