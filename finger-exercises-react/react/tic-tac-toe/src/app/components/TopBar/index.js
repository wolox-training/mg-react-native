import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { loggedFailed } from '../../../redux/Login/actions';
import { removeToken } from '../../../services/AuthService';

import styles from './styles.scss';

class TopBar extends Component {
  handleClick = () => {
    removeToken();
    this.props.loggedFailed();
  };

  render() {
    return (
      <Fragment>
        <div className={styles.topBar}>
          <Link to="/prevgames" activeClassName="active" className={styles.link}>
            Partidos previos
          </Link>
          <Link to="/game" activeClassName="active" className={styles.link}>
            Juego
          </Link>
          <button onClick={this.handleClick}>Cerrar Sesion</button>
        </div>
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  loggedFailed: () => dispatch(loggedFailed())
});

TopBar.propTypes = {
  loggedFailed: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TopBar)
);
