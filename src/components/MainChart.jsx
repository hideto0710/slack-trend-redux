
import * as React from 'react';
import * as mui from 'material-ui';
import {Line} from 'react-chartjs';

const Colors = mui.Styles.Colors;

class MainChart extends React.Component {
	static propTypes = {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired
	};

	render() {
		const styles = {
			h1: {
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSize: '20px',
				fontWeight: 100,
				margin: 0,
				padding: 0
			}
		};
		const {width, height} = this.props;
		const data = {
			labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			datasets: [
				{
					label: 'My Second dataset',
					fillColor: 'rgba(151,187,205,0.2)',
					strokeColor: 'rgba(151,187,205,1)',
					pointColor: 'rgba(151,187,205,1)',
					pointStrokeColor: Colors.white,
					pointHighlightFill: Colors.white,
					pointHighlightStroke: 'rgba(151,187,205,1)',
					data: [28, 48, 40, 19, 86, 27, 90]
				}
			]
		};
		const options = {
			scaleShowGridLines: true,
			scaleGridLineColor: 'rgba(0,0,0,.05)',
			scaleGridLineWidth: 1,
			scaleShowHorizontalLines: true,
			scaleShowVerticalLines: true,
			bezierCurve: true,
			bezierCurveTension: 0.4,
			pointDot: true,
			pointDotRadius: 4,
			pointDotStrokeWidth: 1,
			pointHitDetectionRadius: 20,
			datasetStroke: true,
			datasetStrokeWidth: 2,
			datasetFill: true,
			legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
		};
		return (
			<div>
				<h1 style={styles.h1}>Trend</h1>
				<Line data={data} options={options} width={width} height={height}/>
			</div>
		);
	}
}

export default MainChart;

