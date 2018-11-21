import React, { Component } from 'react';

import Login from './Login';

class LoginContainer extends Component {
  submit = values => {
    windows.alert(JSON.stringify(values, null, 1));
  };

  render() {
    return <Login onSubmit={this.submit} />;
  }
}

export default LoginContainer;
