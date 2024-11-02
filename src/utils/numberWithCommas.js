/**
 * Add commas to a number to mark the thousands places.
 * @param {number || string} x - The number to add the commas to.
 * @returns {string} The string of the the number with commas added.
 */
export default function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
