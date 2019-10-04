var container = document.getElementsByTagName("body")[0];
var exitButton = document.getElementsByClassName("exit")[0];
var noSleep = new NoSleep();
console.log('no sleep started');
function enableNoSleep() {
  noSleep.enable();
  document.removeEventListener('touchstart', enableNoSleep, false);
}
document.addEventListener('touchstart', enableNoSleep, false);

exitButton.addEventListener('click', () => {
  document.exitFullscreen();
})

container.addEventListener("click", function() {
  document.body.requestFullscreen();
}, false);