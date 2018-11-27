import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = props => (
  <div>
    <label htmlFor={props.name}> {props.label} </label>
    {props.meta.error && props.meta.touched && <div>{props.meta.error}</div>}
    <input {...props.input} type={props.type} />
  </div>
);

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CustomInput;
