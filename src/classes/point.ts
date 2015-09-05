/**
 * Created by hideto0710 on 9/5/15.
 */

class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	getDist() {
		return Math.sqrt(this.x * this.x +
			this.y * this.y);
	}
	test() {
		this.getDist();
	}
}

export default Point;
