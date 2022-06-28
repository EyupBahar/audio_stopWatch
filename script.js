const stopWatch = document.querySelector(".stopWatch");
const playBtn = document.querySelector(".playBtn");
const stopBtn = document.querySelector(".stopBtn");
const btns = document.querySelector(".btns");
const audio = document.querySelector("audio");

let min = 0;
let sec = 0;
let mSec = 0;
let isRunning = false;
let timer;

const stopWatchTimer = () => {
  mSec++;
  if (mSec == 100) {
    sec++;
    mSec = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  min = String(min).length < 2 ? "0" + min : min;
  sec = String(sec).length < 2 ? "0" + sec : sec;
  mSec = String(mSec).length < 2 ? "0" + mSec : mSec;
  stopWatch.innerHTML = `${min}: ${sec}: ${mSec}`;
};

playBtn.addEventListener("click", () => {
  isRunning = !isRunning;
  if (isRunning) {
    timer = setInterval(stopWatchTimer, 10);
    playBtn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
    audio.play();

    setTimeout(() => {
      document.querySelector("section").style.backgroundColor = "darkorange";
      setTimeout(() => {
        document.querySelector("section").style.backgroundColor = "red";
        setTimeout(() => {
          document.querySelector("section").style.backgroundColor = "blue";
          setTimeout(() => {
            document.querySelector("section").style.backgroundColor = "gray";
            setTimeout(() => {
              document.querySelector("section").style.backgroundColor = "lime";
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  } else {
    clearInterval(timer);
    audio.pause();
    console.log(audio.currentTime);

    playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
  }
});

stopBtn.addEventListener("click", () => {
  min = 0;
  sec = 0;
  mSec = 0;
  clearInterval(timer);
  audio.pause();
  audio.currentTime = 0;
  console.log(audio.currentTime);
  stopWatch.innerHTML = `0${min}: 0${sec}: 0${mSec}`;
  playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
  isRunning = false;
});
