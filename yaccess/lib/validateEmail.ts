const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@ynov\.con$/;
  return emailRegex.test(email);
};

export { validateEmail };