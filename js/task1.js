const loadUnitsData = async () => {
  try {
    const response = await fetch("data/units.json");
    const data = await response.json();
    return data.units;
  } catch (error) {
    console.error("Error loading units data:", error);
    return null;
  }
};

function populateUnitsSelect(units, selectId) {
  const select = document.getElementById(selectId);
  for (const unit in units) {
    const option = document.createElement("option");
    option.value = unit;
    option.text = unit;
    select.add(option);
  }
}

loadUnitsData().then((conversionTable) => {
  if (conversionTable) {
    populateUnitsSelect(conversionTable, "unit");
    populateUnitsSelect(conversionTable, "convertTo");
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
      document.getElementById(
        "result"
      ).textContent = `Converted value: ${result.value} ${result.unit}`;
      console.log(JSON.stringify(result));
      alert(JSON.stringify(result));
    }
  });
};
