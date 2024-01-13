const btnLocate = document.getElementById("locate");
btnLocate.addEventListener("click", locateAsteroid);

function generateAsteroidLocation() {
  return {
    x: Math.floor(Math.random() * 101),
    y: Math.floor(Math.random() * 101),
    z: Math.floor(Math.random() * 101),
  };
}

function calculateDistance(probe, asteroid) {
  return Math.sqrt(
    Math.pow(probe.x - asteroid.x, 2) +
      Math.pow(probe.y - asteroid.y, 2) +
      Math.pow(probe.z - asteroid.z, 2)
  );
}

function locateAsteroid() {
  const asteroid = generateAsteroidLocation();
  let probes = [];
  let attempts = 0;

  // Початкова точка - центр куба
  let probe = { x: 50, y: 50, z: 50 };
  let distance = calculateDistance(probe, asteroid);

  // Простий алгоритм пошуку: зменшуємо відстань до астероїда
  while (distance > 1 && attempts < 100) {
    probe.x += (asteroid.x - probe.x) / distance;
    probe.y += (asteroid.y - probe.y) / distance;
    probe.z += (asteroid.z - probe.z) / distance;
    distance = calculateDistance(probe, asteroid);
    probes.push({
      x: Math.round(probe.x),
      y: Math.round(probe.y),
      z: Math.round(probe.z),
    });
    attempts++;
  }

  // Відображення результатів
  document.getElementById("result").innerHTML = `
    <p>Asteroid Location: (${Math.round(asteroid.x)}, ${Math.round(
    asteroid.y
  )}, ${Math.round(asteroid.z)})</p>
    <p>Probes Used: ${attempts}</p>
    <p>Probes Coordinates: ${probes
      .map((p) => `(${p.x}, ${p.y}, ${p.z})`)
      .join(", ")}</p>
`;
}

// locateAsteroid();
