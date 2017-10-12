
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame(event) {
    event.preventDefault();
    this.props.actions.handleNewGame();
  }

  render() {
    return (
      <nav>
        <ul>
          <li><button type="button" onClick={this.handleHelp}>Help</button></li>
          <li><button type="button" onClick={this.handleNewGame}>New Game</button></li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  actions: PropTypes.shape({
    handleNewGame: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(Navigation);