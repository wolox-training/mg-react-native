import React from 'react';
import PropTypes from 'prop-types';

export const customInput = props => (
  <div>
    <label htmlFor={props.name}> {props.label} </label>
    {props.meta.error && props.meta.touched && <div>{props.meta.error}</div>}
    <input name={props.name} type={props.type} />
  </div>
);

// export const customSelect = props => (
//   <div>
//     <label> {props.label}</label>
//     <select {...props.input}>
//       <option />
//       <option value="tabs">Tabs</option>
//       <option value="spaces">Spaces</option>
//     </select>
//   </div>
// );

// customSelect.propTypes = {
//   label: PropTypes.string.isRequired,
//   input: PropTypes.arrayOf(PropTypes.string).isRequired
// };

customInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
