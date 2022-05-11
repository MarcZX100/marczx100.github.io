var segundos = 5;
var cont = setInterval(function () {
  segundos--;
  document.getElementById("contador").textContent = "en " + segundos + " segundos.";
  if (segundos <= 0)
    clearInterval(cont);
}, 1000);