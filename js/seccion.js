
var link_todos = document.getElementById("link_todos")
var link_jeans = document.getElementById("link_jeans")
var link_pantalones = document.getElementById("link_pantalones")
var link_casacas = document.getElementById("link_casacas")
var link_gala = document.getElementById("link_gala")

var seccion_actual = document.getElementById("todos");
var link_actual = link_todos;

function cambiar_seccion(el, linkp) {
  var seccion = document.getElementById(el);
  // esconder actual
  seccion_actual.classList.remove("focus")
  link_actual.classList.remove("focus");
  // mostrar nueva seccion
  seccion.classList.add("focus");
  linkp.classList.add("focus");
  //sobreescribir la variable 
  link_actual = linkp;
  seccion_actual = seccion;
}
link_todos.addEventListener("click", function () {
  cambiar_seccion("todos", this)
})
link_jeans.addEventListener("click", function () {
  cambiar_seccion("jeans", this)
})
link_casacas.addEventListener("click", function () {
  cambiar_seccion("casacas", this)
})
link_gala.addEventListener("click", function () {
  cambiar_seccion("gala", this)
})
link_pantalones.addEventListener("click", function () {
  cambiar_seccion("pantalones", this)
})