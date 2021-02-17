export default () => {
  const iframe = document.querySelectorAll('iframe');
  if (iframe.length) {
    iframe.forEach((element) => {
      const iframeSrc = element.src;
      element.src = iframeSrc;
    });
  }
};
