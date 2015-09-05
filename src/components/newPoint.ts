/**
 * Created by hideto0710 on 9/5/15.
 */

class NewPoint {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x * 2;
		this.y = y * 2;
	}
	getDist() {
		return Math.sqrt(this.x * this.x +
			this.y * this.y);
	}
	test() {
		this.getDist();
	}
}

export default NewPoint;
