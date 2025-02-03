import createHttpError from 'http-errors';

export const missingValue = (value) => {
  if (value === null) {
    throw createHttpError[404]('Contact not found:(');
  }
};
