import { isEmailValid, isConfirmValid, isPasswordValid, isBlank } from '../src';

describe('validators', () => {
  it('isEmailValid should return true if email is valid', () => {
    expect(isEmailValid('lala@lala.com')).toBeTruthy();
  });

  it('isEmailValid should return false if email is invalid', () => {
    expect(isEmailValid('lalalala.com')).toBeFalsy();
  });

  it('isConfirmValid should return true if both params have the same value', () => {
    expect(isConfirmValid('lala@lala.com', 'lala@lala.com')).toBeTruthy();
  });

  it('isConfirmValid should return false if params have different values', () => {
    expect(isConfirmValid('lala@lala.com', 'lalalala.com')).toBeFalsy();
  });

  it('isPasswordValid should return true if password is valid', () => {
    expect(isPasswordValid('1abcdE')).toBeTruthy();
  });

  it('isPasswordValid should return true if password is invalid', () => {
    expect(isPasswordValid('1abcd')).toBeFalsy();
  });

  it('isBlank should return true if the value blank ', () => {
    expect(isBlank('')).toBeTruthy();
  });

  it('isBlank should return false if the value is not blank ', () => {
    expect(isBlank('lala')).toBeFalsy();
  });
});
