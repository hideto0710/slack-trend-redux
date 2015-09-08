/// <reference path="../../typings/superagent/superagent" />
/// <reference path="../../typings/lodash/lodash" />

import * as request from 'superagent';
import * as _ from 'lodash';

export module MSlackAPIClient {

	export let init = (token: string): SlackAPIClient => {
		return new SlackAPIClient(token);
	};

	export let get = (url, query) => {
		return request.get(url).query(query);
	};
}

export class SlackAPIClient {

	token: string;

	private url = 'https://slack.com/api/';

	constructor(token) {
		this.token = token;
	}

	listChannels(excludeArchived: number = 0) {
		let query = _.extend({ exclude_archived: excludeArchived.toString() }, { token: this.token });
		return MSlackAPIClient.get(this.url + 'channels.list', query);
	}
}
