# ReactFormHelper
Simple way to build forms in React.
[![Build Status](https://travis-ci.org/EvandroLG/ReactFormHelper.svg?branch=master)](https://travis-ci.org/EvandroLG/ReactFormHelper)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

## Installation
To install ReactFormHelper, execute:

```sh
  $ npm install @evandrolg/react-form-helper
```

## Features
- Powerful and flexible hook to validate forms
- Helper validation functions such as email and password

## Docs
- [useForm](https://github.com/EvandroLG/ReactFormHelper/wiki/useForm)
- [Validators](https://github.com/EvandroLG/ReactFormHelper/wiki/Validators)

## Quickstart
```js
import React from 'react';
import PropTypes from 'prop-types';
import {
  useForm,
  isEmailValid,
  isPasswordValid,
} from '@evandrolg/react-form-helper';

import { FormGroup, Label, SubmitButton, Input, FieldError } from './Form';

const validation = ({ email, username, password }) => {
  return {
    ...(!isEmailValid(email) && { email: 'E-mail is not valid' }),
    ...(!username && { username: 'Username is required' }),
    ...(!isPasswordValid(password) && { password: 'Password is not valid' }),
  };
};

const submit = (data) => {
  console.log(data);
};

const Signup = () => {
  const [getInputValue, handleChange, handleSubmit, isValid, errors] = useForm(
    validation,
    submit,
  );

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">*E-mail</Label>
        <Input
          type="text"
          id="email"
          value={getInputValue('email')}
          onChange={handleChange}
        />
        {errors.email && <FieldError>{errors.email}</FieldError>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="username">*Username</Label>
        <Input
          type="text"
          id="username"
          value={getInputValue('username')}
          onChange={handleChange}
        />
        {errors.username && <FieldError>{errors.username}</FieldError>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">*Password</Label>
        <Input
          type="password"
          id="password"
          value={getInputValue('password')}
          onChange={handleChange}
        />
        {errors.password && <FieldError>{errors.password}</FieldError>}
      </FormGroup>

      <SubmitButton value="Sign up" disabled={!isValid} />
    </form>
  );
};
```
