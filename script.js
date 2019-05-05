const mainSong = document.getElementById("#mainSong");
const allDrum = document.querySelectorAll(".drum-pad");
const display = document.querySelector("#display");
const keysArr = [81, 87, 69, 65, 83, 68, 90, 88, 67];

const togglePlay = () => {
  return mainSong.paused ? mainSong.play() : mainSong.pause();
};

for (let set of allDrum) {
  set.addEventListener("click", () => {
    document.querySelector(".drum-pad#" + set.id + " audio").play();
    return (display.innerText = document.querySelector(
      ".drum-pad#" + set.id + " audio"
    ).textContent);
  });
}

document.addEventListener("keydown", event => {
  keysArr.map(i => {
    if (event.keyCode == i) {
      document
        .querySelector(".drum-pad#" + this.event.key.toUpperCase() + " audio")
        .play();

      return (display.innerText = document.querySelector(
        ".drum-pad#" + this.event.key.toUpperCase() + " audio"
      ).textContent);
    }
  });
});
