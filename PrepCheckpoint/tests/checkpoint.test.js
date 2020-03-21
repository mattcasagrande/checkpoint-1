var expect = require("chai").expect;
/* eslint-disable no-undef */
const {
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
} = require('../checkpoint.js');

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

describe('Funciones', function() {
  describe('sumArray', function() {
    it('should return true with [2,5,7,10,11,15,20], 2 + 11 = 13', function() {
      expect(sumArray([2,5,7,10,11,15,20], 13)).to.be.true;
    });
    it('should return false.', function() {
      expect(sumArray([2,5,7,10,11,15,20], 14)).to.be.false;
    });
    it('should return false (cant sum the same number with itself)', function() {
      expect(sumArray([2,5,7,10,11,15,20], 4)).to.be.false;
    });
  });
  describe('menorMayor', function() {
    it('should return [1, 10] for [1,2,3,4,5,6,7,8,9,10]', function() {
      expect(menorMayor([1,2,3,4,5,6,7,8,9,10])).to.deep.equal([1, 10]);
    });
    it('should return [-10, 10] for [-10,2,3,4,5,6,7,8,9,10]', function() {
      expect(menorMayor([-10,2,3,4,5,6,7,8,9,10])).to.deep.equal([-10, 10]);
    });
     it('should return [1, 10] for [10, 1]', function() {
      expect(menorMayor([10, 1])).to.deep.equal([1, 10]);
    });
  });
  describe('stringMasLarga', function() {
    it('should return "guten tag"', function() {
      expect(stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag'])).to.equal('guten tag');
    });
    it('should return "JavaScript"', function() {
      expect(stringMasLarga(['JavaScript', 'HTML', 'CSS'])).to.equal('JavaScript');
    });
  });
  describe('aplastarArreglo', function() {
    it('should return [1,2,3] from [[1], [2,3]]', function() {
      expect(aplastarArreglo([[1], [2,3]])).to.deep.equal([1,2,3]);
    });
    it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9] from [[1,2,3,4], [5,6], [7,8,9]]', function() {
      expect(aplastarArreglo([[1,2,3,4], [5,6], [7,8,9]])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
  describe('pluck', function() {
    var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    it('should return ["TV LCD", "Computadora"]', function() {
      pluck();
      expect(productos.pluck('name')).to.deep.equal(['TV LCD', 'Computadora']);
    });
    it('should return [100, 500]', function() {
      pluck();
      expect(productos.pluck('price')).to.deep.equal([100, 500]);
    });
  });
});

describe('Funciones', function() {
  describe('getFriends', function() {
    it("should return ['toni', 'Leo', 'Manu'] with name 'Martin'", function() {
      pluck();
      expect(getFriends(personas, 'Martin')).to.deep.equal(['Toni', 'Leo', 'Manu']); 
    });
    it("should return ['Martin', 'Leo'] with name 'Emi'", function() {
      pluck();
      expect(getFriends(personas, 'Emi')).to.deep.equal(['Martin', 'Leo']); 
    });
  })
  describe('getPromedioEdad', function() {
    it('should return 26', function() {
      expect(getPromedioEdad(personas)).to.equal(26);
    });
  })
  describe('getEstadisticas', function() {
    it('should return estadisticas', function() {
      expect(getEstadisticas(personas)).to.deep.equal([ { cantidadDeAmigos: 2,
    cantidadDeHobbies: 3,
    cantidadDeLetrasDelNombre: 3,
    anioDeNacimiento: 1999 },
  { cantidadDeAmigos: 3,
    cantidadDeHobbies: 2,
    cantidadDeLetrasDelNombre: 6,
    anioDeNacimiento: 1998 },
  { cantidadDeAmigos: 3,
    cantidadDeHobbies: 2,
    cantidadDeLetrasDelNombre: 6,
    anioDeNacimiento: 1985 } ]
)
    });
  })
  describe('crearClasePersona', function() {
    it('should return a user constructor that correctly builds user objects', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin'}]);
        expect(persona.nombre).to.equal('toni');
        expect(persona.edad).to.equal(23);
        expect(persona.hobbies).to.deep.equal(['futbol']);
        expect(persona.amigos).to.deep.equal([{nombre:'martin'}]);
    });
    it('should return a user constructor that correctly builds user objects without hobbies and amigos', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23);
        expect(persona.nombre).to.equal('toni');
        expect(persona.edad).to.equal(23);
        expect(persona.hobbies).to.deep.equal([]);
        expect(persona.amigos).to.deep.equal([]);
    });
    it('should have getFriends, getEstadisticas and getPromedioEdad as methods', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23);
        expect(typeof persona.getFriends).to.be.equals('function');
        expect(persona.getFriends).to.exist;
        expect(typeof persona.getEstadisticas).to.be.equals('function');
        expect(persona.getEstadisticas).to.exist;
        expect(typeof persona.getPromedioEdad).to.be.equals('function');
        expect(persona.getPromedioEdad).to.exist;
    });
    it('should have addHobby, addFriend', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23);
        expect(typeof persona.addHobby).to.be.equals('function');
        expect(persona.addHobby).to.exist;
        expect(typeof persona.addFriend).to.be.equals('function');
        expect(persona.addFriend).to.exist;
    });
    it('should add a friend', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23);
        persona.addFriend('Leo');
        expect(persona.amigos[0] && persona.amigos[0].nombre).to.equal('Leo');
    });
    it('should add a hobbie', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23);
        persona.addHobby('hobbie');
        console.log(persona);
        expect(persona.hobbies[0]).to.equal('hobbie');
    });

  });
});

describe('Extra Credit', function() {
  describe('Filter', function() {
    filtrar();
    it('should filter', function() {
      expect(personas.filtrar(p => p.edad <= 22).length).to.equal(2);
    })
    it('should filter ok', function() {
      expect(personas.filtrar(p => p.edad > 50).length).to.equal(0);
    })
  })
});