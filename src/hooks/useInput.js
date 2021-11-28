import { useState, useEffect } from 'react';
import useValidation from './useValidation';

const useInput = (initialValue, validations, className, resetLabel, setResetLabel) => {
  const [isDirty, setDirty] = useState(false);
  const [isFocus, setFocus] = useState(false);
  const [classLabelFocus, setClassLabelFocus] = useState('');
  const valid = useValidation(initialValue, validations, isDirty, isFocus);

  const onFocus = () => {
    setClassLabelFocus(className);
    setFocus(true);
  };

  const onBlur = (e) => {
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

  return {
    onBlur,
    onFocus,
    isDirty,
    classLabelFocus,
    ...valid,
  };
};

export default useInput;
