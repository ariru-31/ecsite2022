$(function () {
  const listItems = $(".syohin__li").length;
  $(".syohin").each(function () {
    let num = 9,
      closeNum = num - 1;
    $(this).find(".syohin__btn").show();
    $(this)
      .find("li:not(:lt(" + num + "))")
      .hide();
    $(".syohin__btn").click(function () {
      num += 5;
      $(this)
        .parent()
        .find("li:lt(" + num + ")")
        .slideDown();
      if (listItems <= num) {
        $(".syohin__btn").hide();
      }
    });
  });
})
let state = document.querySelectorAll(".syohin__state");

for (let i = 0; i < state.length; i++){
  let zaiko = state[i].innerHTML;
  console.log(zaiko)
  if (zaiko === "TRUE") {
    state[i].innerHTML="在庫あり"
  } else {
    state[i].innerHTML="在庫切れ"
  }
}
let imglist = document.querySelectorAll(".current__img");
let mainimg = document.querySelector(".main-imgitem")
for (let i = 0; i < imglist.length; i++){
  imglist[i].addEventListener("click", function () {
    let code = imglist[i].getAttribute("src");
    mainimg.setAttribute("src",code)

  })
}


"use strict";
$(function () {
  const hamburger = $(".hamburger");
  const nav = $(".nav");

  hamburger.click(function () {
    $(this).find(".hamburger_bar").toggleClass("is_active");
    nav.toggleClass("is_active");
  });
});
