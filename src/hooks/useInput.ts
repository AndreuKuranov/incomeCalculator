import React, { useState, useEffect } from 'react';
import useValidation from './useValidation';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ValidationsType } from '../types/types';

const useInput = (
  initialValue: number, 
  validations: ValidationsType, 
  className: string, 
  resetLabel: boolean, 
  setResetLabel: any,
) => {
  const [isDirty, setDirty] = useState<boolean>(false);
  const [isFocus, setFocus] = useState<boolean>(false);
  const [classLabelFocus, setClassLabelFocus] = useState<string>('');
  const valid = useValidation(initialValue, validations, isDirty, isFocus);
  const { newRoute, currentRoute } = useTypedSelector((state) => state.route);

  const onFocus = () => {
    setClassLabelFocus(className);
    setFocus(true);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty(true);
    setFocus(false);
    if (!e.target.value) {
      setClassLabelFocus('');
    }
  };

  useEffect(() => {
    if (initialValue) {
      setClassLabelFocus(className);
    }
  }, [initialValue]);

  useEffect(() => {
    if (resetLabel) {
      setClassLabelFocus('');
      setResetLabel(false);
    }
  }, [resetLabel]);

  useEffect(() => {
    if (!initialValue || currentRoute === newRoute) {
      setClassLabelFocus('');
    }
  }, [currentRoute]);

  return {
    onBlur,
    onFocus,
    isDirty,
    classLabelFocus,
    ...valid,
  };
};

export default useInput;
