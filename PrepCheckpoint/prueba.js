/*
var articulos = [
                { name: 'TV LCD', price: 100 },
                { name: 'Computadora', price: 500 }
                ];






Array.prototype.pluck = function () {
    var nuevo = [];
    for (let i = 0; i < this.length; i++) {
    nuevo.push (this[i].name)
    
     } return nuevo
};

console.log (articulos.pluck())*/
var personas =[
    {
      nombre: 'Emi',
      edad: 21,
      hobbies: ['correr', 'dormir', 'nadar'],
      amigos: [
        { 
          nombre: 'Martin',
        },{
          nombre: 'Leo',
        }
      ],
    }, {
      nombre: 'Franco',
      edad: 22,
      hobbies: ['futbol', 'golf'],
      amigos: [
        {
          nombre: 'Emi',
        }, {
          nombre: 'Jimmy',
        }, {
          nombre: 'Matias',
        }
      ],
    },
    {
      nombre: 'Martin',
      edad: 35,
      hobbies: ['Cancha', 'emprender'],
      amigos: [
        {
          nombre: 'Toni',
        }, {
          nombre: 'Leo',
        }, {
          nombre: 'Manu',
        }
      ],
    },
  ];
/*
  for (let i = 0; i < personas.length; i++) {
      var friend = []
      if (personas[i].nombre == "Emi") {
          for (let j = 0; j < personas[i].amigos.length; j++) {
            friend.push (personas[i].amigos[j].nombre)
              
          } console.log (friend)
          
        } 
      
  }*/
/*
personas.prototype.pluck = function (nombre) {
    var nuevo = [];
    for (let i = 0; i < nombre.amigos.length; i++) {
    nuevo.push (nombre.amigos[i][this.nombre])
    
     } return nuevo
  };*/
  /*
  function getFriends(personas, nombre) {
    var friend = [];
    for (let i = 0; i < personas.length; i++) {
      
      if (personas[i].nombre == nombre) {
          for (let j = 0; j < personas[i].amigos.length; j++) {
            friend.push (personas[i].amigos[j].nombre)
          
          } return (friend)
          
        } 
      
  } 

  }
console.log (getFriends(personas, "Emi"))
console.log (getFriends(personas))
*/
console.log (personas[2].edad)
var promedio = personas.reduce (function(acc,edad,index){ return (acc + personas[index].edad) / personas.length
},0)
console.log (promedio)
