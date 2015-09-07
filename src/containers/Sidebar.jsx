
import * as React from 'react';
import { List, ListItem, Styles } from 'material-ui';

let Colors = Styles.Colors;

class Sidebar extends React.Component {

	static propTypes = {
		style: React.PropTypes.object
	};

	style = {
		sidebar: {
			position: 'fixed',
			zIndex: 10000,
			overflow: 'hidden',
			opacity: 1,
			left: 0,
			top: 0,
			bottom: 0,
			maxHeight: '100%',
			maxWidth: '30%',
			wordWrap: 'break-word',
			boxSizing: 'border-box',
			boxShadow: '2px 0 7px 0 rgba(0, 0, 0, 0.5)'
		},
		sidebarDOM: {
			position: 'relative',
			overflowY: 'hidden',
			width: '100%',
			height: '100%',
			backgroundColor: Colors.blueGrey800
		},
		list: {
			backgroundColor: Colors.blueGrey800
		},
		item: {
			color: 'white'
		}
	};

	render() {
		const { style } = this.props;
		let styleObj = Object.assign({}, this.style.sidebar, style);
		return(
			<div style={styleObj}>
				<div style={this.style.sidebarDOM}>
					<List style={this.style.list}>
						<ListItem primaryText="Inbox" style={this.style.item} />
						<ListItem primaryText="Starred" style={this.style.item} />
					</List>
				</div>
			</div>
		)
	}
}

export default Sidebar;
