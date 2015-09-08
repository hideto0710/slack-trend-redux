
class SerializationHelper {

	static toInstance<T>(obj: T, jsonObj: {}) : T {
		if (typeof obj["fromJSON"] === "function") {
			obj["fromJSON"](jsonObj);
		} else {
			for (var propName in jsonObj) {
				obj[propName] = jsonObj[propName]
			}
		}
		return obj;
	}
}

export default SerializationHelper;
