import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = isInCart(product.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };
  const getTotalItems = () => {
    let cantidadTotal = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);
    return cantidadTotal;
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };

  const getTotalPrice = () => {
    let precioTotal = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity * elemento.price;
    }, 0);
    return precioTotal;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
