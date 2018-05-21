//

import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import Form from './Form';

// injectTapEventPlugin();

class TestForm extends Component {
	state = {
		fields: {}
	};

	onChange = updatedValue => {
		this.setState({
			fields: {
				...this.state.fields,
				...updatedValue
			}
		});
	};

	render() {
		return (
			<div>
				<Form onChange={fields => this.onChange(fields)} />
				<p>{JSON.stringify(this.state.fields, null, 2)}</p>
			</div>
		);
	}
}

export default TestForm;