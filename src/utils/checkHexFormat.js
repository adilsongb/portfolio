/* eslint-disable no-prototype-builtins */
export function checkHexFormat(color) {
  const colorRegex = /^#[0-9A-Fa-f]{6}$/i;

  for (const key in color) {
    if (color.hasOwnProperty(key)) {
      if (!colorRegex.test(color[key])) {
        return false;
      }
    }
  }

  return true;
}
