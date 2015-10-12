
import * as React from 'react';
import * as ReactGridLayout from 'react-grid-layout';
// Class
import {Channel} from '../classes/Channel';
// Component
import MainChart from '../components/MainChart';
import SubChart from '../components/SubChart';

class Trend extends React.Component {
	static propTypes = {
		channel: React.PropTypes.instanceOf(Channel)
	};

	render() {
		const {channel} = this.props;
		const chartSize = {
			main: {
				width: 730,
				height: 210
			},
			sub: {
				width: 360,
				height: 210
			}
		};
		const styles = {
			title: {
				position: 'absolute',
				top: '3%',
				right: '3%',
				textAlign: 'center',
				zIndex: 1000
			},
			h1: {
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSize: '50px',
				fontWeight: 100,
				margin: 0,
				padding: 0
			},
			text: {
				width: '100%',
				height: '30px'
			}
		};
		const layout = [
			{x: 0, y: 0, w: 12, h: 16, i: 1},
			{x: 0, y: 16, w: 6, h: 16, i: 2},
			{x: 6, y: 16, w: 6, h: 16, i: 3}
		];
		return (
			<div>
				<div style={styles.title}>
					<h1 style={styles.h1}>{channel.name}</h1>
				</div>
				<div style={styles.text}>
				</div>
				<ReactGridLayout layout={layout} cols={12} rowHeight={16} isDraggable={false} isResizable={false}>
					<div key={1} style={{backgroundColor: 'beige'}}>
						<MainChart width={chartSize.main.width} height={chartSize.main.height} />
					</div>
					<div key={2} style={{backgroundColor: 'beige'}}>
						<SubChart width={chartSize.sub.width} height={chartSize.sub.height} />
					</div>
					<div key={3} style={{backgroundColor: 'beige'}}>
						<SubChart width={chartSize.sub.width} height={chartSize.sub.height} />
					</div>
				</ReactGridLayout>
			</div>
		);
	}
}

export default Trend;
