const buttons = $(".btn");
const answer = $(".answer");

buttons.on("click", clicked);

function clicked()  {
  $(this).next("h3").toggle("hidden");

  let currentSrc = $(this).find("img").attr("src");
  
  if (currentSrc === "./assets/images/icon-plus.svg") {
    $(this).find("img").attr("src", "./assets/images/icon-minus.svg");
  } else  {
    $(this).find("img").attr("src", "./assets/images/icon-plus.svg");
  }
}