const buttons = $(".btn");
const questionText = $(".q-text");

buttons.on("click", showAnswer);

function showAnswer()  {
  $(this).next(".answer").toggle("hidden"); // shows the answer

  let currentSrc = $(this).find("img").attr("src"); // selects current img source
  
  if (currentSrc === "./assets/images/icon-plus.svg") { // if the icon is plus sign
    $(this).find("img").attr("src", "./assets/images/icon-minus.svg"); 
    // ^ select img element in the button clicked to change its svg
    $(this).parent().css("grid-template-rows", "1fr 3fr");
    // ^ select the parent div to change the grid rows ratio
    $(this).parent().css("margin-bottom", "0");
    $(this).next(".answer").css("align-content", "end");
  } else  { // if icon is not plus (minus)
    $(this).find("img").attr("src", "./assets/images/icon-plus.svg");
    $(this).parent().css("grid-template-rows", "1fr 1fr");
    $(this).parent().css("margin-bottom", "20px");
  }
  
}