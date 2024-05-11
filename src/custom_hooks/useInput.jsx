import { useState } from 'react';
import PropTypes from 'prop-types';

export const useInput = (defaultValue = '', isRichFormat = false) => {
  const [value, setValue] = useState(defaultValue);

  function onValueChangeHandler(event) {
    if (!isRichFormat) {
      setValue(event.target.value);
    } else {
      setValue(event.target.innerHTML);
    }
  }

  return [value, onValueChangeHandler];
};

useInput.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  isRichFormat: PropTypes.bool,
};
