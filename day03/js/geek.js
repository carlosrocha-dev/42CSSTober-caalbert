const grid = document.getElementById("grid");
const pacManMatrix = [
	[0, 0, 1, 1, 1, 0, 0],
	[0, 1, 1, 1, 1, 1, 0],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 0, 0],
	[0, 1, 1,1, 1, 1, 0],
	[0, 0, 1, 1, 1, 0, 0]
];

for (let row = 0; row < pacManMatrix.length; row++) {
	for (let col = 0; col < pacManMatrix[row].length; col++) {
		const cell = document.createElement("div");
		cell.className = "cell";
		cell.textContent = pacManMatrix[row][col];
		if (pacManMatrix[row][col] === 1) {
			cell.classList.add("pacman");
		}
		grid.appendChild(cell);
	}
}
