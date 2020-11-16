/**
 * Returns first char from string.
 *
 * @param str - The first input string
 * @returns The first char from `str`
 *
 * @beta
 */
export const getFirstCharFromString = function (str: string): string {
  if (!str) {
    throw new Error("Invalid string");
  }
  return str.charAt(0).toUpperCase();
};

/**
 * Returns new string with uppercase to each word.
 *
 * @param str - The first input string
 * @returns The uppercase of `str`
 *
 * @beta
 */
export const stringCapitalize = function (str: string): string {
  if (!str) {
    throw new Error("Invalid string");
  }
  const splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};
