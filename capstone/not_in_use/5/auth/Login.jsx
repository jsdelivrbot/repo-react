//

import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import { withStyles, Button } from 'material-ui';

import Icon from '../../../toolbox/Icon';

import Outer from '../Outer';
import Inner from '../Inner';
import LoginForm from './LoginForm';

import { Styles, Title, Nav, Separator } from './RegisterStyles';

class Login extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Outer>
				<Inner>
					<Title>Sign In</Title>

					<Nav>
						<p>
							{"Don't have an account?"}
							<a href="#join">Sign up here</a>
						</p>
					</Nav>

					<section>
						<Button
							className={classNames(classes.button, classes.facebookButton)}
							variant="raised"
							onClick={this.handleSubmit}
						>
							Log in with Facebook
							<Icon name="facebook" css={classNames(classes.svg, classes.facebookSvg)} />
						</Button>

						<Button
							className={classNames(classes.button, classes.googleButton)}
							variant="raised"
							onClick={this.handleSubmit}
						>
							Log in with Google
							<Icon name="google" css={classNames(classes.svg, classes.googleSvg)} />
						</Button>
					</section>

					<Separator>
						<span>or</span>
					</Separator>

					<LoginForm />
				</Inner>
			</Outer>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(Styles)(Login);
