
import * as React from 'react';
import {List, ListItem, Styles} from 'material-ui';

const Colors = Styles.Colors;

export const RIGHT = 'right';
export const LEFT = 'left';

export class Sidebar extends React.Component {

	static propTypes = {
		position: React.PropTypes.oneOf([RIGHT, LEFT]).isRequired,
		style: React.PropTypes.object
	};

	render() {
		const {position, style, children} = this.props;
		const styles = {
			sidebar: {
				position: 'fixed',
				zIndex: 10000,
				overflow: 'scroll',
				opacity: 1,
				top: 0,
				bottom: 0,
				maxWidth: '50%',
				wordWrap: 'break-word',
				boxSizing: 'border-box',
				boxShadow: '2px 0 7px 0 rgba(0, 0, 0, 0.5)',
				backgroundColor: Colors.blueGrey800
			},
			sidebarDOM: {
				position: 'relative',
				overflowY: 'scroll',
				width: '100%',
				height: '100%'
			}
		};
		const shadow = (position === RIGHT) ? -2 : 2;
		const barStyle = {
			[position]: 0,
			boxShadow: `${shadow}px 0 7px 0 rgba(0, 0, 0, 0.5)`
		};
		const styleObj = Object.assign({}, styles.sidebar, barStyle, style);
		return (
			<div style={styleObj}>
				<div style={styles.sidebarDOM}>
					{children}
				</div>
			</div>
		);
	}
}
