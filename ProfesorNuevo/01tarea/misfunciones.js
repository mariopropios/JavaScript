// ------------- FORMA PERSONAL
function leerFormulario(){
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    return {id: id, nombre: nombre};
}

function pintarLista(){
    var datos = leerFormulario();

    var lista = document.getElementById("lista");
    var li = document.createElement("li");

    li.innerText = datos.id + " | " + datos.nombre;
    lista.appendChild(li);

}

document.getElementById("boton").addEventListener("click", pintarLista);

// ------------- FORMA PROFESOR
function actualizarNombre(event){
    var nombre = document.getElementById('nombre').value;
    document.getElementById('nombre').innerText = nombre;
}

window.addEventListener("click", function (event) {
  if (event.target.id === "boton") {
    actualizarNombre();
  }
});
