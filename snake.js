function Snake() {
	this.x = Math.floor(cvs.width / 2);
	this.y = Math.floor(cvs.height / 2);

	this.speedX = 1;
	this.speedY = 0;

	this.score = 0;
	this.body = [];

	this.eat = function() {
		this.score++;
	}

	this.update = function() {
		for (var i = 0; i < this.body.length; i++) {
			if (this.x == this.body[i].x && this.y == this.body[i].y) {
				document.location.reload();
			}
		}

		for (var i = 0; i < this.body.length - 1; i++) {
			this.body[i] = this.body[i + 1];
		}

		this.body[this.score - 1] = {
			x: this.x,
			y: this.y,
		}

		this.x += this.speedX * grid;
		this.y += this.speedY * grid;

		if (this.x < 0) {
			this.x = cvs.width;
		} else if (this.x > cvs.width) {
			this.x = grid * (-1);
		}

		if (this.y < 0) {
			this.y = cvs.height;
		} else if (this.y > cvs.height) {
			this.y = grid * (-1);
		}
	}

	this.show = function() {
		ctx.fillStyle = "white";

		for (var i = 0; i < this.body.length; i++) {
			ctx.fillRect(this.body[i].x, this.body[i].y, grid, grid);
		}

		ctx.fillRect(this.x, this.y, grid, grid);
	}

	this.direction = function(x, y) {
		this.speedX = x;
		this.speedY = y;
	}
}