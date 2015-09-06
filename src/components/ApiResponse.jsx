
import * as React from 'react'
import * as request from 'superagent'

class ApiResponse extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ready: false };
	}

	static propTypes: {
		url: React.PropTypes.string.isRequired,
		token: React.PropTypes.string.isRequired
	};

	componentDidMount() {
		const { url, token } = this.props;
		request
			.get(url + '&token=' + token)
			.end(function (err, res) {
				if (err) throw err;
				window.console.log(res);
				this.setState({
					"ready": true,
					"message": res.body.channels[0].name
				});
			}.bind(this));
	}

	render() {
		if (this.state.ready) {
			return <h1>{this.state.message}</h1>;
		} else {
			return <div />;
		}
	}
}

export default ApiResponse
