import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { required, minLength } from './validation';
import CustomInput from './CustomInput';

class Login extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component={CustomInput}
          type="text"
          label="Nombre de usuario"
          validate={[required]}
        />
        <Field
          name="password"
          component={CustomInput}
          type="password"
          label="Contraseña"
          validate={[required, minLength]}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(Login);
