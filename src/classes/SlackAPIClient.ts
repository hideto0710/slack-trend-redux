/// <reference path="../../typings/superagent/superagent" />
/// <reference path="../../typings/lodash/lodash" />

import * as request from 'superagent';
import * as _ from 'lodash';

export class  APIClient {
	constructor() {
	}

	get(url: string, query: {}) {
		return request.get(url).query(query);
	}
}

export class SlackAPIClient extends APIClient{

	private url = 'https://slack.com/api/';

	constructor(private token) {
		super()
	}

	public listChannels(excludeArchived: number = 0) {
		let query = _.extend({ exclude_archived: excludeArchived.toString() }, { token: this.token });
		return this.get(this.url + 'channels.list', query);
	}
}
