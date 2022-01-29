/* eslint-disable dot-notation */
/* eslint-disable comma-dangle */

const estudiantes = [
  { imagen: './assets/img/michel_valenzuela.jpg', nombre: 'Michel', habilidades: 'etc 1' },
  { imagen: './assets/img/chancho.jpg', nombre: 'Marietta', habilidades: 'etc 2' },
  { imagen: './assets/img/chancho.jpg', habilidades: 'etc 3', nombre: 'Yo' },
  { imagen: './assets/img/medium_yo.jpg', habilidades: 'etc 4', nombre: 'Cristian', fondo_oscuro: false },
  { imagen: './assets/img/medium_yo.jpg', habilidades: 'etc 4', nombre: 'Cristian', fondo_oscuro: true },
  { imagen: './assets/img/medium_yo.jpg', habilidades: ['Technical Analysis', 'Design', 'Python', 'HTML & CSS'], nombre: 'Cristian' },
]

/* equivalente en lenguaje ruby.
def nombre_de_funcion(argumento1, argumento2)
  #cuerpo de la funcion
end
*/

// eslint-disable-next-line camelcase
const contenedor_talentos = document.querySelector('#contenedor-talentos')
estudiantes.forEach(estudiante => {
  // eslint-disable-next-line camelcase
  const card_estudiante = generarTarjetaEstudiante(estudiante)
  contenedor_talentos.appendChild(card_estudiante)
})

function generarTarjetaEstudiante (estudiante) {
  const col = document.createElement('div')
  col.setAttribute('class', 'col-sm-4')
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  const imagen = document.createElement('img')
  imagen.setAttribute('src', estudiante['imagen'])
  card.appendChild(imagen)
  const nombre = document.createElement('h5')
  // nombre.innerText = estudiante["nombre"]
  nombre.innerHTML = `<p>nombre: <strong>${estudiante['nombre']}</strong></p>`
  card.appendChild(nombre)
  col.appendChild(card)
  return col
}

// console.log(document.querySelector('#contenedor-talentos'))
// console.log(document.querySelectorAll('.card'))
// console.log(document.querySelectorAll('div'))
