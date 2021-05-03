
var cont = document.getElementById("seccion_cont")
var panel_bool = false;
var panel_obj;
function panel_estructura(producto) {
  /*dibujar estrellas */
  var texto_estrellas = "";
  for (var i = 1; i <= 5; i++) {
    const clase = (i <= producto.estrellas) ? "fas" : "far";
    texto_estrellas += `<i class="${clase} fa-star"></i>`
  }
  var panel = document.createElement("div")
  panel.className = "sec-panel panel-extendido"
  var estructura = `
        <div class="sec-producto">
          <div class="sec-img">
            <img src="${producto.urls[0]}" alt="">
            <img src="${producto.urls[1]}" alt="">
          </div>
          <div class="sec-cuerpo">
            <div class="panel-datos">
              <div class="panel-close">
                <i class="fas fa-times" id="panel_close"></i>
              </div>
              <p class="panel-nombre">${producto.nombre}</p>
              <div class="estrellas">
                ${texto_estrellas}
              </div>
              <p class="sec-cuerpo-precio">${producto.precio}</p>
            </div>
            <div>
              <a class="btn" href="/paginas/comprar.html">Comprar</a>
            </div>
          </div>
        </div>`;
  panel.innerHTML = estructura
  return panel;
}
/*extrayendo datos */
cont.addEventListener("click", function (e) {
  var elemento = e.target;
  if (elemento.classList.contains("sec-cuerpo-nombre")) {
    if (panel_bool)
      panel_obj.remove()

    var padre = elemento.parentNode.parentNode;
    var nombre = elemento.textContent;
    var imagenes = [...padre.querySelectorAll("img")]
    var urls = [imagenes[0].src, imagenes[1].src]
    var estrellas = padre.querySelectorAll(".fas").length
    var precio = padre.querySelector(".sec-cuerpo-precio").textContent
    var producto = {
      nombre,
      urls,
      estrellas,
      precio
    }
    var objeto_html = panel_estructura(producto);
    panel_obj = objeto_html;
    // padre.insertAdjacentHTML('afterend', objeto_html)
    padre.parentNode.insertBefore(objeto_html, padre.nextSibling);
    panel_bool = true
    document.getElementById("panel_close").addEventListener("click", function () {
      objeto_html.remove();
      panel_bool = false;
    })
  }
})
