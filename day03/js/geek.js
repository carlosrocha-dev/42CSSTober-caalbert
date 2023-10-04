const grid = document.getElementById("grid");
const size = 100;
const radiusSq = Math.pow(size / 2, 2);
let row = 0;
let col = 0;

while (row < size) {
	col = 0;
	while (col < size) {
		const cell = document.createElement("div");
		cell.className = "cell";
		const dx = col - size / 2;
		const dy = row - size / 2;
		const distanceSq = Math.pow(dx, 2) + Math.pow(dy, 2);

		if (distanceSq <= radiusSq) {
			if (dx >= 0 && dy >= -dx && dy <= dx) {
				cell.textContent = "0";
			} else {
				if (Math.random() < 0.5) {
					cell.textContent = "0";
				} else {
					cell.textContent = "1";
				}
			}
		} else {
			cell.textContent = "0";
		}
		grid.appendChild(cell);
		col++;
	}
	row++;
}
