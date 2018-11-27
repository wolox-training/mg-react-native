import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import App from '../App';
import Login from '../../screens/Login';
import { loggedSucces, loggedFailed } from '../../../redux/Login/actions';

class Routs extends Component {
  componentDidMount() {
    if (localStorage.getItem('Token')) {
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
          <Route path="/game" exact component={App} />
          <Route path="/login" exact component={Login} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.logged.loading
});

const mapDispatchToProps = dispatch => ({
  loggedSucces: () => dispatch(loggedSucces()),
  loggedFailed: () => dispatch(loggedFailed())
});

Routs.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedSucces: PropTypes.func.isRequired,
  loggedFailed: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routs);
