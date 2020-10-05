function Food() {
	this.x = 0;
	this.y = 0;

	this.foodcolor;
	this.foodcolors = ["red", "purple", "orange", "yellow", "lime"];

	this.genPosition = function() {
		this.x = Math.floor(Math.random() * Math.floor(cvs.width / grid)) * grid;
		this.y = Math.floor(Math.random() * Math.floor(cvs.height / grid)) * grid;
	}

	this.genColor = function() {
		this.foodcolor = this.foodcolors[Math.floor(Math.random() * Math.floor(this.foodcolors.length))]
	}

	this.show = function() {
		ctx.fillStyle = this.foodcolor;
		ctx.fillRect(this.x, this.y, grid, grid);
	}
}