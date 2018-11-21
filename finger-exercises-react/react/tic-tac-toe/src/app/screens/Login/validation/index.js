export const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Nombre es requerido';
  }
  if (!values.surname) {
    errors.surname = 'Apellido es requerido';
  }
  if (!values.username) {
    errors.username = 'Nombre de usuario es requerido';
  } else if (values.username.length < 4) {
    errors.username = 'El minimo de caracteres en el nombre de usuario es 4';
  } else if (values.username.length > 10) {
    errors.username = 'El maximo de caracteres en el nombre de usuario es 10';
  }
  return errors;
};
