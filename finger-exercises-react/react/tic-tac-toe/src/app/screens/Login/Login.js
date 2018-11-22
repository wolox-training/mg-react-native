import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { required, minLength } from './validation';

import { customInput } from './index';

class Login extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="firstname" component={customInput} type="text" label="Nombre" validate={[required]} />
        <Field name="surname" component={customInput} type="text" label="Apellido" validate={[required]} />
        <Field name="mail" component={customInput} type="text" label="E-mail" validate={[required]} />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Contraseña"
          validate={[required, minLength]}
        />
        <Field
          name="confirmPassword"
          component={customInput}
          type="password"
          label="Confirme contraseña"
          validate={[required, minLength]}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

const loginForm = reduxForm({
  form: 'login'
})(Login);

// esto no tengo idea que hace (lo de arriba)

export default loginForm;
