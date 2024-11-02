/**
 * Returns the number of decimal places of a number.
 * @param {number} num - A number.
 * @returns {number} The number of decimal places of the given number.
 */
export default function getDecimalPlaces(num) {
  const str = num.toString();
  const decimalPart = str.split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
