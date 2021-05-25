const wrapElement = document.getElementsByClassName("wrap")[0];
const bodyElement = document.getElementsByTagName("body")[0];
wrapElement.style.borderRadius = "0px";
bodyElement.style.padding = "0px";

bodyElement.addEventListener(
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

function changeRadius(action) {
  if (action === "-") {
    wrapElement.style.borderRadius = `${
      parseInt(wrapElement.style.borderRadius.split("px")[0]) - 1
    }px`;
  }

  if (action === "+") {
    wrapElement.style.borderRadius = `${
      parseInt(wrapElement.style.borderRadius.split("px")[0]) + 1
    }px`;
  }
}

function changeStrokeSize(action) {
  if (action === "-") {
    bodyElement.style.padding = `${
      parseInt(bodyElement.style.padding.split("px")[0]) - 1
    }px`;
  }

  if (action === "+") {
    bodyElement.style.padding = `${
      parseInt(bodyElement.style.padding.split("px")[0]) + 1
    }px`;
  }
}
