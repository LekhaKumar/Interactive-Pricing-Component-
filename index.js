
let slider = document.getElementById("myRange");
let price_value = document.getElementById("priceFix1");
let pageCount = document.getElementById("pageViews");
let duration = document.getElementById("duration");
let checkBox = document.querySelector(".form-switch #planType");



checkBox.onclick = function () {

  if(checkBox.checked == true){
   
    let priceInt = parseInt(price_value.textContent);
    price_value.textContent = `${( (priceInt * .75)) * 12}`;
    duration.textContent = "/year";
  }else{
    
    duration.textContent = "/month";
    refreshClick();
  }
  
}

function refreshClick(){

  slider.oninput = function(){
    if (slider.value == 1){
      if (checkBox.checked==true){
        price_value.innerHTML = "72";

  
      }else{
        price_value.innerHTML = "8";

      } 
      pageCount.innerHTML = "10K"
    }
    if (slider.value == 2){
      if (checkBox.checked==true){
        price_value.innerHTML = "108";

  
      }else{
        price_value.innerHTML = "12";

      } 
      
      pageCount.innerHTML = "50K"
    }
    if (slider.value == 3){
      if (checkBox.checked==true){
        price_value.innerHTML = "144";

  
      }else{
        price_value.innerHTML = "16";

      } 
     
      pageCount.innerHTML = "100K"
    }
    if (slider.value == 4){
      if (checkBox.checked==true){
        price_value.innerHTML = "216";

  
      }else{
        price_value.innerHTML = "24";

      } 
     
      pageCount.innerHTML = "500K"
    }
    if (slider.value == 5){
      if (checkBox.checked==true){
        price_value.innerHTML = "324";
 

  
      }else{
        price_value.innerHTML = "36";

      } 
      
      pageCount.innerHTML = "1M"
    }
  }
  

}


refreshClick();