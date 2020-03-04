import React, { useEffect, useState } from 'react';

export interface IDict {
  [key: string]: string;
}

export default (
  validation: (values: IDict) => any,
  submit: (values: IDict) => void
): any[] => {
  const [values, setValues] = useState<IDict>({});
  const [errors, setErrors] = useState<IDict>({});

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
