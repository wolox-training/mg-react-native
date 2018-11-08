import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function Square(props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.PropTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.bool.isRequired
};

export default Square;
