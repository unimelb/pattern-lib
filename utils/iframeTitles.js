// Add title to iframes to meet accessibility requirement
if (document) {
  const iframes = document.body.querySelectorAll('iframe');

  Array.prototype.slice.call(iframes).forEach((el) => {
    if (el.src.includes('doubleclick') && !el.title.length) {
      el.title = 'Floodlight advertising';
    }

    if (el.src.includes('qualaroo') && !el.title.length) {
      el.title = 'Survey';
    }
  });
}
