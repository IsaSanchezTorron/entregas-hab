"use strict";

const itemNames = ["Camisa", "Pantalon", "Calcetines", "Bufanda", "Abrigo"]; // Array de artículos
const itemPrices = [35, 60, 10, 20, 100]; // Array de precios

const catalogo = function crearCatalogo(itemNames, itemPrices) {
  //Creo un array nuevo que contenga precios y artículos.
  return itemNames.map((nombre, index) => {
    return new Item(nombre, itemPrices[index]);
  });
};

class Item {
  nombre;
  precio;
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class CartItem {
  item;
  unidades = 1;
  constructor(item) {
    this.item = item;
  }
  incrementar() {
    this.unidades++;
  }
}

class User {
  nombre;
  #cart = [];
  constructor(nombre) {
    this.nombre = nombre;
  }
  get pagar() {
    return this.#cart;
  }

  comprobarRepeticion(newItem) {
    for (const itemInCart of this.#cart) {
      if (itemInCart.item.nombre === newItem.nombre) {
        return itemInCart;
      }
    }
    return false;
  }
  addToCart(newItem) {
    if (this.checkIfRepeated(newItem)) {
      this.checkIfRepeated(newItem).increase();
      return this.#cart;
    } else {
      this.#cart.push(new CartItem(newItem));
      return this.#cart;
    }
  }

  fillTheCart(cartSize, shop) {
    for (let i = 0; i < cartSize; i++) {
      this.addToCart(
        inventario[Math.floor(Math.random() * Math.floor(inventario.length))]
      );
    }
  }
}

class Tienda {
  static checkout(user) {
    for (const item of user.pay) {
      console.log(
        `${item.item.nombre} x ${item.unidades} :${item.item.price}€  === ${
          item.item.price * item.unidades
        }€`
      );
    }

    console.log(
      `TOTAL: ${user.pay.reduce(
        (total, item) =>
          Math.round((total + item.item.precio * item.unidades) * 100) / 100,
        0
      )}€`
    );
    return user.pay;
  }
}

const myUser = new User("Isabel");
myUser.fillTheCart(4, myShop);
Tienda.checkout(myUser);
