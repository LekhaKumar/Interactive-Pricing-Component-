let slider = document.getElementById("myRange");
let price_value = document.getElementById("priceFix1");
let pageCount = document.getElementById("pageViews");


slider.oninput = function(){
  if (slider.value == 1){
    price_value.innerHTML = "8";
    pageCount.innerHTML = "10K"
  }
  if (slider.value == 2){
    price_value.innerHTML = "12";
    pageCount.innerHTML = "50K"
  }
  if (slider.value == 3){
    price_value.innerHTML = "16";
    pageCount.innerHTML = "100K"
  }
  if (slider.value == 4){
    price_value.innerHTML = "24";
    pageCount.innerHTML = "500K"
  }
  if (slider.value == 5){
    price_value.innerHTML = "36";
    pageCount.innerHTML = "1M"
  }
}

