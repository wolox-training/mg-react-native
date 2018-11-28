import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Game from '../../screens/Game';
import Login from '../../screens/Login';
import { loggedSucces, loggedFailed } from '../../../redux/Login/actions';
import { getToken } from '../../../services/AuthService';

class Routes extends Component {
  componentDidMount() {
    if (getToken()) {
      this.props.loggedSucces();
    } else {
      this.props.loggedFailed();
    }
  }

  render() {
    if (this.props.loading) {
      return null;
    }
    return (
      <Router>
        <div>
          <Route path="/game" exact component={Game} />
          <Route path="/login" exact component={Login} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading
});

const mapDispatchToProps = dispatch => ({
  loggedSucces: () => dispatch(loggedSucces()),
  loggedFailed: () => dispatch(loggedFailed())
});

Routes.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedSucces: PropTypes.func.isRequired,
  loggedFailed: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
