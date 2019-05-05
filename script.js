const mainSong = document.getElementById("#mainSong");
const allDrum = document.querySelectorAll(".drum-pad");
const display = document.querySelector("#display");
const Qbtn = document.querySelector(".drum-pad#Q");
const Wbtn = document.querySelector(".drum-pad#W");
const Ebtn = document.querySelector(".drum-pad#E");
const Abtn = document.querySelector(".drum-pad#A");
const Sbtn = document.querySelector(".drum-pad#S");
const Dbtn = document.querySelector(".drum-pad#D");
const Zbtn = document.querySelector(".drum-pad#Z");
const Xbtn = document.querySelector(".drum-pad#X");
const Cbtn = document.querySelector(".drum-pad#C");

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
  switch (event.keyCode) {
    case 81:
      document.querySelector(".drum-pad#" + Qbtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Qbtn.id + " audio"
      ).textContent);
      break;
    case 87:
      document.querySelector(".drum-pad#" + Wbtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Wbtn.id + " audio"
      ).textContent);
      break;
    case 69:
      document.querySelector(".drum-pad#" + Ebtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Ebtn.id + " audio"
      ).textContent);
      break;
    case 65:
      document.querySelector(".drum-pad#" + Abtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Abtn.id + " audio"
      ).textContent);
      break;
    case 83:
      document.querySelector(".drum-pad#" + Sbtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Sbtn.id + " audio"
      ).textContent);
      break;
    case 68:
      document.querySelector(".drum-pad#" + Dbtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Dbtn.id + " audio"
      ).textContent);
      break;
    case 90:
      document.querySelector(".drum-pad#" + Zbtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Zbtn.id + " audio"
      ).textContent);
      break;
    case 88:
      document.querySelector(".drum-pad#" + Xbtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Xbtn.id + " audio"
      ).textContent);
      break;
    case 67:
      document.querySelector(".drum-pad#" + Cbtn.id + " audio").play();
      return (display.innerText = document.querySelector(
        ".drum-pad#" + Cbtn.id + " audio"
      ).textContent);
      break;
  }
});
