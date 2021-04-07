export default () => {
  let isMobileDevice = false;
  if (window && window.navigator) {
    isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
  }
  return isMobileDevice;
};
