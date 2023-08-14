// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
	constructor(width = 80, height = 60) {
		this.width = width;
		this.height = height;
	}
}

Size.prototype.resize = function(newWidth, newHeight) {
	this.width = newWidth;
	this.height = newHeight;
}

export class Position {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
}

Position.prototype.move = function(newX, newY) {
	this.x = newX;
	this.y = newY;
}

export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800, 600);
		this.size = new Size();
		this.position = new Position();
	}

	resize(Size) {
		if (Size.width < 1) 
			this.size.width = 1;
		else if (Size.width + this.position.x > this.screenSize.width) 
			this.size.width = this.screenSize.width - this.position.x;
		else
			this.size.width = Size.width;

		if (Size.height < 1) 
			this.size.height = 1;
		else if (Size.height + this.position.y > this.screenSize.height) 
			this.size.height = this.screenSize.height - this.position.y;
		else
			this.size.height = Size.height;
	}

	move(Position) {
		if (Position.x < 0)
			this.position.x = 0;
		else if (Position.x + this.size.width > this.screenSize.width)
			this.position.x = this.screenSize.width - this.size.width;
		else
			this.position.x = Position.x;

		if (Position.y < 0)
			this.position.y = 0;
		else if (Position.y + this.size.height > this.screenSize.height)
			this.position.y = this.screenSize.height - this.size.height;
		else
			this.position.y = Position.y;
	}
}

export function changeWindow(programWindow) {
	programWindow.resize(new Size(400, 300));
	programWindow.move(new Position(100, 150));

	return programWindow;
}
