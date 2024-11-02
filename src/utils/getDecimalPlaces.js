export default function getDecimalPlaces(num) {
  const str = num.toString();
  const decimalPart = str.split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
