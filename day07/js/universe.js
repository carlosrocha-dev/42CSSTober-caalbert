const numberOfStars = 500;

for (let i = 0; i < numberOfStars; i++) {
	const star = document.createElement('div');
	star.className = 'star';


	star.style.top = Math.random() * window.innerHeight + 'px';
	star.style.left = Math.random() * window.innerWidth + 'px';

	const starSize = Math.random() * 3 + 1;
	star.style.width = starSize + 'px';
	star.style.height = starSize + 'px';

	document.body.appendChild(star);
}
