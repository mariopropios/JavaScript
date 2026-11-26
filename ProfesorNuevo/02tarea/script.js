var product_id = 0;
var array_productos = [];

class Product {
    // Problemas a resolver en el futuro
    /*
        - El id no deberia de ponerlo el usuario (deberia ir incrementandose solo)
    */
    constructor(id,nombre)
    {
        this.id = ++product_id;
        this.nombre = nombre;
    }

}

function print_products (){
    var lista = document.getElementById('tabla_productos');

    for (let index = 0; index < array_productos.length; index++) {
        // 1. crear elementos
        var new_row_element = document.createElement('tr');
        var new_td_element_id = document.createElement('td');
        var new_td_element_nombre = document.createElement('td');

        // 2. asignar contenidos
        new_td_element_id.textContent = array_productos[i].id;
        new_td_element_nombre.textContent = array_productos[i].nombre;

        // 3. append children
        new_row_element.appendChild(new_td_element_id);
        new_row_element.appendChild(new_td_element_nombre);
        
    }
    lista.appendChild(new_row_element);
}

function add_product(){
    var nombre = document.getElementById('nombre').value;
    var new_product = new Product(nombre);
    array_productos.push(new_product);

}

// -------------------------------------------------------------------

function add_product_old(){
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;
    var lista = document.getElementById('tabla_productos'); // o la lista depende donde quieras pintar
    //<p id="1234">zapato de caballo</p>

    //var new_paragraph = '<p id="' + id +'">' + nombre + '</p>';
    //var new_paragraph = `<p id="${id}}">${nombre}</p>`;

    //var new_row = `<tr><td>${id}</td><td>${nombre}</td></tr>`;

    // 1. crear elementos
    var new_row_element = document.createElement('tr');
    var new_td_element_id = document.createElement('td');
    var new_td_element_nombre = document.createElement('td');

    // 2. asignar contenidos
    new_td_element_id.textContent = id;
    new_td_element_nombre.textContent = nombre;

    // 3. append children
    new_row_element.appendChild(new_td_element_id);
    new_row_element.appendChild(new_td_element_nombre);

    lista.appendChild(new_row_element);

    //lista.innerHTML += new_row;
}

document.addEventListener('click', function(event){
    event.preventDefault(); // para que no se recargue la página
    if(event.target.id === 'btn'){
        add_product()
    }
});