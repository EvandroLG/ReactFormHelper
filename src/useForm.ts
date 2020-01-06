import React, { useState, useEffect } from 'react';

interface Dict {
  [key: string]: string;
}

export default (
  validation: (values: Dict) => Dict,
  submit: (values: Dict) => void
): Array<any> => {
  const [values, setValues] = useState<Dict>({});
  const [errors, setErrors] = useState<Dict>({});

  useEffect(() => {
    setErrors(validation(values));
  }, [validation, values]);

  const getInputValue = (value: string): string => values[value] || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setErrors(validation(values));

    if (!Object.keys(errors).length) {
      submit(values);
    }
  };

  return [getInputValue, handleChange, handleSubmit, errors, values];
};
