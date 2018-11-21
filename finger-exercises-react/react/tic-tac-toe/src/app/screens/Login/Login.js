import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { customInput, customSelect } from './index';

class Login extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="firstname" component={customInput} type="text" label="Nombre" validate="" />
        <Field name="surname" component={customInput} type="text" label="Apellido" validate="" />
        <Field name="username" component={customInput} type="text" label="Nombre de usuario" validate="" />
        <Field name="password" component={customInput} type="text" label="Contraseña" validate="" />
        <Field
          name="confirmPassword"
          component={customInput}
          type="text"
          label="Confirme contraseña"
          validate=""
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

Login = reduxForm({
  form: 'login'
})(Login);

export default Login;
