
import * as React from 'react';
import * as request from 'superagent';

class ApiResponse extends React.Component {
	static propTypes = {
		url: React.PropTypes.string.isRequired,
		token: React.PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);
		this.state = { ready: false };
	}

	componentDidMount() {
		const { url, token } = this.props;
		request.get(url).query({ token: token })
			.end((err, res) => {
				if (err) throw err;
				window.console.log(res);
				this.setState({
					"ready": true,
					"message": res.body.channels[0].name
				});
			});
	}

	render() {
		if (this.state.ready) {
			return (
				<div>
					<h1>{this.state.message}</h1>
					<button onClick={this._handleBtnClick}>NOT READY</button>
				</div>
			);
		} else {
			return <div />;
		}
	}

	_handleBtnClick = (e) => {
		window.console.log(e);
		this.setState({ ready: false });
	}
}

export default ApiResponse
