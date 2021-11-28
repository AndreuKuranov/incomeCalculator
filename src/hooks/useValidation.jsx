/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';

const useValidation = (value, validations, isDirty, isFocus) => {
  const [NumberError, setNumberError] = useState(validations.NumberError);

  useEffect(() => {
    value >= 0 ? setNumberError(false) : setNumberError(true);
  }, [value]);

  const NumError = () => ((isFocus || isDirty) && NumberError ? <div style={{ color: 'red' }}>Неверное значение</div> : '');

  return {
    NumberError,
    NumError,
  };
};

export default useValidation;
