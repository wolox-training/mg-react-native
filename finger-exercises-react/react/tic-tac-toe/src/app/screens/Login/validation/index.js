export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 8 ? 'Contraseña muy corta' : undefined);
