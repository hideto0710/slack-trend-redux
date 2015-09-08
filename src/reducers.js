
import { SET_CHANNELS, SELECT_CHANNEL, setChannels, selectChannel } from './actions/channels';
import { Channel } from './classes/Channel';

export function channels(state = [], action = null) {
	switch (action.type) {
		case SET_CHANNELS:
			return action.channels;
		default:
			return state;
	}
}

export function channel(state = new Channel(), action = null) {
	switch (action.type) {
		case SELECT_CHANNEL:
		 	return action.channel;
		default:
			return state;
	}
}
