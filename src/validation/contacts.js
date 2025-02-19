import Joi from 'joi';
import { WORK_SPACE } from '../constants/workSpace.js';
import { isValidObjectId } from 'mongoose';

const nameMessage = {
  'string.base': 'Username should be a string', // Кастомізація повідомлення для типу "string"
  'string.min': 'Username should have at least {#limit} characters',
  'string.max': 'Username should have at most {#limit} characters',
  'any.required': 'Username is required',
};
const phoneMessage = {
  'number.base': 'PhoneNumber should be integer', // Кастомізація повідомлення для типу "string"
  'any.required': 'PhoneNumber is required',
};

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages(nameMessage),
  phoneNumber: Joi.number().integer().required().messages(phoneMessage),
  email: Joi.string().email({ minDomainSegments: 2 }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...Object.values(WORK_SPACE))
    .required()
    .messages({
      'any.required': 'ContactType is required',
      'string.base': 'ContactType should be a string',
      'any.only':
        'ContactType must be one of the following values: "work", "home", or "personal"',
    }),
});

export const updateContactSchema = Joi.object({
  userId: Joi.string(),
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.number().integer(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...Object.values(WORK_SPACE)),
});
