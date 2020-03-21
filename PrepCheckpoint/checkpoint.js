
// Funciones

function sumArray(array, n) {
// Escribir un algoritmo que, dada una lista de números ordenados un número N, 
// te devuelva VERDADERO si alguna combinación de dos números cualesquiera suman N, y devuelva FALSO si ninguna combinación
// de dos números sumados da como resultado el número N.
// ejemplo:
// [2,5,7,10,11,15,20] y 13  // verdadero     2+11 suman 13
// [2,5,7,10,11,15,20] y 14  // falso

};
function menorMayor(numeros) {
// Escribi una función llamada menorMayor que tome como entrada un arreglo de números y devuelva un arreglo 
// que contenga el menor número en la posición cero y el mayor número en la posición 1.
// el arreglo numeros tendra por lo menos dos numeros siempre;
// menorMayor([4, 6, 1, 7, 15]) ==> [1, 15]

}

function stringMasLarga(strings) {
  // Escribe una función llamada stringMasLarga, que tome un arreglo de strings llamado 'strings'
  // tu función debe retornar el string más largo que hay en el arreglo
  // si hay dos strings del mismo tamanio devolve la que este primero en el arreglo (menor indice);
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'

}

function aplastarArreglo(array) {
  // Crear una funcion que reciba un arreglo de arreglos de numeros
  // y devuelva un nuevo arreglo con todos los numeros
  // ejemplo:
  // aplastarArreglo([[1,2,3,4], [5,6], [7,8,9]])
  // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // pista: podes usar forEachs anidados;

}

function pluck() { 
// Escribi una función pluck en el prototipo de Arrays,
// que recibe el nombre de una propiedad de un objeto.
// La función va a devolver un nuevo arreglo con solo los
// valores dentro de la propiedad recibida, por ejemplo:
// var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
// productos.pluck('name') // ['TV LCD', 'Computadora']
// tip: es una buena oportunidad para usar map.


}

// =======================================================================

// Desde ahora vas a trabajar con un arreglo de personas, cada persona tiene la forma:
// Persona {
//     nombre,
//     edad,
//     hobbies: [],
//     amigos: [
//       { 
//         nombre,
//       },
//     ],
//   }
// Podes encontrar el arreglo completo con el que vamos a testear en `checkpoint.test.js`

function getFriends(personas, nombre) {
  // Escribe una función que devuela un arreglo con los nombres de los amigos
  // de la persona con el nombre 'nombre'
  // getFriends(personas, 'Martin') => ['toni', 'Leo', 'Manu']
  // tips: podes usar la funcion pluck que hiciste antes!

}

function getPromedioEdad(personas) {
  // Escribe una función que devuelva el promedio de edad de las personas en el arreglo 'personas'
  // tips: reduce!
  // iniciar el acc en 0! si no, por defecto cree que es un objeto!

}

function getEstadisticas(personas) {
  // Escribe una funcion que devuelva un arreglo
  // de objetos de estadisticas de cada persona, este objeto debe tener  
  // la forma:
  // {
  //   cantidadDeAmigos: ,
  //   cantidadDeHobbies: ,
  //   cantidadDeLetrasDelNombre: ,
  //   anioDeNacimiento:  ,
  // }
  // tip: map!
  // podes usar un objeto literal como el de arriba e ir calculando ahi!

};

function crearClasePersona() {
  // Crear una función para construir objeto de tipo Persona.
  // el constructor debe recibir: nombre, edad, hobbies (opcional), amigos (opcional)
  // Agregar los métodos de los ejericios anteriores al prototipo de Persona (getFriends, getEstadisticas y getPromedioEdad.
  // Agregar los métodos addHobby() y addFriend() al prototipo de Persona.
  // el metodo addFriend recibe un string nombre y debe agregar un objeto:
  // { nombre: 'nombre'}
  // tip: Recuerden inicializar bien las propiedades que sean arreglos u objetos
  // usando el operador "||".
  // Esta funcion debe retonar la clase Persona.
  
}


/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

}
// No modifiques nada debajo de esta linea
// 
module.exports = {
  sumArray,
  menorMayor,
  stringMasLarga,
  aplastarArreglo,
  pluck,
  getFriends,
  getPromedioEdad,
  getEstadisticas,
  crearClasePersona,
  filtrar
}