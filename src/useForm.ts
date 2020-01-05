import {useState, useEffect} from 'react';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
};

interface Dict {
  [key: string]: string;
}

export default (
  validation: (values: Dict) => Dict,
  submit: (values: Dict) => void,
) => {
  const [values, setValues] = useState<Dict>({});
  const [errors, setErrors] = useState<Dict>({});

  useEffect(() => {
    setErrors(validation(values));
  }, [validation, values]);

  const getInputValue = (value: string) => values[value] || '';

  const handleChange = (e: HTMLInputEvent): void => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: Event): void => {
    e.preventDefault();

    setErrors(validation(values));

    if (!Object.keys(errors).length) {
      submit(values);
    }
  };

  return [getInputValue, handleChange, handleSubmit, errors, values];
};
