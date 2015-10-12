
import * as React from 'react';
import * as mui from 'material-ui';
import {Pie} from 'react-chartjs';

const Colors = mui.Styles.Colors;

class SubChart extends React.Component {
	static propTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired
	};

	render() {
		const {width, height} = this.props;
		const data = [
			{
				value: 100,
				color: Colors.indigo700,
				highlight: Colors.indigo300,
				label: 'Red'
			},
			{
				value: 50,
				color: Colors.blue700,
				highlight: Colors.blue300,
				label: 'Green'
			},
			{
				value: 10,
				color: Colors.lightBlue700,
				highlight: Colors.lightBlue300,
				label: 'Yellow'
			}
		];
		const options = {
			segmentShowStroke: true,
			segmentStrokeColor: '#fff',
			segmentStrokeWidth: 2,
			percentageInnerCutout: 0,
			animationSteps: 100,
			animationEasing: 'easeOutBounce',
			animateRotate: true,
			animateScale: false
		};
		return (
			<Pie data={data} options={options} width={width} height={height}/>
		);
	}
}

export default SubChart;
