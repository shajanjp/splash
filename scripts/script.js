const wrapElement = document.getElementsByClassName("wrap")[0];
const bodyElement = document.getElementsByTagName("body")[0];
const controlsElement = document.getElementsByClassName('controls')[0];
const controlsShowTimeout = 3000;
let timeoutHandler = false;

wrapElement.style.borderRadius = "0px";
bodyElement.style.padding = "0px";

bodyElement.addEventListener(
  "click",
  () => {
    document.body.requestFullscreen();
    requestWakeLock();
    showControlsForNext5Minutes();
  },
  false
);

controlsElement.addEventListener('click', () => {
  showControlsForNext5Minutes();
})

showControlsForNext5Minutes();

const requestWakeLock = () => {
  if (navigator?.wakeLock?.request) {
    try {
      (async () => {
        wakeLock = await navigator.wakeLock.request('screen');
      })();
    } catch (err) {
      alert(`Wakelock request failed.`);
    }
  }
};

function showControlsForNext5Minutes() {
  document.getElementsByClassName("controls")[0].classList.remove("animate__fadeInLeft", "animate__fadeOutRight");
  document.getElementsByClassName("controls")[0].classList.add("animate__fadeInLeft");
  
  clearTimeout(timeoutHandler);

  timeoutHandler = setTimeout(() => {
    document.getElementsByClassName("controls")[0].classList.add("animate__fadeOutRight");
  }, controlsShowTimeout);
}

function changeRadius(action) {
  showControlsForNext5Minutes();

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
  showControlsForNext5Minutes();

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
