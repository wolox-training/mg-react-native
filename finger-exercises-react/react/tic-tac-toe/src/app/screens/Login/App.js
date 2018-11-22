import React, { Component, Fragment } from 'react';

import Login from './Login';

class LoginContainer extends Component {
  submit = values => {
    // eslint-disable-next-line no-alert
    window.alert(JSON.stringify(values, null, 4));
  };

  render() {
    return (
      <Fragment>
        <Login onSubmit={this.submit} />
      </Fragment>
    );
  }
}

export default LoginContainer;
