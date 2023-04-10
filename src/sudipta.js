

var mobile_button = document.querySelector(".mobile");
var verticalMenu = document.querySelector(".verticalmenu");

mobile_button.onclick = () => {
    togglemobile();
    console.log("abcd")
}




function togglemobile() {
    var x = document.querySelector(".verticalmenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

