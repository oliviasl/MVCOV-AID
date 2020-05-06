window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.height = "54px";
  } else {
    document.getElementById("nav").style.height = "78px";
  }
}

window.onload = function(){ 
    this.setTimeout(removeLoader, 1000);
}

function removeLoader() {
    $("#loading").fadeOut(300, function() {
        document.getElementById("loading").style.display = "none"
    });
}