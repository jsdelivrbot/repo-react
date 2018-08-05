//

import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from 'react-spinkit';

import * as actions from '../actions';

// import { searchCharacters } from '../actions';

export class CharacterSearch extends React.Component {
	onChange = value => {
		console.log('CharacterSearch::onChange; ', value);
	};

	handleSearch = () => {
		const input = this.input.value;
		console.log('handleSearch, input ', input);
		this.props.actions.searchCharacters(input);
	};

	renderResults() {
		if (this.props.loading) {
			return <Spinner spinnerName="circle" noFadeIn />;
		}

		if (this.props.error) {
			return <strong>{this.props.error}</strong>;
		}

		const characters = this.props.characters.map((character, index) => (
			<li key={index}>{character}</li>
		));

		return <ul className="character-search-results">{characters}</ul>;
	}

	render() {
		console.log('CharacterSearch::render, props ', this.props);
		return (
			<div className="character-search">
				{/* When this form is submitted you should submit the
                    searchCharacters action */}
				<form onSubmit={e => e.preventDefault()}>
					<input
						type="search"
						ref={input => (this.input = input)}
						onChange={e => this.onChange(e.target.value)}
					/>
					<button onClick={this.handleSearch}>Search</button>
				</form>
				<ul className="character-search-results">{this.renderResults()}</ul>
			</div>
		);
	}
}

CharacterSearch.propTypes = {
	characters: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	actions: PropTypes.shape({
		searchCharacters: PropTypes.func.isRequired
	}).isRequired
};

const mapStateToProps = state => ({
	characters: state.characters,
	loading: state.loading,
	error: state.error
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CharacterSearch);