/**
 * Capitalizes the first character of the given string.
 *
 * @param str - The string to be capitalized.
 * @returns The input string with the first character converted to uppercase.
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
