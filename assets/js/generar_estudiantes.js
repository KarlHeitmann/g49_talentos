/* eslint-disable camelcase */
/* eslint-disable dot-notation */
/* eslint-disable comma-dangle */

const estudiantes = [
  {
    imagen: './assets/img/michel_valenzuela.jpg',
    nombre: 'Michel',
    habilidades: 'etc 1',
    personalizable: function () {
      return `
        <span class="badge rounded-pill" style="background-color: #415A77;">Techincal Analysis</span>
        <span class="badge rounded-pill" style="background-color: #415A77;">Design</span>
        <span class="badge rounded-pill" style="background-color: #415A77;">Python</span>
        <span class="badge rounded-pill" style="background-color: #415A77;">HTML & CSS</span>
        <span class="badge rounded-pill" style="background-color: #415A77;">Inglés B2</span>
        <span class="badge rounded-pill" style="background-color: #415A77;">Deutsch A1</span>
        <span class="badge rounded-pill" style="background-color: #415A77;">Ashtanga</span>
      `
    }
  },
  {
    imagen: './assets/img/chancho.jpg',
    nombre: 'Marietta',
    habilidades: 'etc 2',
    personalizable: () => {
      return ''
    }
  },
  {
    imagen: './assets/img/chancho.jpg',
    habilidades: 'etc 3',
    nombre: 'Yo',
    personalizable: () => {
      return ''
    }
  },
  {
    imagen: './assets/img/medium_yo.jpg',
    habilidades: 'etc 4',
    nombre: 'Cristian',
    fondo_oscuro: false,
    personalizable: () => {
      return ''
    }
  },
  {
    imagen: './assets/img/medium_yo.jpg',
    habilidades: 'etc 4',
    nombre: 'Cristian',
    fondo_oscuro: true,
    personalizable: () => {
      return ''
    }
  },
  {
    imagen: './assets/img/medium_yo.jpg',
    habilidades: ['Technical Analysis', 'Design', 'Python', 'HTML & CSS'],
    nombre: 'Cristian',
    personalizable: () => {
      return ''
    }
  },
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
  const card_estudiante = generarTarjetaEstudianteEstandar(estudiante)
  contenedor_talentos.appendChild(card_estudiante)
})

function generarTarjetaEstudianteEstandar (estudiante) {
  const col = document.createElement('div')
  col.setAttribute('class', 'col-sm-4')

  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  const imagen = document.createElement('img')
  imagen.setAttribute('src', estudiante['imagen'])
  card.appendChild(imagen)

  const card_body = document.createElement('div')
  card_body.setAttribute('class', 'card-body')

  card_body.innerHTML = `
              <h5 class="card-title">${estudiante['nombre']}</h5>
              <p class="card-text">${estudiante['habilidades']}</p>
              ${estudiante['personalizable']()}
  `

  card.appendChild(card_body)
  col.appendChild(card)
  return col
}

// console.log(document.querySelector('#contenedor-talentos'))
// console.log(document.querySelectorAll('.card'))
// console.log(document.querySelectorAll('div'))
