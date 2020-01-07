export const isEmailValid = (value: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const isConfirmValid = (
  value: string,
  confirmValue: string
): boolean => {
  return value === confirmValue;
};

export const isPasswordValid = (value: string): boolean => {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value);
};

export const isBlank = (value: string): boolean => {
  return !value || /^\s*$/.test(value);
};
