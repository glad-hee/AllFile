const error = document.querySelector("#error");
const fP = document.querySelector(".first-page");
const sP = document.querySelector(".second-page");
const tP = document.querySelector(".third-page");
const foP = document.querySelector(".fourth-page");
const confirmB = document.querySelector("#confirm");
const approveB = document.querySelector("#approve");
const proceedB = document.querySelector("#proceed");
const okayB = document.querySelector("#okay");
const rejectB = document.querySelector("#reject");
const back3 = document.querySelector("#back3");
const back4 = document.querySelector("#back4");
const pNumber = document.querySelector("#phone-number");
confirmB.addEventListener("click", function () {
  if (pNumber.value.length === 11) {
    fP.classList.replace("on", "off");
    sP.classList.add("on");
    error.classList.replace("on", "off");
  } else {
    error.classList.add("on");
  }
});
approveB.addEventListener("click", function () {
  sP.classList.replace("on", "off");
  tP.classList.add("on");
});
proceedB.addEventListener("click", function () {
  tP.classList.replace("on", "off");
  foP.classList.add("on");
});
okayB.addEventListener("click", function () {
  foP.classList.replace("on", "off");
  window.location = "./page1.html";
});
rejectB.addEventListener("click", function () {
  fP.classList.add("on");
  sP.classList.replace("on", "off");
});
back3.addEventListener("click", function () {
  fP.classList.add("on");
  tP.classList.replace("on", "off");
});
back4.addEventListener("click", function () {
  tP.classList.add("on");
  foP.classList.replace("on", "off");
  //   메인페이지 가는 이동 만들기
});

const btns = document.querySelectorAll(".number");
const reset = document.querySelector("#reset");
const confirmNumber = document.querySelector(".checkNumber");

btns.forEach((v, i) => {
  v.addEventListener("click", function () {
    if (pNumber.value.length > 10) {
      pNumber.value.substring(0, 10);
    } else {
      pNumber.value += this.textContent;
    }
    confirmNumber.textContent = pNumber.value.replace(
      /^(\d{2,3})(\d{3,4})(\d{4})$/,
      `$1-$2-$3`
    );
  });
});

reset.addEventListener("click", function () {
  pNumber.value = pNumber.value.substring(0, pNumber.value.length - 1);
});
const overlay = document.querySelector("#overlay");
const buyBtn = document.querySelector(".bb-pick-up");
buyBtn.addEventListener("click", function () {
  fP.classList.add("on");
  overlay.classList.add("overlay");
});
