const estudiantes = [
  { imagen: "./assets/img/michel_valenzuela.jpg", nombre: "Michel", habilidades: "etc 1" },
  { imagen: "./assets/img/chancho.jpg", nombre: "Marietta", habilidades: "etc 2" },
  { imagen: "./assets/img/chancho.jpg", habilidades: "etc 3", nombre: "Yo" },
  { imagen: "./assets/img/medium_yo.jpg", habilidades: "etc 4", nombre: "Cristian", fondo_oscuro: false },
  { imagen: "./assets/img/medium_yo.jpg", habilidades: "etc 4", nombre: "Cristian", fondo_oscuro: true },
  { imagen: "./assets/img/medium_yo.jpg", habilidades: ["Technical Analysis", "Design", "Python", "HTML & CSS"], nombre: "Cristian" },
]

/* equivalente en lenguaje ruby.
def nombre_de_funcion(argumento1, argumento2)
  #cuerpo de la funcion
end
*/

function nombre_de_funcion(argumento1, argumento2) {
  //cuerpo de la funcion
}
const contenedor_talentos = document.querySelector('#contenedor-talentos')
estudiantes.forEach(estudiante => {
  console.log("Estudiante: ", estudiante)
  console.log("Nombre estudiante: ", estudiante["nombre"])
  let imagen = document.createElement('img')
  imagen.setAttribute('src', estudiante["imagen"])
  contenedor_talentos.appendChild(imagen)
  let nombre = document.createElement('h5')
  // nombre.innerText = estudiante["nombre"]
  nombre.innerHTML = `<p>nombre: <strong>${estudiante["nombre"]}</strong></p>`
  contenedor_talentos.appendChild(nombre)
});


// console.log(document.querySelector('#contenedor-talentos'))
// console.log(document.querySelectorAll('.card'))
// console.log(document.querySelectorAll('div'))