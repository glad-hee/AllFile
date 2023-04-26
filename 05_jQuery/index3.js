// console.log("!");

console.log(window);
console.log(document);

console.log($(window));
console.log($(document));

// mouse event
// click(function(){}), mouseover(function(){})
// hover(function(){}, function(){})
// hover(마우스를 올렸을 때 동작, 마우스를 떼었을 떄의 동작)

// 1. click() : 클릭이 일어났을 때
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

// on() == addEventListener()
$(".num").on("click", function () {
  $(this).css("color", "blue"); // this 클릭되는 자신 하나만
});

$(".div-hover").hover(
  function () {
    $(this).addClass("hover1");
  },
  function () {
    $(this).removeClass("hover1");
  }
);

$(window).scroll(function () {
  console.log("scroll!!!!!!!!!!");
});

// 선택요소.addEventListener('keydown',function(){})
$(".input-key").keydown(function (event) {
  // console.log(event.code);
  if (event.code === "ArrowUp") {
    console.log("up");
  } else if (event.code === "ArrowRight") {
    console.log("right");
  } else if (event.code === "ArrowLeft") {
    console.log("left");
  } else if (event.code === "ArrowDown") {
    console.log("down");
  } else {
    console.log("others");
  }
});

// todo list
$("#todo-form").on("submit", function (e) {
  e.preventDefault(); // 이벤트막기

  const todo = $('input[name="todo"]').val(); // 따음표 구별하기
  $("ul.todos").append(`<li>${todo}</li`);
  $('input[name="doto"]').val(""); // 초기화
});
