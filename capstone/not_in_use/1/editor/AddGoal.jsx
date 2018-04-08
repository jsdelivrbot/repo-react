
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/';

import * as statusUtilities from '../../utilities/statusUtilities';

class AddGoal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { description: '', comments: '', status: 0 };
		// console.log('--- AddGoal ', props);
		this.onInputChange = this.onInputChange.bind(this);
		this.onSelectChange = this.onSelectChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		const { target } = event;
		const { name, value } = target;
		// console.log('onInputChange, name ', name, ' value ', value, ' event ', event.target);
		// console.log('type ', event.target.type);
		this.setState({ [name]: value });
	}

	onSelectChange(event) {
		const { target } = event;
		const { value } = target;
		// console.log('onSelectChange, name ', name, ' value ', value, ' event ', event.target);
		this.setState({ status: value * 1 });
	}

	onFormSubmit(event) {
		// console.log('--- AddGoal::onFormSubmit, this.state.description ', this.state.description);
		event.preventDefault();
		this.props.actions.addUserGoal(this.state);
		this.props.actions.commandInitialize();
	}

	/* eslint-disable class-methods-use-this */
	renderOptions() {
		return statusUtilities.getStatusOptions().map(opt => (
			<option
				key={opt.id}
				value={opt.id}
			>
				{opt.title}
			</option>
		));
	}

	render() {
		// console.log('AddGoal::render() props ', this.props);
		// const showProperties = this.state.description !== '';
		const showProperties = true;
		return (
			<div className="form-group">
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input
							required
							placeholder="Enter your new Goal"
							name="description"
							value={this.state.description}
							onChange={this.onInputChange}
						/>
					</div>
					{showProperties &&
						<div>
							<textarea
								rows="3"
								placeholder="Comments"
								name="comments"
								value={this.state.comments}
								onChange={this.onInputChange}
							/>
						</div>
					}
					{showProperties &&
						<div>
							<select
								required
								name="status"
								value={this.state.status}
								onChange={this.onSelectChange}
								className="form-select"
							>
								{this.renderOptions()}
							</select>
						</div>
					}
					<span>
						<button type="submit" className="submit-button">Add Goal</button>
					</span>
				</form>
			</div>
		);
	}
}

AddGoal.propTypes = {
	actions: PropTypes.shape({
		addUserGoal: PropTypes.func.isRequired,
		commandInitialize: PropTypes.func.isRequired,
	}).isRequired,
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(AddGoal);