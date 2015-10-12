
import * as React from 'react';
// Redux
import {connect} from 'react-redux';
import {setChannels, selectChannel} from '../actions/channels';
// Class
import SerializationHelper from '../classes/SerializationHelper';
import {Channels, Channel} from '../classes/Channel';
import {SlackAPIClient} from '../classes/SlackAPIClient';
// MaterialUI
import * as mui from 'material-ui';
// Component
import {Sidebar, LEFT} from './Sidebar';
import Trend from './Trend';

const PropTypes = React.PropTypes;
const client = new SlackAPIClient('<Token>');
const ThemeManager = new mui.Styles.ThemeManager();
const {List, ListItem, Styles} = mui;
const Colors = Styles.Colors;

class App extends React.Component {

	// MaterialUI
	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}
	static childContextTypes = {
		muiTheme: React.PropTypes.object
	};

	// React
	static propTypes = {
		channels: PropTypes.arrayOf(Channel),
		channel: PropTypes.instanceOf(Channel)
	};

	componentWillMount() {
		const {dispatch} = this.props;
		client.listChannels().end((err, res) => {
			if (err) {
				throw err;
			}
			const cs = SerializationHelper.toInstance(new Channels(), res.body);
			dispatch(setChannels(cs.channels));
			dispatch(selectChannel(cs.channels.filter(channel => channel.isMember)[0]));
		});
	}

	render() {
		const {dispatch, channels, channel} = this.props;
		const styles = {
			sidebar: {
				width: '20%'
			},
			main: {
				height: '100%',
				marginLeft: '20%',
				padding: '24px'
			},
			list: {
				backgroundColor: Colors.blueGrey800
			},
			item: {
				color: 'white'
			}
		};
		return (
			<div>
				<Sidebar position={LEFT} style={styles.sidebar}>
					<List style={styles.list}>
						{channels.map((channel, index) =>
							<ListItem key={index}
								primaryText={channel.name}
								onClick={() => dispatch(selectChannel(channel))}
								style={styles.item} />
						)}
					</List>
				</Sidebar>
				<div style={styles.main}>
					<Trend channel={channel}/>
				</div>
			</div>
		);
	}
}

export default connect(state => {
	return {
		channel: state.channel,
		channels: state.channels.filter(channel => channel.isMember)
	};
})(App);
