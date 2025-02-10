import { WORK_SPACE } from '../constants/workSpace.js';

const parseContactType = (contactType) => {
  if (!(typeof contactType === 'string')) return;
  const isContactType = (contactType) =>
    Object.values(WORK_SPACE).includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  if ([true, false].includes(isFavourite)) return JSON.parse(isFavourite);
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
