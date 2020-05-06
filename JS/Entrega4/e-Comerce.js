//#################################################################################
//#### Crear un falso e - commerce. Por un lado tenemos todos los artículos #######
//#### que forman el stock de la tienda con una clase item que consta de nombre ###
//### del artículo y precio.Tendremos también un usuario que añade cosas a su #####
//### carrito, que es privado.Los artículos cuando los metemos al carrito los #####
//## convertimos un tipo de dato que guarda las unidades que tiene el usuario de ##
//# dicho artículo, lo llamaremos CartItem.La tienda es la encargada de imprimir ##
//######### un ticket por la consola cuando se lo ordena el usuario. ##############
//#################################################################################
/*
const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];
class Tienda {}

class Item {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  static crearCatalogo(itemNames, itemPrices) {
    return itemNames.map((nombre, index) => {
      return new Item(nombre, itemPrices[index]);
    });
  }
}

class Carrito {
  unidades = 1;
  constructor(item) {
    this.item = item;
  }
  incrementar(item) {
    this.unidades++;
  }
}

class Cliente {
  #carrito = [];
  constructor(nombre) {
    this.nombre = nombre;
  }
  añadirAlCarrito(item) {
    for (let i = 0; i < itemNames.length; i++) {
      if (Carrito[i] != itemNames[i]) {
        this.#carrito.push(new Carrito(item));
      } else {
        this.#carrito(i).incrementar(item);
      }
    }
  }
}

const catalogue = Item.crearCatalogo(itemNames, itemPrices);
console.log(catalogue);
const cliente1 = new Cliente('Juan');
const cliente2 = new Cliente('Paula');
const cliente3 = new Cliente('Nevenka');
cliente1.añadirAlCarrito(catalogue[1]);
cliente2.añadirAlCarrito(catalogue[2]);
cliente3.añadirAlCarrito(catalogue[3]);
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
*/

//#################################################################################
//####################### SEGUNDA APROXIMACIÓN ####################################
//#################################################################################
//#### Crear un falso e - commerce. Por un lado tenemos todos los artículos #######
//#### que forman el stock de la tienda con una clase item que consta de nombre ###
//### del artículo y precio.Tendremos también un usuario que añade cosas a su #####
//### carrito, que es privado.Los artículos cuando los metemos al carrito los #####
//## convertimos un tipo de dato que guarda las unidades que tiene el usuario de ##
//# dicho artículo, lo llamaremos CartItem.La tienda es la encargada de imprimir ##
//######### un ticket por la consola cuando se lo ordena el usuario. ##############
//#################################################################################

const itemNames = ["Camisa", "Pantalon", "Calcetines"]; // Array de artículos
const itemPrices = [13, 27, 100]; // Array de precios

class Item {
  //Una clase item donde voy a crear el catálogo.
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  static crearCatalogo(itemNames, itemPrices) {
    //Creo un array nuevo que contenga precios y artículos.
    return itemNames.map((nombre, index) => {
      return new Item(nombre, itemPrices[index]);
    });
  }
}

class CartItem {
  cantidad = 1;

  constructor(item) {
    this.item = item;
  }
  incrementar() {
    this.cantidad++;
  }

  fillCart(cantidad, catalogo) {
    for (let i = 0; i < cantidad; i++) {
      const itemIndex = Math.floor(Math.random() * catalogo.length);
      this.addtoCarrito(catalogue[itemIndex]);
    }
  }
}

class Cliente {
  //En la clase cliente entiendo que añado el atributo privado Carrito como un array
  // y el método "añadir al carrito" que he intentado que compruebe si ya existe el artículo
  // o no pero de momento tampoco lo he conseguido.
  #carrito = [];
  constructor(nombre) {
    this.nombre = nombre;
  }

  addtoCarrito(item) {
    if (new CartItem(item)) {
      for (const cartItem of cartItem.length) {
        if (name === cartItem.item.name) {
          cartItem.incrementar();
          return;
        }
      }
      this.#carrito.push(new CartItem(item));
    }
  }
}

/*
//YO QUÉ SÉ, YA.
fillCart(item) {
    for (let i = 0; i < itemNames.length; i++) {
      if (Carrito[i] != itemNames[i]) {
        this.#carrito.push(new Carrito(item));
      } else {
        this.#carrito.incrementar(cantidad);
      }
    }
  }*/

class Tienda {
  // En esta clase intento declarar el método de salida al pago "checkout" en el que
  // creo que ya me he hecho definitivamente un lío. Quizá deba replantearme el ejercicio
  // entero porque siento que estoy dando vueltas sobre lo mismo. En el próximo intento
  // lo haré sin implementar esta función, manualmente, a ver si lo consigo.
  nombre;
  constructor(nombre) {
    this.nombre = nombre;
  }
  checkOut(factura) {
    for (const item of factura) {
      console.log(cartItem`${cartItem.item.nombre}`);
      console.log(cantidad`${cart.cantidad}`);
      console.log(precio`${cartItem.item.precio}`);
      console.log(total`${cartItem.item.precio * cartItem.cantidad}`);
    }
    console.log(factura);
  }
}

const catalogue = Item.crearCatalogo(itemNames, itemPrices);
console.log(catalogue);
const tienda = new Tienda("La tienda de los calcetines carísimos.");
const cliente1 = new Cliente("Juan");
const cliente2 = new Cliente("Paula");
const cliente3 = new Cliente("Nevenka");
cliente1.fillCart(6, catalogue);
cliente1.checkOut(cartItem);
console.log(tienda);
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

//#############################################################################################
//################## TERCERA APROXIMACIÓN FRACASADA TODAVÍA ###################################
//#############################################################################################

const itemNames = ["Camisa", "Pantalon", "Calcetines"]; // Array de artículos
const itemPrices = [13, 27, 100]; // Array de precios

class Item {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  static crearCatalogo(itemNames, itemPrices) {
    //Creo un array nuevo que contenga precios y artículos.
    return itemNames.map((nombre, index) => {
      return new Item(nombre, itemPrices[index]);
    });
  }
}

class CartItem {
  cantidad = 1;
  constructor(item) {
    this.item = item;
  }
  incrementar() {
    this.cantidad++;
  }
}

class Cliente {
  #carrito = [];
  constructor(nombre) {
    this.nombre = nombre;
  }

  addtoCarrito(item) {
    for (let i = 0; i < itemNames.length; i++) {
      if (Carrito[i] != itemNames[i]) {
        this.#carrito.push(new Carrito(item));
      } else {
        this.#carrito.incrementar(cantidad);
      }
    }

    if (new CartItem(item)) {
      for (const cartItem of cartItem.length) {
        if (name === cartItem.item.name) {
          cartItem.incrementar();
          return;
        }
      }
      this.#carrito.push(new CartItem(item));
    }
  }

  fillCart(cantidad, catalogue) {
    for (let i = 0; i <= cantidad; i++) {
      const itemIndex = Math.floor(Math.random() * catalogue.length);
      this.addtoCarrito(catalogue[i]);
    }
    cliente1.fillCart(6, catalogue);
    cliente2.fillCart(6, catalogue);
    cliente3.fillCart(6, catalogue);
  }
}
/*
(item) {
    for (let i = 0; i < itemNames.length; i++) {
      if (Carrito[i] != itemNames[i]) {
        this.#carrito.push(new Carrito(item));
      } else {
        this.#carrito.incrementar(cantidad);
      }
    }


  }
*/
/*
class Tienda {
  // En esta clase intento declarar el método de salida al pago "checkout"
  nombre;
  constructor(nombre) {
    this.nombre = nombre;
  }
  checkOut(factura) {
    for (const item of cartItem) {
      console.log(cartItem`${cartItem.item.nombre}`);
      console.log(cantidad`${cart.cantidad}`);
      console.log(precio`${cartItem.item.precio}`);
      console.log(total`${cartItem.item.precio * cartItem.cantidad}`);
    }
    console.log(cartItem);
  }
}

const catalogue = Item.crearCatalogo(itemNames, itemPrices);
console.log(catalogue);
const tienda = new Tienda('La tienda de los calcetines carísimos.');
const cliente1 = new Cliente('Juan');
const cliente2 = new Cliente('Paula');
const cliente3 = new Cliente('Nevenka');

//cliente1.checkOut(cartItem);
console.log(tienda);
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
*/
