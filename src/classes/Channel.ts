/// <reference path="../../typings/lodash/lodash" />

import * as _ from 'lodash';
import SerializationHelper from './SerializationHelper';

export interface IChannelsSerialized {
	ok: boolean;
	channels: {}[];
}

export class Channels {
	ok: boolean;
	channels: Channel[];

	constructor() {

	}

	fromJSON(obj: IChannelsSerialized) {
		this.ok = obj.ok;
		this.channels = [];
		_.each(obj.channels, (c) => {
			this.channels.push(SerializationHelper.toInstance(new Channel(), c))
		});
	}
}

export interface IChannelSerialized {
	id: string;
	name: string;
	is_member: boolean ;
	num_members: number;
	members: string[];
}

export class Channel {

	id: string;
	name: string;
	isMember: boolean ;
	numMembers: number;
	members: string[];

	constructor() {

	}

	fromJSON(obj: IChannelSerialized) {
		this.id = obj.id;
		this.name = obj.name;
		this.isMember = obj.is_member;
		this.numMembers = obj.num_members;
		this.members = obj.members;
	}

	getId(): string {
		return this.id;
	}
}
