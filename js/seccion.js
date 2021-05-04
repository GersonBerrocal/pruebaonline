// general, todas las secciones tiene "todos"
var link_todos = document.getElementById("link_todos")


// esto es para hombres
var link_jeans = document.getElementById("link_jeans") //esto sera usado en niños
var link_pantalones = document.getElementById("link_pantalones")
var link_casacas = document.getElementById("link_casacas")
var link_gala = document.getElementById("link_gala")
// esto es para mujeres
var link_blusas = document.getElementById("link_blusas");
var link_cardigans = document.getElementById("link_cardigans");
var link_chompas = document.getElementById("link_chompas");
var link_vestidos = document.getElementById("link_vestidos");
// niños
var link_camisas = document.getElementById("link_camisas");
var link_polos = document.getElementById("link_polos");
var link_buzos = document.getElementById("link_buzos");


var seccion_actual = document.getElementById("todos");
var link_actual = link_todos;

function cambiar_seccion(id, linkp) {
  var seccion = document.getElementById(id);
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


//para hombres
if (link_pantalones) {
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
} else if (link_blusas) {
  // para mujeres
  link_blusas.addEventListener("click", function () {
    cambiar_seccion("blusas", this)
  })
  link_cardigans.addEventListener("click", function () {
    cambiar_seccion("cardigans", this)
  })
  link_chompas.addEventListener("click", function () {
    cambiar_seccion("chompas", this)
  })
  link_vestidos.addEventListener("click", function () {
    cambiar_seccion("vestidos", this)
  })
} else if (link_camisas) {
  link_camisas.addEventListener("click", function () {
    cambiar_seccion("camisas", this)
  })
  link_polos.addEventListener("click", function () {
    cambiar_seccion("polos", this)
  })
  link_buzos.addEventListener("click", function () {
    cambiar_seccion("buzos", this)
  })
  link_jeans.addEventListener("click", function () {
    cambiar_seccion("jeans", this)
  })
}
