//valor de ticket sin descuento
const valorTicket = 200;

//campos del formulario
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cant = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

//campo valor total
let total = document.getElementById("total");

//botones
let resumen = document.getElementById("resumen");
let btnBorrar = document.getElementById("borrar");


//cálculo del valor de ticket según cantidad y categoría. El total se muestra en el campo "Total a pagar: $"
function calcularTotal(e) {

    e.preventDefault();

    let valorCategoria = categoria.value;
    let valorCantidad = cantidad.value;
    let valorTotal;

    switch (valorCategoria) {

        case "1": 
            valorTotal = valorCantidad * (valorTicket - (valorTicket * 0.8));
            total.textContent = "Total a pagar: $" + valorTotal;
            break;

        case "2": 
            valorTotal = valorCantidad * (valorTicket - (valorTicket * 0.5));
            total.textContent = "Total a pagar: $" + valorTotal;
            break;

        case "3": 
            valorTotal = valorCantidad * (valorTicket - (valorTicket * 0.15));
            total.textContent = "Total a pagar: $" + valorTotal;
            break;

    }  

}


//reseteo de campos del formulario
function borrarFormulario(e) {

    e.preventDefault();

    total.textContent = "Total a pagar: $";
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cantidad.value = "";
    categoria.value = "1";

}


//escucha de eventos de los botones
resumen.addEventListener("click", calcularTotal);
borrar.addEventListener("click", borrarFormulario);