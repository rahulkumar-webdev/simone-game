let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "purple", "green"];

let started = false;
let level = 0;

document.addEventListener("keypress", function (event) {
  if (started == false) {
    started = true;
    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}
function userflash(btn) {
  btn.classList.add("userclick");
  setTimeout(function () {
    btn.classList.remove("userclick");
  }, 100);
}
function levelup() {
  let p = document.querySelector("p");
  level++;
  p.innerText = `level${level}`;
  let randoidx = Math.floor(Math.random() * 3);
  let randcolor = btns[randoidx];
  let randombtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);

  gameflash(randombtn);
}

function btnpress() {
  let btn = this;
  userflash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);
}
let allbtn = document.querySelectorAll(".btn");
for (const btn of allbtn) {
  btn.addEventListener("click", btnpress);
}
