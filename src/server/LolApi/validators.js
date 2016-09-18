import validator from 'validator';
import { riot } from './constants';

function getValidOpts(options, validKeys) {
  // if no options were provided return undefined
  if (!options) {
    return null;
  }

  if (!Array.isArray(options)) {
    throw new Error(`options argument provided is not valid, "${options}". Expected an array.`);
  }

  if (!Array.isArray(validKeys)) {
    throw new Error(`validKeys argument provided is not valid, "${validKeys}". Expected an array.`);
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
    throw new Error(`id provided is not valid, "${id}". Expected a numeric string.`);
  }

  return true;
}

function checkString(key, str, pattern) {
  if (!str) {
    throw new Error(`No ${key} was provided.`);
  } else if (typeof str !== 'string' || !validator.matches(str, pattern)) {
    throw new Error(`${key} is invalid, "${str}". Expected a string that matches the pattern "${pattern}"`);
  }

  return true;
}

export function checkKey(key, possibilities) {
  checkString('key', key, /.*/); // just make sure it is a string
  const foundKeyPair = possibilities.find((keyPair) => keyPair.key.toLowerCase() === key.toLowerCase());

  if (!foundKeyPair) {
    throw new Error(`Found no possible keys for: "${key}".`);
  }
  return foundKeyPair;
}

export function checkLocale(locale) {
  return checkString('locale', locale, /^[a-z][a-z]_[A-Z][A-Z]$/);
}

export function checkVersion(version) {
  return checkString('version', version, /^\d+\.\d+\.\d+$/);
}
