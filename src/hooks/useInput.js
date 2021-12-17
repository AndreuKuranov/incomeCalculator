import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useValidation from './useValidation';

const useInput = (initialValue, validations, className, resetLabel, setResetLabel) => {
  const [isDirty, setDirty] = useState(false);
  const [isFocus, setFocus] = useState(false);
  const [classLabelFocus, setClassLabelFocus] = useState('');
  const valid = useValidation(initialValue, validations, isDirty, isFocus);
  const currentRoute = useSelector((state) => state.route.currentRoute);
  const newRoute = useSelector((state) => state.route.newRoute);

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
