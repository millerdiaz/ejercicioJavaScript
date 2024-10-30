const elementosCocina = [
    {
      id: 1,
      nombre: "Sartén Antiadherente",
      precio: 25.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yZ_PxjZ7YCnXT4VCnslyU2j0Mxr0ZO-cMw&s"
    },
    {
      id: 2,
      nombre: "Cuchillo Chef",
      precio: 18.50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7Tik7ZJfwwU8iOhfJsoRZ9j6qLvU5WSfcg&s"
    },
    {
      id: 3,
      nombre: "Tabla de Cortar",
      precio: 12.75,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn4jjm12FseOdd69lIZuAhM8430td1weBkg&s"
    },
    {
      id: 4,
      nombre: "Olla de Acero inx",
      precio: 35.00,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aK2b4HIOkOwMY85IjkwiC8imDt_AUggUow&s"
    },
    {
      id: 5,
      nombre: "Batidora de Mano",
      precio: 29.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_P7EhOLvK0CjdHuSbBRJFA0blhRHNq-Ugw&s"
    },
    {
      id: 6,
      nombre: "Tetera Eléctrica",
      precio: 22.50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VlNNZOrbLiSB-iHJ3xQhcl5RI3XIJFgzkg&s"
    }
  ];
  
let productos = document.getElementById("productos")

for (let index = 0; index < elementosCocina.length; index++) {
    const element = elementosCocina[index];

    productos.innerHTML += `                        
    <div class="card tarjeta col-3" style="width: 16rem;">
            <img src="${element.imagen}" class="card-img-top imagen" alt="${element.nombre}">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text"></p>
                <div class="d-flex justify-content-center py-0">
                    <p class="btn btn-primary py-0 mt-4">$ ${element.precio}</p>
                </div>
                <div class="d-flex justify-content-center ">
                    <i type="button" class="fa-solid fa-arrow-left me-2"></i>
                    <p class="fw-bold fs-3 cantidad mb-0">0</p>
                    <i  type="button" class="fa-solid fa-arrow-right ms-2"></i>
                </div>
            </div>
        </div>` 
    
}

let totalProductosDisplay = document.getElementById("totalProductos");
let subtotalDisplay = document.getElementById("subtotal");
let ahorroDisplay = document.getElementById("ahorro");
let totalPagarDisplay = document.getElementById("totalPagar");

let botonesIzquierda = document.querySelectorAll('.fa-arrow-left');
let botonesDerecha = document.querySelectorAll('.fa-arrow-right');


let totalProductos = 0;
let subtotal = 0;

function actualizarTotales() {
  let ahorro = totalProductos > 5 ? 5 : 0;
  let totalAPagar = subtotal - ahorro;

  totalProductosDisplay.textContent = `Total productos: ${totalProductos}`;
  subtotalDisplay.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  ahorroDisplay.textContent = `Ahorro: $${ahorro}`;
  totalPagarDisplay.textContent = `Total a pagar: $${totalAPagar.toFixed(2)}`;
}

botonesIzquierda.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    let cantidadElemento = boton.nextElementSibling;
    let cantidad = parseInt(cantidadElemento.textContent);
    if (cantidad > 0) {
      cantidad--;
      totalProductos--;
      subtotal -= elementosCocina[index].precio;
      cantidadElemento.textContent = cantidad;
      actualizarTotales();
    }
  });
});

botonesDerecha.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    let cantidadElemento = boton.previousElementSibling;
    let cantidad = parseInt(cantidadElemento.textContent);
    cantidad++;
    totalProductos++;
    subtotal += elementosCocina[index].precio;
    cantidadElemento.textContent = cantidad;
    actualizarTotales();
  });
});


actualizarTotales();




 




// ------------ Puntos a realizar --------------------

// en "total productos" se debe mostrar la cantidad de elementos seleccionados por el ususario.
// en "subtotal" se debe mostar el valor total de los elementos dependiendo de la cantidad.
// en "ahorro" se debe mostrar el descuento de "5 dolares" si hay mas de 5 articulos.
// en "total a pagar" se debe mostrar el valor total menos el "ahorro".
// la cantidad de productos no debe poder bajar nemos de "0"
