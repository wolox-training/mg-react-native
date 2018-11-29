import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { loggedSucces } from '../../../redux/Login/actions';
import { setToken, login } from '../../../services/AuthService';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = values => {
    login(values).then(response => {
      if (response.ok) {
        setToken(response);
        this.props.loggedSucces();
      }
    });
  };

  render() {
    if (this.props.log) {
      return <Redirect to="/game" />;
    }
    return <Login onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => ({
  log: state.login.logged
});

const mapDispatchToProps = dispatch => ({
  loggedSucces: () => dispatch(loggedSucces())
});

LoginContainer.propTypes = {
  log: PropTypes.bool.isRequired,
  loggedSucces: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
