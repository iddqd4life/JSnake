document.addEventListener("keydown", function(key) {
	switch (key.keyCode) {
		case 37:
			snake.direction(-1, 0);
			break;
		case 38:
			snake.direction(0, -1);
			break;
		case 39:
			snake.direction(1, 0);
			break;
		case 40:
			snake.direction(0, 1);
			break;
	}
})