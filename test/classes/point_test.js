/**
 * Created by hinamura on 9/6/15.
 */

let assert = require("power-assert");
let Point = require("../../src/classes/point");

let point = new Point.default(1,70);

describe('Point', () => {
	describe('#constructor()', () => {
		it('should return instance variables', () => {
			assert.equal(point.x, 1);
			assert.equal(point.y, 70);
		});
	});
});
