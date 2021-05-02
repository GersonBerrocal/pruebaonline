
var cont = document.getElementById("seccion_cont")

cont.addEventListener("click", function (e) {
  if (e.target.classList.contains("sec-cuerpo-nombre")) {
    console.log("hola");
  }
})