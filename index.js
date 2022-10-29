
let slider = document.getElementById("myRange");
let price_value = document.getElementById("priceFix1");
let pageCount = document.getElementById("pageViews");
let duration = document.getElementById("duration");
let checkBox = document.querySelector(".form-switch #planType");



checkBox.oninput = function () {

  if (checkBox.checked == true){
    if (slider.value == 1){
      price_value.innerHTML = "72";
      duration.innerHTML = "/year";
    }else if (slider.value == 2){
      price_value.innerHTML = "108";
      duration.innerHTML = "/year";
    }else if (slider.value == 3){
      price_value.innerHTML = "144";
      duration.innerHTML = "/year";
    }else if (slider.value == 4){
      price_value.innerHTML = "216";
      duration.innerHTML = "/year";
    }else{
      price_value.innerHTML = "324";
      duration.innerHTML = "/year";
    }


}else{
  if (slider.value == 1){
    price_value.innerHTML = "8";
    duration.innerHTML = "/month";
  }else if (slider.value == 2){
    price_value.innerHTML = "12";
    duration.innerHTML = "/month";
  }else if (slider.value == 3){
    price_value.innerHTML = "16";
    duration.innerHTML = "/month";
  }else if (slider.value == 4){
    price_value.innerHTML = "24";
    duration.innerHTML = "/month";
  }else{
    price_value.innerHTML = "36";
    duration.innerHTML = "/month";
  }
  
}
}

sliderMain();

function sliderMain() {

  slider.oninput = function () {
    if (slider.value == 1) {
      if (checkBox.checked == true) {
        price_value.innerHTML = "72";


      } else {
        price_value.innerHTML = "8";

      }
      pageCount.innerHTML = "10K"
    }
    if (slider.value == 2) {
      if (checkBox.checked == true) {
        price_value.innerHTML = "108";


      } else {
        price_value.innerHTML = "12";

      }

      pageCount.innerHTML = "50K"
    }
    if (slider.value == 3) {
      if (checkBox.checked == true) {
        price_value.innerHTML = "144";


      } else {
        price_value.innerHTML = "16";

      }

      pageCount.innerHTML = "100K"
    }
    if (slider.value == 4) {
      if (checkBox.checked == true) {
        price_value.innerHTML = "216";


      } else {
        price_value.innerHTML = "24";

      }

      pageCount.innerHTML = "500K"
    }
    if (slider.value == 5) {
      if (checkBox.checked == true) {
        price_value.innerHTML = "324";



      } else {
        price_value.innerHTML = "36";

      }

      pageCount.innerHTML = "1M"
    }
  }


}


