
import * as React from 'react';
import { connect } from 'react-redux';

import * as mui from 'material-ui';

import { setChannels, selectChannel } from '../actions/channels';

import Sidebar from './Sidebar';
import Trend from './Trend';

import SerializationHelper from '../classes/SerializationHelper';
import { Channels, Channel } from '../classes/Channel';
import { MSlackAPIClient } from '../classes/SlackAPIClient';

let PropTypes = React.PropTypes;
let ThemeManager = new mui.Styles.ThemeManager();
let client = MSlackAPIClient.init('<token>');

class App extends React.Component {

	// for MaterialUI
	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}
	static childContextTypes = {
		muiTheme: React.PropTypes.object
	};

	static propTypes = {
		channels: PropTypes.arrayOf(Channel),
		channel: PropTypes.instanceOf(Channel)
	};

	style = {
		sidebar: {
			width: '20%'
		},
		main: {
			height: '100%',
			marginLeft: '20%',
			padding: '24px'
		}
	};

	componentWillMount() {
		const { dispatch } = this.props;
		client.listChannels().end((err, res) => {
			if (err) throw err;
			let cs: Channels = SerializationHelper.toInstance(new Channels(), res.body);
			dispatch(setChannels(cs.channels));
			dispatch(selectChannel(cs.channels[0]));
		});
	}

	render() {
		const { dispatch, visibleTodos, visibilityFilter, channels, channel } = this.props;
		return (
			<div>
				<Sidebar style={this.style.sidebar}
						 channels={channels}
						 onChannelClick={index => dispatch(selectChannel(channels[index]))} />

				<div style={this.style.main}>
					<Trend channel={channel}/>
				</div>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		channel: state.channel,
		channels: state.channels.filter(channel => channel.isMember)
	};
})(App);
