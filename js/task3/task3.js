const locateBtn = document.getElementById("locate");

const generateAsteroidLocation = () => {
  return {
    x: Math.floor(Math.random() * 101),
    y: Math.floor(Math.random() * 101),
    z: Math.floor(Math.random() * 101),
  };
};

const calculateDistance = (probe, asteroid) => {
  return Math.sqrt(
    Math.pow(probe.x - asteroid.x, 2) +
      Math.pow(probe.y - asteroid.y, 2) +
      Math.pow(probe.z - asteroid.z, 2)
  );
};

const locateAsteroid = () => {
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

  // Підготовка результатів у бажаному форматі
  const result = {
    location: {
      x: Math.round(asteroid.x),
      y: Math.round(asteroid.y),
      z: Math.round(asteroid.z),
    },
    probes: {
      count: attempts,
      coordinates: probes.map((p) => ({
        x: p.x,
        y: p.y,
        z: p.z,
      })),
    },
  };

  // Відображення результатів
  document.getElementById("result").innerHTML = JSON.stringify(
    { result },
    null,
    2
  );
};

locateBtn.addEventListener("click", locateAsteroid);

// locateAsteroid();
