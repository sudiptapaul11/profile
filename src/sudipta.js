

var mobile_button = document.querySelector(".mobile");
var verticalMenu = document.querySelector(".verticalmenu");


var x = document.querySelector(".verticalmenu");
x.style.display = "none";

mobile_button.onclick = () => {
    togglemobile();
    
}




function togglemobile() {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

