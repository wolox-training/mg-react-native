import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import api from '../../../config/api';
import { login } from '../../../services/AuthService';
import { loggedSucces, loggedFailed } from '../../../redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = values => {
    login(values).then(response => {
      if (response.ok) {
        api.setHeader('Authorization', response.data.token);
        localStorage.setItem('Token', response.data.token);
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
  log: state.logged.log
});

const mapDispatchToProps = dispatch => ({
  loggedSucces: () => dispatch(loggedSucces()),
  loggedFailed: () => dispatch(loggedFailed())
});

LoginContainer.propTypes = {
  log: PropTypes.bool.isRequired,
  loggedSucces: PropTypes.func.isRequired,
  loggedFailed: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
