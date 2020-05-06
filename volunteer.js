window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-volunteer").style.height = "63px";
    document.getElementById("header").style.fontSize = "40px";
  } else {
    document.getElementById("nav-volunteer").style.height = "93px";
    document.getElementById("header").style.fontSize = "60px";
  }
}
