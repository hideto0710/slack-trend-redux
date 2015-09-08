
import * as React from 'react'

import { Channel } from '../classes/Channel';

class Trend extends React.Component {
	static propTypes = {
		channel: React.PropTypes.instanceOf(Channel)
	};

	style = {
		div: {
			position: 'absolute',
			right: '5%',
			textAlign: 'center'
		},
		h1: {
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSize: '50px',
			fontWeight: 100,
			margin: 0,
			padding: 0
		}
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { channel } = this.props;
		return(
			<div style={this.style.div}>
				<h1 style={this.style.h1}>{channel.name}</h1>
			</div>
		);
	}
}

export default Trend
