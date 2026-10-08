// 1. Funcionalidad de Cambio de Tema
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// 2. Módulo de Carrito Súper Simplificado
let total = 0; // Acumulador numérico
const lista = document.getElementById('lista');
const textoTotal = document.getElementById('total');

// Capturar todos los botones de "Comprar"
const botonesAgregar = document.querySelectorAll('.add-btn');

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (evento) => {
        // Obtener datos de los atributos data-*
        const nombre = evento.target.getAttribute('data-nombre');
        const precio = parseInt(evento.target.getAttribute('data-precio'));
        
        // Sumar al total e imprimirlo en pantalla
        total = total + precio;
        textoTotal.innerText = total;

        // Crear dinámicamente el nodo para el producto en el carrito
        const divItem = document.createElement('div');
        divItem.className = 'item'; // Le ponemos una clase para darle estilo
        divItem.innerText = nombre + " - $" + precio; // Le ponemos el texto

        // Crear el botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.innerText = 'X';
        
        // Evento para eliminar ese producto específico
        btnEliminar.addEventListener('click', () => {
            divItem.remove(); // Remueve el nodo HTML del DOM
            total = total - precio; // Descuenta del total
            textoTotal.innerText = total; // Actualiza en pantalla
        });

        // Ensamblar y mostrar
        divItem.appendChild(btnEliminar);
        lista.appendChild(divItem);
    });
});

// 3. Funcionalidad Vaciar Carrito
document.getElementById('vaciar').addEventListener('click', () => {
    lista.innerHTML = ''; // Borra todos los nodos dentro de la lista
    total = 0; // Reinicia el acumulador
    textoTotal.innerText = total; // Actualiza en pantalla
});
