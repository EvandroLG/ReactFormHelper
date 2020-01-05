import {useState, useEffect, FormEvent, ChangeEvent} from 'react';

interface Dict {
  [key: string]: string;
}

interface HookOutput extends Array<any> {}

export default (
  validation: (values: Dict) => Dict,
  submit: (values: Dict) => void,
): HookOutput => {
  const [values, setValues] = useState<Dict>({});
  const [errors, setErrors] = useState<Dict>({});

  useEffect(() => {
    setErrors(validation(values));
  }, [validation, values]);

  const getInputValue = (value: string): string => values[value] || '';

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setErrors(validation(values));

    if (!Object.keys(errors).length) {
      submit(values);
    }
  };

  return [getInputValue, handleChange, handleSubmit, errors, values];
};
