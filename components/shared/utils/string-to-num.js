export default function stringToNum(str) {
  return typeof str === 'string' ? parseInt(str, 10) : str;
}
