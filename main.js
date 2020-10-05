const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

cvs.width = 1000;
cvs.height = 800;

var snake, food;

var grid = 20;

function init() {
	snake = new Snake();
	food = new Food();

	food.genColor();
	food.genPosition();

	setInterval(draw, 30);
}

function draw() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, cvs.width, cvs.height);

	if (snake.x == food.x && snake.y == food.y) {
		snake.eat();
		food.genColor();
		food.genPosition();
	}

	snake.update();

	food.show();
	snake.show();

	ctx.fillStyle = food.foodcolor;
	ctx.font = "24px DejaVu Sans";
	ctx.fillText("SCORE: " + snake.score, 10, cvs.height - 10);
}

init();