import { isArray } from './utils';

export function min(...theArgs) {
  if (theArgs.length === 0) {
    return undefined;
  } else if (isArray(theArgs[0])) {
    return Math.min(...theArgs[0]);
  }
  return Math.min(...theArgs);
}

export function copy(obj) {
  return isArray(obj) ? [...obj] : { ...obj };
}

export function reverseMerge(obj1, obj2) {
  const newArray = [...obj2, ...obj1];
  return newArray;
}

export function filterAttribs(obj) {
  const {
    a, b, c, d, ...z
  } = { ...obj };
  return { c, d, ...z };
}
