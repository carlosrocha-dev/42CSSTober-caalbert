for (let i = 0; i < 1420; i++) {
	const protozoan = document.createElement("div");
	protozoan.className = "protozoan";

	const numTentacles = Math.floor(Math.random() * 8) + 1;
	for (let j = 0; j < numTentacles; j++) {
	const tentacle = document.createElement("div");
	tentacle.className = "tentacle";

	const position = Math.floor(Math.random() * 100);
	tentacle.style.left = position + "%";

	protozoan.appendChild(tentacle);
	}

	// esporos
	const numSpores = Math.floor(Math.random() * 5) + 1; // 1 to 5 spores
	for (let k = 0; k < numSpores; k++) {
	  const spore = document.createElement("div");
	  spore.className = "spore";

	  // Randomly position spores
	  const x = Math.floor(Math.random() * 100);
	  const y = Math.floor(Math.random() * 100);
	  spore.style.left = x + "%";
	  spore.style.top = y + "%";

	  // Randomize spore color between dark red and pus yellow
	  const red = Math.floor(Math.random() * 256);
	  const green = Math.floor(Math.random() * (256 - 128) + 128);
	  const blue = 0;
	  spore.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

	  protozoan.appendChild(spore);
	}

	// Posicao randomica
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	protozoan.style.left = x + "px";
	protozoan.style.top = y + "px";

	// rotacao randomica
	const rotation = Math.floor(Math.random() * 360);
	protozoan.style.transform = "rotate(" + rotation + "deg)";

	document.body.appendChild(protozoan);
}
