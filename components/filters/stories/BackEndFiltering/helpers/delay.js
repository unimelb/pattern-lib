const defaultDelayTime = 1000;

export default function (delay = defaultDelayTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
