
export const SET_CHANNELS = 'SET_CHANNELS';

export function setChannels(channels) {
	return { type: SET_CHANNELS, channels };
}

export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function selectChannel(channel) {
	return { type: SELECT_CHANNEL, channel };
}
