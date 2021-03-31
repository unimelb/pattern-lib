export default () => {
  const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
  return isMobileDevice;
};
