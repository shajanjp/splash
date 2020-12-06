const container = document.getElementsByTagName("body")[0];
container.addEventListener(
  "click",
  function () {
    document.body.requestFullscreen();
    requestWakeLock();
  },
  false
);

const requestWakeLock = () => {
  if ("wakeLock" in navigator && "request" in navigator.wakeLock) {
    try {
      (async () => {
        wakeLock = await navigator.wakeLock.request();
      })();
    } catch (err) {
      alert(`${err.name}, ${err.message}`);
    }
  }
};
