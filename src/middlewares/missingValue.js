import createHttpError from 'http-errors';

export const missingValue = (value, code, message) => {
  if (value === null) {
    throw createHttpError(code, message);
  }
};
