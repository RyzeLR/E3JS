const pizzas = [
  {
    id: 1,
    nombre: 'pizza de Muzzarella',
    precio: 500,
    ingredientes: ['Muzzarella', 'Tomate', 'Aceitunas'],
    imagen: './assets/img/Muzzarella.png',
  },

  {
    id: 2,
    nombre: 'pizza de Cebolla',
    precio: 1500,
    ingredientes: ['Muzzarella', 'Tomate', 'Cebolla'],
    imagen: './assets/img/cebolla.png',
  },

  {
    id: 3,
    nombre: 'pizza 4 Quesos',
    precio: 1380,
    ingredientes: [
      'Muzzarella',
      'Tomate',
      'Queso Azul',
      'Parmesano',
      'Roquefort',
    ],
    imagen: './assets/img/4quesos.png',
  },

  {
    id: 4,
    nombre: 'pizza Especial',
    precio: 1000,
    ingredientes: ['Muzzarella', 'Tomate', 'Rucula', 'Jamón'],
    imagen: './assets/img/Especial.png',
  },
  {
    id: 5,
    nombre: 'pizza con Anana',
    precio: 600,
    ingredientes: ['Muzzarella', 'Tomate', 'Anana'],
    imagen: './assets/img/anana.png',
  },
];

/*
1. Crear una funcion donde al colocar un numero, cuyo numero me  de como resultado el id que concuerde con la pizza que haya buscado
2. Crear una funcion addEventListener en el init del submit,  que al darle submit me de como resultado ese id de pizza que haya colocado
3. Crear una funcion de crear y renderizar card, y que esten vinculadas entre si para cuando al darle submit me  de como resultado la pizza cuyo id concuerde renderizadaa
4. Crear unas condiciones  donde el id concuerde renderiza la pizza si no, tiro un error
5. Guardar todo en el localstorage
*/

const formTask = document.querySelector('.form');
const cardContainer = document.querySelector('.card-container');
const formInput = document.querySelector('#inputBuscar');
const formSubmit = document.querySelector('#submit');

const crearCard = (pizza) => {
  const { nombre, precio, ingredientes, imagen } = pizza;
  return `<div class='card-container'>
   <div class='card-info'>
   <h2>${nombre.toUpperCase()}</h2>
   <p>$${precio}</p>
   <span>${ingredientes}</span>
   </div>
   <img src='${imagen}' alt='${nombre}'>
  </div>`;
};

const renderizarCard = (pizza) => {
  cardContainer.innerHTML = crearCard(pizza);
};

const buscarPizzas = (e) => {
  e.preventDefault();

  const idPizza = formInput.value;
  const pizzaEncontrada = pizzas.find(
    (pizza) => pizza.id === parseInt(idPizza),
  );

  if (pizzaEncontrada) {
    renderizarCard(pizzaEncontrada);
    localStorage.setItem('ultimaBusqueda', JSON.stringify(pizzaEncontrada));
  } else {
    cardContainer.innerHTML = `<h3>No se encontro ningun producto</h3>`;
  }
};

const renderizarUltimaBusqueda = () => {
  const ultimaPizza = localStorage.getItem('ultimaBusqueda');
  if (ultimaPizza) {
    const pizza = JSON.parse(ultimaPizza);
    renderizarCard(pizza);
  }
};

const init = () => {
  formTask.addEventListener('submit', buscarPizzas);
  renderizarUltimaBusqueda();
};

init();
