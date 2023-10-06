const numberOfPlanets = 10;
const numberOfGalaxies = 5;
const numberOfNebulas = 10;

// Criação de planetas
for (let i = 0; i < numberOfPlanets; i++) {
	const planet = document.createElement('div');
	planet.className = 'planet';
	planet.style.top = Math.random() * window.innerHeight + 'px';
	planet.style.left = Math.random() * window.innerWidth + 'px';
	const planetSize = Math.random() * 50 + 10;
	planet.style.width = planetSize + 'px';
	planet.style.height = planetSize + 'px';
	document.body.appendChild(planet);
}

// Criação de galáxias
for (let i = 0; i < numberOfGalaxies; i++) {
	const galaxy = document.createElement('div');
	galaxy.className = 'galaxy';
	galaxy.style.top = Math.random() * window.innerHeight + 'px';
	galaxy.style.left = Math.random() * window.innerWidth + 'px';
	document.body.appendChild(galaxy);
}

// Criação de nebulosas
for (let i = 0; i < numberOfNebulas; i++) {
	const nebula = document.createElement('div');
	nebula.className = 'nebula';
	nebula.style.top = Math.random() * window.innerHeight + 'px';
	nebula.style.left = Math.random() * window.innerWidth + 'px';
	const nebulaSize = Math.random() * 200 + 50;
	nebula.style.width = nebulaSize + 'px';
	nebula.style.height = nebulaSize + 'px';
	document.body.appendChild(nebula);
}
