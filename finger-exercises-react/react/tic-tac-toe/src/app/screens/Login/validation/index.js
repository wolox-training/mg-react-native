export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 8 ? 'Contraseña muy corta' : undefined);

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const isEmail = value => (validateEmail(value) ? undefined : 'Email no valido');
