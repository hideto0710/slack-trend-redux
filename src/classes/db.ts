/// <reference path="../../typings/pouchDB/pouch" />
/**
 * Created by hideto0710 on 9/6/15.
 */

import * as PouchDB from 'pouchdb'

class DB {
	punch: PouchDB;

	constructor(name: string) {
		this.punch = new PouchDB(name);
	}

	getInfo(callback: (err: PouchError, res: PouchInfoResponse) => void): void {
		return this.punch.info(callback);
	}

	put(callback: (err: PouchError, res: PouchUpdateResponse) => void): void {
		var doc = {
			"_id": "mittens",
			"name": "Mittens",
			"occupation": "kitten",
			"age": 3,
			"hobbies": [
				"playing with balls of yarn",
				"chasing laser pointers",
				"lookin' hella cute"
			]
		};
		this.punch.put(doc, callback);
	}

	get(callback: (err: PouchError, res: PouchGetResponse) => void, key: string = "mittens"): void  {
		this.punch.get(key, callback);
	}
}

export default DB
