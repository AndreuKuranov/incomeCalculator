import React, { useEffect, useState } from 'react';
import { ValidationsType } from '../types/types';

const useValidation = (
  value: number,
  validations: ValidationsType,
  isDirty: boolean,
  isFocus: boolean,
) => {
  const [NumberError, setNumberError] = useState<boolean>(validations.NumberError);

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
