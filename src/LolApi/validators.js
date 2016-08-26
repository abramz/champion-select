import validator from 'validator';
import { riot } from './constants';

function getValidOpts(options, validKeys) {
  if (!Array.isArray(options)) {
    throw new Error(`Error: options argument provided is not valid, "${options}". Expected an array.`);
  }

  if (!Array.isArray(validKeys)) {
    throw new Error(`Error: validKeys argument provided is not valid, "${validKeys}". Expected an array.`);
  }

  const validOpts = [];
  options.forEach((key) => {
    if (validKeys.indexOf(key) > -1) {
      validOpts.push(key);
    }
  });

  return validOpts.join(',');
}

export function getValidChampOpts(options) {
  return getValidOpts(options, riot.champOpts);
}

export function getValidItemOpts(options) {
  return getValidOpts(options, riot.itemOpts);
}

export function getValidItemListOpts(options) {
  return getValidOpts(options, riot.itemListOpts);
}

export function checkId(id) {
  if (!id || typeof id !== 'string' || !validator.isNumeric(id)) {
    throw new Error(`Error: id provided is not valid, "${id}". Expected a numeric string.`);
  }

  return true;
}

export function checkLocale(locale) {
  if (!locale) {
    throw new Error('Error: No locale was provided.');
  } else if (typeof locale !== 'string' || !validator.matches(locale, /^[a-z][a-z]_[A-Z][A-Z]$/)) {
    throw new Error(`Error: locale is invalid, "${locale}. Expected a string that matches the pattern "/^[a-z][a-z]_[A-Z][A-Z]$/"`);
  }

  return true;
}

export function checkVersion(version) {
  if (!version) {
    throw new Error('Error: No version was provided.');
  } else if (typeof version !== 'string' || !validator.matches(version, /^\d+\.\d+\.\d+$/)) {
    throw new Error(`Error: version is invalid, "${version}. Expected a string that matches the pattern "/^\d+\.\d+\.\d+$/"`);
  }

  return true;
}
